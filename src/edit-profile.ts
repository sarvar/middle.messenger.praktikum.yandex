import './styles/global.css';
import './components/avatar/avatar.css';
import './components/button/button.css';
import './components/input/input.css';
import './pages/profile/profile.css';

import { renderDOM } from './core';
import EditProfilePage from './pages/edit-profile/EditProfilePage';

document.addEventListener('DOMContentLoaded', () => {
  renderDOM('#app', new EditProfilePage());
});
