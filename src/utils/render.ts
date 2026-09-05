import Handlebars from 'handlebars';

import avatar from '../components/avatar/avatar.hbs?raw';
import button from '../components/button/button.hbs?raw';
import chatItem from '../components/chat-item/chat-item.hbs?raw';
import input from '../components/input/input.hbs?raw';
import link from '../components/link/link.hbs?raw';
import message from '../components/message/message.hbs?raw';
import profileRow from '../components/profile-row/profile-row.hbs?raw';
import search from '../components/search/search.hbs?raw';

Handlebars.registerPartial('avatar', avatar);
Handlebars.registerPartial('button', button);
Handlebars.registerPartial('chat-item', chatItem);
Handlebars.registerPartial('input', input);
Handlebars.registerPartial('link', link);
Handlebars.registerPartial('message', message);
Handlebars.registerPartial('profile-row', profileRow);
Handlebars.registerPartial('search', search);

export function render(template: string, context: object = {}): void {
  const root = document.getElementById('app');

  if (root) {
    root.innerHTML = Handlebars.compile(template)(context);
  }
}
