import { Block, type BlockProps } from '../../core';
import template from './avatar.hbs?raw';

interface AvatarProps extends BlockProps {
  size?: string;
}

export default class Avatar extends Block<AvatarProps> {
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
