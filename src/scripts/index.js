import './views/pages/restaurant-list';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';

/* const menu = document.querySelector('#header__menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const navList = document.querySelector('.list-container');

['click', 'keydown'].map((event) => menu.addEventListener(event, (e) => {
  navList.classList.toggle('open');
  e.stopPropagation();
}));

['click', 'keydown'].map((event) => hero.addEventListener(event, () => {
  navList.classList.remove('open');
}));

['click', 'keydown'].map((event) => main.addEventListener(event, () => {
  navList.classList.remove('open');
})); */

const app = new App({
  button: document.querySelector('#header__menu'),
  drawer: document.querySelector('.list-container'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

console.log('Hello Coders! :)');
