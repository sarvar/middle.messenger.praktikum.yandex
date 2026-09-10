import { Block, type BlockProps } from '../../core';
import template from './button.hbs?raw';

interface ButtonProps extends BlockProps {
  label: string;
  type?: string;
  class?: string;
  onClick?: (event: Event) => void;
}

export default class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({
      ...props,
      events: props.onClick ? { click: props.onClick } : {},
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
