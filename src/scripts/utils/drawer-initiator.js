const DrawerInitiator = {
  init({ button, drawer, content }) {
    ['click', 'keydown'].map((kejadian) => button.addEventListener(kejadian, (event) => {
      this._toggleDrawer(event, drawer);
    }));

    ['click', 'keydown'].map((kejadian) => content.addEventListener(kejadian, (event) => {
      this._closeDrawer(event, drawer);
    }));
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
