import RestaurantAppDbSource from '../../data/restaurantappdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
    <div class="content">
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
      console.log(restaurant);
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    // TODO: tampilkan restaurants di dalam DOM
  },
};

export default RestaurantList;

/* import data from '../../../DATA.json';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.dataResto = data.restaurants;
  }

  connectedCallback() {
    this.render(this.dataResto);
  }

  render(dataResto) {
    this.innerHTML = `<div class="posts"></div>`;
    const postElement = document.querySelector('.posts');
    postElement.innerHTML = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const [index, resto] of dataResto.entries()) {
      postElement.innerHTML += `
      <article class="post-item">
        <div class="post-item__thumbnail__container">
          <p class="post-city" tabindex="0">${resto.city}</p>
          <img tabindex="0" id="post-img${index}" class="post-item__thumbnail" src="${resto.pictureId}" alt="${resto.name} image">
        </div>
        <div class="post-item__content">
          <p class="post-item__rating" tabindex="0">Rating ${resto.rating}</p>
          <h3 class="post-item__title" tabindex="0">${resto.name}</h3>
          <p class="post-item__description" tabindex="0">${resto.description.length < 200 ? resto.description : resto.description.substring(0, 200)}...</p>
        </div>
      </article>
      `;
    }
  }
}

customElements.define('restaurant-list', RestaurantList);
*/
