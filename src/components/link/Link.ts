import { Block, type BlockProps } from '../../core';
import template from './link.hbs?raw';

interface LinkProps extends BlockProps {
  label: string;
  href: string;
  class?: string;
}

export default class Link extends Block<LinkProps> {
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
