import './styles/global.css';
import './components/link/link.css';
import './pages/error/error.css';

import { render } from './utils/render';
import template from './pages/error/error.hbs?raw';

render(template, { code: '404', text: 'Не туда попали' });
