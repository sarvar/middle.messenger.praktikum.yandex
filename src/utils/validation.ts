export type ValidationRule =
  | 'first_name'
  | 'second_name'
  | 'display_name'
  | 'login'
  | 'email'
  | 'password'
  | 'password_repeat'
  | 'old_password'
  | 'new_password'
  | 'phone'
  | 'message';

type Rule = {
  test: (value: string) => boolean;
  message: string;
};

const NAME_REGEXP = /^[A-ZА-ЯЁ][a-zA-Zа-яёА-ЯЁ-]*$/;
const LOGIN_REGEXP = /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/;
const EMAIL_REGEXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;
const PASSWORD_REGEXP = /^(?=.*[A-ZА-ЯЁ])(?=.*\d).{8,40}$/;
const PHONE_REGEXP = /^\+?\d{10,15}$/;

const RULES: Record<ValidationRule, Rule> = {
  first_name: {
    test: (value) => NAME_REGEXP.test(value),
    message: 'Латиница или кириллица, первая буква заглавная, без пробелов и цифр',
  },
  second_name: {
    test: (value) => NAME_REGEXP.test(value),
    message: 'Латиница или кириллица, первая буква заглавная, без пробелов и цифр',
  },
  display_name: {
    test: (value) => NAME_REGEXP.test(value),
    message: 'Латиница или кириллица, первая буква заглавная, без пробелов и цифр',
  },
  login: {
    test: (value) => LOGIN_REGEXP.test(value),
    message: 'От 3 до 20 символов, латиница, не только цифры, без пробелов',
  },
  email: {
    test: (value) => EMAIL_REGEXP.test(value),
    message: 'Латиница, может включать цифры и спецсимволы, обязательна собака',
  },
  password: {
    test: (value) => PASSWORD_REGEXP.test(value),
    message: 'От 8 до 40 символов, обязательна заглавная буква и цифра',
  },
  password_repeat: {
    test: (value) => PASSWORD_REGEXP.test(value),
    message: 'От 8 до 40 символов, обязательна заглавная буква и цифра',
  },
  old_password: {
    test: (value) => PASSWORD_REGEXP.test(value),
    message: 'От 8 до 40 символов, обязательна заглавная буква и цифра',
  },
  new_password: {
    test: (value) => PASSWORD_REGEXP.test(value),
    message: 'От 8 до 40 символов, обязательна заглавная буква и цифра',
  },
  phone: {
    test: (value) => PHONE_REGEXP.test(value),
    message: 'От 10 до 15 символов, состоит из цифр, может начинаться с плюса',
  },
  message: {
    test: (value) => value.trim().length > 0,
    message: 'Сообщение не должно быть пустым',
  },
};

export function validate(rule: ValidationRule, value: string): string {
  const validator = RULES[rule];

  if (!validator) {
    return '';
  }

  return validator.test(value) ? '' : validator.message;
}

export function isValidationRule(name: string): name is ValidationRule {
  return name in RULES;
}
