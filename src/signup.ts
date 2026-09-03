import './styles/global.css';
import './components/button/button.css';
import './components/input/input.css';
import './components/link/link.css';
import './pages/login/auth.css';

import { render } from './utils/render';
import template from './pages/signup/signup.hbs?raw';

render(template);
