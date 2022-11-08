import RestaurantAppDbSource from '../../data/restaurantappdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
    <div class="content">
      <div class="hero">
        <div class="hero__inner">
          <img src="./images/heros/hero-image_2.jpg" class="hero__img" alt="Picture of people eating together" tabindex="0">
        </div>
      </div>
      <h2 class="content__heading">List of Restaurants</h2>
      <div id="restaurants" class="restaurants posts">
      
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantAppDbSource.listOfRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    // eslint-disable-next-line array-callback-return
    restaurants.map((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
