import './styles/global.css';
import './components/avatar/avatar.css';
import './components/link/link.css';
import './components/profile-row/profile-row.css';
import './pages/profile/profile.css';

import { renderDOM } from './core';
import ProfilePage from './pages/profile/ProfilePage';

document.addEventListener('DOMContentLoaded', () => {
  renderDOM('#app', new ProfilePage());
});
