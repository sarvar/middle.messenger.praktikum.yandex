import { Block, type BlockProps } from '../../core';
import Input from '../../components/input/Input';
import ProfileForm from '../../components/profile-form/ProfileForm';
import template from './edit-password.hbs?raw';

export default class EditPasswordPage extends Block<BlockProps> {
  constructor() {
    super({
      form: new ProfileForm({
        fields: [
          new Input({ label: 'Старый пароль', name: 'old_password', type: 'password' }),
          new Input({ label: 'Новый пароль', name: 'new_password', type: 'password' }),
          new Input({ label: 'Повторите новый пароль', name: 'password_repeat', type: 'password' }),
        ],
      }),
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
