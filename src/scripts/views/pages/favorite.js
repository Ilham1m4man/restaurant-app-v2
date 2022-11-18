/* eslint-disable no-new */
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantSearchView from "./liked-restaurants/favorite-restaurant-search-view";
import FavoriteRestaurantSearchPresenter from "./liked-restaurants/favorite-restaurant-search-presenter";
import FavoriteRestaurantShowPresenter from "./liked-restaurants/favorite-restaurant-show-presenter";

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    /* new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb }); */
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const skipListener = document.querySelector('.skip-main');

    skipListener.href = ``;
    skipListener.href = `/#/favorite`;
    ['click', 'keydown'].map((event) => skipListener.addEventListener(event, () => {
      // eslint-disable-next-line no-unused-expressions
      restaurantsContainer.focus();
    }));

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `<h2 class="no-favorite" tabindex="0">You Don't Have Any Favorite Restaurant Yet...</h2>`;
      restaurantsContainer.classList.remove('posts');
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
    const loaderContainer = document.querySelector('#loader');
    loaderContainer.style.display = 'none';
  },
};

export default Favorite;
