import './styles/global.css';
import './components/button/button.css';
import './components/input/input.css';
import './components/link/link.css';
import './pages/login/auth.css';

import { renderDOM } from './core';
import LoginPage from './pages/login/LoginPage';

document.addEventListener('DOMContentLoaded', () => {
  renderDOM('#app', new LoginPage());
});
