import { Block, type BlockProps } from '../../core';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Link from '../../components/link/Link';
import { handleFormSubmit } from '../../utils/form';
import template from './signup.hbs?raw';

export default class SignupPage extends Block<BlockProps> {
  constructor() {
    const fields = [
      new Input({ label: 'Почта', name: 'email', placeholder: 'pochta@yandex.ru' }),
      new Input({ label: 'Логин', name: 'login', placeholder: 'ivanivanov' }),
      new Input({ label: 'Имя', name: 'first_name', placeholder: 'Иван' }),
      new Input({ label: 'Фамилия', name: 'second_name', placeholder: 'Иванов' }),
      new Input({ label: 'Телефон', name: 'phone', placeholder: '+79099673030' }),
      new Input({ label: 'Пароль', name: 'password', type: 'password' }),
      new Input({ label: 'Пароль (ещё раз)', name: 'password_repeat', type: 'password' }),
    ];

    super({
      fields,
      button: new Button({ label: 'Зарегистрироваться', type: 'submit' }),
      link: new Link({ label: 'Войти', href: '/index.html' }),
      events: {
        submit: (event: Event) => handleFormSubmit(event, fields),
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
