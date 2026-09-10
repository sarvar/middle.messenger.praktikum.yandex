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
}

export default class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        focusin: () => this.setError(''),
        focusout: () => this.validateSelf(),
      },
    });
  }

  private get input(): HTMLInputElement | null {
    return this.getContent()?.querySelector('.input__field') ?? null;
  }

  public get value(): string {
    return this.input?.value ?? '';
  }

  public get name(): string {
    return this.props.name;
  }

  public validateSelf(): boolean {
    const { name } = this.props;

    if (!isValidationRule(name)) {
      return true;
    }

    const error = validate(name, this.value);

    this.setError(error);

    return error === '';
  }

  public showError(error: string): void {
    this.setError(error);
  }

  private setError(error: string): void {
    const root = this.getContent();

    if (!root) {
      return;
    }

    const holder = root.querySelector('.input__error');

    if (holder) {
      holder.textContent = error;
    }

    root.classList.toggle('input_error', Boolean(error));
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
