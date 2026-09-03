import './styles/global.css';
import './components/avatar/avatar.css';
import './components/button/button.css';
import './components/profile-row/profile-row.css';
import './pages/profile/profile.css';

import { render } from './utils/render';
import { profileFields } from './utils/data';
import template from './pages/edit-profile/edit-profile.hbs?raw';

render(template, { fields: profileFields });
