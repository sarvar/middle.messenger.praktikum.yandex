import { Block, type BlockProps } from '../../core';
import Link from '../../components/link/Link';
import template from './error.hbs?raw';

interface ErrorPageProps extends BlockProps {
  code: string;
  text: string;
}

export default class ErrorPage extends Block<ErrorPageProps> {
  constructor(props: ErrorPageProps) {
    super({
      ...props,
      link: new Link({ label: 'Назад к чатам', href: '/chats.html' }),
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
