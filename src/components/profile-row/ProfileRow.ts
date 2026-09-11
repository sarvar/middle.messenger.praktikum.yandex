import { Block, type BlockProps } from '../../core';
import template from './profile-row.hbs?raw';

interface ProfileRowProps extends BlockProps {
  label: string;
  value: string;
}

export default class ProfileRow extends Block<ProfileRowProps> {
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
