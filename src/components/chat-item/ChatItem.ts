import { Block, type BlockProps } from '../../core';
import Avatar from '../avatar/Avatar';
import template from './chat-item.hbs?raw';

interface ChatItemProps extends BlockProps {
  name: string;
  time: string;
  text: string;
  count?: number;
  own?: boolean;
  active?: boolean;
  onClick?: (name: string) => void;
}

export default class ChatItem extends Block<ChatItemProps> {
  constructor(props: ChatItemProps) {
    super({
      ...props,
      avatar: new Avatar({}),
      events: {
        click: () => props.onClick?.(props.name),
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
