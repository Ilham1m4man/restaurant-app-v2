/* eslint-disable class-methods-use-this */
import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <div class="content">
      <div class="search-bar">
        <input id="query" type="text" placeholder="Search">
      </div>
      <h2 class="content__heading" id="liked-heading">Your Liked Restaurant</h2>
      <div id="restaurants" class="restaurants-favorite posts" tabindex="0" aria-label="List of your favorite restaurants"></div>
    </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('input', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    const restaurantsContainer = document.getElementById('restaurants');

    if (restaurants.length) {
      restaurantsContainer.classList.add('posts');
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
      restaurantsContainer.classList.remove('posts');
    }
    restaurantsContainer.innerHTML = html;

    restaurantsContainer.dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `<h2 class="restaurant-item__not__found" tabindex="0">There are no Restaurant yet..</h2>`;
  }
}

export default FavoriteRestaurantSearchView;
