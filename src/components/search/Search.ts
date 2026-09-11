import { Block, type BlockProps } from '../../core';
import template from './search.hbs?raw';

export default class Search extends Block<BlockProps> {
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
