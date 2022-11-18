import RestaurantAppDbSource from '../../data/restaurantappdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
    <div class="content">
      <div class="hero">
        <div class="hero__inner">
          <img src="./images/heros/hero-image_2.webp" class="hero__img" alt="Picture of people eating together" tabindex="0">
        </div>
      </div>
      <div class="search-bar">
            <input type="text" placeholder="Search"/>
      </div>
      <h2 class="content__heading" tabindex="0">List of Restaurants</h2>
      <div id="restaurants" class="posts">
        <!-- class restaurants telah dihapus -->
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantAppDbSource.listOfRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    const skipListener = document.querySelector('.skip-main');
    /* const searchBar = document.querySelector('.search-bar input');
    searchBar.addEventListener('keydown', () => {
      console.log(searchBar.value);
    }); */
    /*
        Kalau pakai Extension "Screen Reader" di Chrome nanti event focus-nya bakal stuck
        di tombol "Skip to Main" jika user mengklik pakai tombol "ENTER",
        sedangkan kalau mengklik tombol lainnya tidak ada masalah tersebut.
        Tapi kalau gak pakai "Screen Reader", masalah ini gak akan terjadi.
        Saya tidak tahu cara mengatasinya kak, kemungkinan ini bug dari Extension-nya kak
    */

    skipListener.href = ``;
    skipListener.href = `#restaurants`;
    ['click', 'keydown'].map((event) => skipListener.addEventListener(event, () => {
      // eslint-disable-next-line no-unused-expressions
      restaurantsContainer.focus();
    }));

    // eslint-disable-next-line array-callback-return
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    const loaderContainer = document.querySelector('#loader');
    loaderContainer.style.display = 'none';
  },
};

export default RestaurantList;
