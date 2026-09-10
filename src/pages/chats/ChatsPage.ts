import { Block, type BlockProps } from '../../core';
import Avatar from '../../components/avatar/Avatar';
import Link from '../../components/link/Link';
import Search from '../../components/search/Search';
import ChatItem from '../../components/chat-item/ChatItem';
import Message from '../../components/message/Message';
import { chats, messages } from '../../utils/data';
import { validate } from '../../utils/validation';
import template from './chats.hbs?raw';

export default class ChatsPage extends Block<BlockProps> {
  constructor() {
    super({
      profileLink: new Link({ label: 'Профиль >', href: '/profile.html' }),
      search: new Search({}),
      avatar: new Avatar({}),
      selected: 'Вадим',
      chats: chats.map((chat) => new ChatItem({ ...chat })),
      messages: messages.map((message) => new Message({ ...message })),
      events: {
        submit: (event: Event) => this.handleSubmit(event),
      },
    });
  }

  private handleSubmit(event: Event): void {
    event.preventDefault();

    const input = this.getContent()?.querySelector<HTMLInputElement>('.chats__input');

    if (!input) {
      return;
    }

    const error = validate('message', input.value);

    if (error) {
      console.log(error);

      return;
    }

    console.log({ message: input.value });

    input.value = '';
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
