import { Block, type BlockProps } from '../../core';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Link from '../../components/link/Link';
import { handleFormSubmit } from '../../utils/form';
import template from './login.hbs?raw';

export default class LoginPage extends Block<BlockProps> {
  constructor() {
    const fields = [
      new Input({ label: 'Логин', name: 'login', placeholder: 'ivanivanov' }),
      new Input({ label: 'Пароль', name: 'password', type: 'password' }),
    ];

    super({
      fields,
      button: new Button({ label: 'Авторизоваться', type: 'submit' }),
      link: new Link({ label: 'Нет аккаунта?', href: '/signup.html' }),
      events: {
        submit: (event: Event) => handleFormSubmit(event, fields),
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
