import { Block, type BlockProps } from '../../core';
import Avatar from '../../components/avatar/Avatar';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { handleFormSubmit } from '../../utils/form';
import template from './edit-profile.hbs?raw';

export default class EditProfilePage extends Block<BlockProps> {
  constructor() {
    const fields = [
      new Input({ label: 'Почта', name: 'email', value: 'pochta@yandex.ru' }),
      new Input({ label: 'Логин', name: 'login', value: 'ivanivanov' }),
      new Input({ label: 'Имя', name: 'first_name', value: 'Иван' }),
      new Input({ label: 'Фамилия', name: 'second_name', value: 'Иванов' }),
      new Input({ label: 'Имя в чате', name: 'display_name', value: 'Иван' }),
      new Input({ label: 'Телефон', name: 'phone', value: '+79099673030' }),
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
