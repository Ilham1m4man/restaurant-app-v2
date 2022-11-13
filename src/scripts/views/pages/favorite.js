import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <div id="restaurants-favorite" class="restaurants-favorite posts" tabindex="0" aria-label="List of your favorite restaurants">

      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants-favorite');
    const skipListener = document.querySelector('.skip-main');
    /*
        Kalau pakai Extension "Screen Reader" di Chrome nanti event focus-nya bakal stuck
        di tombol "Skip to Main" jika user mengklik pakai tombol "ENTER",
        sedangkan kalau mengklik tombol lainnya tidak ada masalah tersebut.
        Tapi kalau gak pakai "Screen Reader", masalah ini gak akan terjadi.
        Saya tidak tahu cara mengatasinya kak, kemungkinan ini bug dari Extension-nya kak
    */

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
  },
};

export default Favorite;
