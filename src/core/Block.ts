import Handlebars from 'handlebars';
import { nanoid } from './nanoid';
import EventBus from './EventBus';

type Events = Record<string, (event: Event) => void>;

export interface BlockProps {
  events?: Events;
  [key: string]: unknown;
}

type Children = Record<string, Block | Block[]>;

export default class Block<P extends BlockProps = BlockProps> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(8);

  protected props: P;

  protected children: Children;

  private eventBus: () => EventBus;

  private element: HTMLElement | null = null;

  constructor(propsWithChildren: P = {} as P) {
    const eventBus = new EventBus();
    const { props, children } = this.getChildrenAndProps(propsWithChildren);

    this.children = children;
    this.props = this.makePropsProxy(props);
    this.eventBus = () => eventBus;

    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private getChildrenAndProps(propsAndChildren: P): { props: P; children: Children } {
    const props = {} as P;
    const children: Children = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0 && value.every((item) => item instanceof Block)) {
        children[key] = value as Block[];
      } else if (value instanceof Block) {
        children[key] = value;
      } else {
        (props as Record<string, unknown>)[key] = value;
      }
    });

    return { props, children };
  }

  private registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this) as () => void);
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.renderComponent.bind(this));
  }

  private init(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected componentDidMount(): void {}

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((item) => item.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private componentDidUpdate(oldProps: P, newProps: P): void {
    if (this.shouldComponentUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected shouldComponentUpdate(oldProps: P, newProps: P): boolean {
    return oldProps !== newProps;
  }

  public setProps = (nextProps: Partial<P>): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  private renderComponent(): void {
    const block = this.render();

    this.removeEvents();

    const newElement = block.firstElementChild as HTMLElement;

    if (this.element && newElement) {
      this.element.replaceWith(newElement);
    }

    this.element = newElement;

    this.addEvents();
  }

  protected compile(template: string, context: P): DocumentFragment {
    const contextAndStubs: Record<string, unknown> = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component.map(
          (child) => `<div data-id="${child.id}"></div>`,
        );
      } else {
        contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
      }
    });

    const html = Handlebars.compile(template)(contextAndStubs);
    const temp = document.createElement('template');

    temp.innerHTML = html;

    const replaceStub = (component: Block) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
      const content = component.getContent();

      if (!stub || !content) {
        return;
      }

      stub.replaceWith(content);
    };

    Object.values(this.children).forEach((component) => {
      if (Array.isArray(component)) {
        component.forEach(replaceStub);
      } else {
        replaceStub(component);
      }
    });

    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  public getContent(): HTMLElement | null {
    if (this.element === null) {
      this.renderComponent();
    }

    return this.element;
  }

  private makePropsProxy(props: P): P {
    return new Proxy(props, {
      get: (target, prop: string) => {
        const value = target[prop];

        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop: string, value) => {
        const oldTarget = { ...target };

        (target as Record<string, unknown>)[prop] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);

        return true;
      },
      deleteProperty: () => {
        throw new Error('Нет доступа');
      },
    });
  }

  private addEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this.element?.addEventListener(eventName, events[eventName]);
    });
  }

  private removeEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this.element?.removeEventListener(eventName, events[eventName]);
    });
  }

  public show(): void {
    const content = this.getContent();

    if (content) {
      content.style.display = 'block';
    }
  }

  public hide(): void {
    const content = this.getContent();

    if (content) {
      content.style.display = 'none';
    }
  }
}
