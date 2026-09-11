import { Block, type BlockProps } from '../../core';
import Input from '../../components/input/Input';
import ProfileForm from '../../components/profile-form/ProfileForm';
import template from './edit-profile.hbs?raw';

export default class EditProfilePage extends Block<BlockProps> {
  constructor() {
    super({
      form: new ProfileForm({
        withAvatarInput: true,
        fields: [
          new Input({ label: 'Почта', name: 'email', value: 'pochta@yandex.ru' }),
          new Input({ label: 'Логин', name: 'login', value: 'ivanivanov' }),
          new Input({ label: 'Имя', name: 'first_name', value: 'Иван' }),
          new Input({ label: 'Фамилия', name: 'second_name', value: 'Иванов' }),
          new Input({ label: 'Имя в чате', name: 'display_name', value: 'Иван' }),
          new Input({ label: 'Телефон', name: 'phone', value: '+79099673030' }),
        ],
      }),
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
