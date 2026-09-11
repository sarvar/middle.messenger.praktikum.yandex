import { Block, type BlockProps } from '../../core';
import Avatar from '../../components/avatar/Avatar';
import Link from '../../components/link/Link';
import ProfileRow from '../../components/profile-row/ProfileRow';
import { profileFields } from '../../utils/data';
import template from './profile.hbs?raw';

export default class ProfilePage extends Block<BlockProps> {
  constructor() {
    super({
      avatar: new Avatar({ size: 'large' }),
      rows: profileFields.map((field) => new ProfileRow(field)),
      editData: new Link({ label: 'Изменить данные', href: '/edit-profile.html' }),
      editPassword: new Link({ label: 'Изменить пароль', href: '/edit-password.html' }),
      logout: new Link({ label: 'Выйти', href: '/index.html', class: 'link_danger' }),
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
