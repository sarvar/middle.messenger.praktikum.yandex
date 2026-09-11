import { Block, type BlockProps } from '../../core';
import { validate, isValidationRule } from '../../utils/validation';
import template from './input.hbs?raw';

interface InputProps extends BlockProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  class?: string;
}

export default class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        focusout: () => this.validateSelf(),
      },
    });
  }

  private get input(): HTMLInputElement | null {
    return this.getContent()?.querySelector('.input__field') ?? null;
  }

  public get value(): string {
    return this.props.value ?? '';
  }

  public get name(): string {
    return this.props.name;
  }

  public validateSelf(): boolean {
    const { name } = this.props;
    const value = this.input?.value ?? '';

    if (!isValidationRule(name)) {
      this.setProps({ value });

      return true;
    }

    const error = validate(name, value);

    this.setProps({ value, error });

    return error === '';
  }

  public showError(error: string): void {
    this.setProps({ error });
  }

  public clear(): void {
    this.setProps({ value: '', error: '' });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
