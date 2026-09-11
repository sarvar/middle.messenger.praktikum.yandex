import './styles/global.css';
import './components/avatar/avatar.css';
import './components/chat-item/chat-item.css';
import './components/input/input.css';
import './components/link/link.css';
import './components/message/message.css';
import './components/search/search.css';
import './pages/chats/chats.css';

import { renderDOM } from './core';
import ChatsPage from './pages/chats/ChatsPage';

document.addEventListener('DOMContentLoaded', () => {
  renderDOM('#app', new ChatsPage());
});
