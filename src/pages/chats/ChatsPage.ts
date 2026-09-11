import { Block, type BlockProps } from '../../core';
import Avatar from '../../components/avatar/Avatar';
import Link from '../../components/link/Link';
import Search from '../../components/search/Search';
import ChatItem from '../../components/chat-item/ChatItem';
import Message from '../../components/message/Message';
import Input from '../../components/input/Input';
import { chats, messages } from '../../utils/data';
import template from './chats.hbs?raw';

export default class ChatsPage extends Block<BlockProps> {
  constructor() {
    const messageInput = new Input({
      label: '',
      name: 'message',
      placeholder: 'Сообщение',
      class: 'input_message',
    });

    super({
      profileLink: new Link({ label: 'Профиль >', href: '/profile.html' }),
      search: new Search({}),
      avatar: new Avatar({}),
      selected: 'Вадим',
      chats: chats.map((chat) => new ChatItem({ ...chat })),
      messages: messages.map((message) => new Message({ ...message })),
      messageInput,
      events: {
        submit: (event: Event) => this.handleSubmit(event, messageInput),
      },
    });
  }

  private handleSubmit(event: Event, messageInput: Input): void {
    event.preventDefault();

    if (!messageInput.validateSelf()) {
      return;
    }

    console.log({ message: messageInput.value });

    messageInput.clear();
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
