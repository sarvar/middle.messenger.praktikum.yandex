import './styles/global.css';
import './components/link/link.css';
import './pages/error/error.css';

import { renderDOM } from './core';
import ErrorPage from './pages/error/ErrorPage';

document.addEventListener('DOMContentLoaded', () => {
  renderDOM('#app', new ErrorPage({ code: '404', text: 'Не туда попали' }));
});
