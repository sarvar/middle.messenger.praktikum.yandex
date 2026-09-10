import { Block, type BlockProps } from '../../core';
import Avatar from '../../components/avatar/Avatar';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { handleFormSubmit } from '../../utils/form';
import template from './edit-password.hbs?raw';

export default class EditPasswordPage extends Block<BlockProps> {
  constructor() {
    const fields = [
      new Input({ label: 'Старый пароль', name: 'oldPassword', type: 'password' }),
      new Input({ label: 'Новый пароль', name: 'password', type: 'password' }),
      new Input({ label: 'Повторите новый пароль', name: 'password_repeat', type: 'password' }),
    ];

    super({
      avatar: new Avatar({ size: 'large' }),
      fields,
      button: new Button({ label: 'Сохранить', type: 'submit' }),
      events: {
        submit: (event: Event) => handleFormSubmit(event, fields),
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
