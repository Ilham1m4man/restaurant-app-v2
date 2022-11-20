/* eslint-disable no-new */
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import FavoriteRestaurantSearchView from "./liked-restaurants/favorite-restaurant-search-view";
import FavoriteRestaurantSearchPresenter from "./liked-restaurants/favorite-restaurant-search-presenter";
import FavoriteRestaurantShowPresenter from "./liked-restaurants/favorite-restaurant-show-presenter";
import loadIndicatorRemover from "../../utils/load-indicator-remover";

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });

    const restaurantsContainer = document.querySelector('#restaurants');
    const skipListener = document.querySelector('.skip-main');

    skipListener.href = ``;
    skipListener.href = `/#/favorite`;
    ['click', 'keydown'].map((event) => skipListener.addEventListener(event, () => {
      // eslint-disable-next-line no-unused-expressions
      restaurantsContainer.focus();
    }));

    loadIndicatorRemover();
  },
};

export default Favorite;
