import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import { createOfflineScreenTemplate } from './templates/template-creator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const homePage = routes['/'];
    const loaderContainer = document.querySelector('#loader');
    loaderContainer.style.display = 'flex';

    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._content.innerHTML = createOfflineScreenTemplate();
      setTimeout(async () => {
        this._content.innerHTML = await homePage.render();
        await homePage.afterRender();
      }, 3000);
    }
  }
}

export default App;
