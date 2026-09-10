import { Block, type BlockProps } from '../../core';
import template from './message.hbs?raw';

interface MessageProps extends BlockProps {
  text?: string;
  image?: string;
  time: string;
  own?: boolean;
}

export default class Message extends Block<MessageProps> {
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
