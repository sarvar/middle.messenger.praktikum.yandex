import './styles/global.css';
import './components/avatar/avatar.css';
import './components/chat-item/chat-item.css';
import './components/link/link.css';
import './components/message/message.css';
import './components/search/search.css';
import './pages/chats/chats.css';

import { render } from './utils/render';
import { chats, messages } from './utils/data';
import template from './pages/chats/chats.hbs?raw';

render(template, { chats, messages, selected: { name: 'Вадим' } });
