import './polyfill'; // make sure that polyfill is at first
import './updater';
import './devtool';
import { createRoot } from 'react-dom/client';
import 'cropperjs/dist/cropper.min.css';
import App from './app';

createRoot(document.querySelector('#root')!).render(<App />);
