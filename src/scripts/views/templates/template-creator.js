/* eslint-disable no-unexpected-multiline */
/* eslint-disable template-tag-spacing */
/* eslint-disable indent */
/* import CONFIG from '../../globals/config'; */
import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__hero">
    <img class="restaurant__poster" src="${API_ENDPOINT.PICTURE_LARGE(restaurant.pictureId)}" alt="${restaurant.name}" />
    <h2 class="restaurant__title">${restaurant.name}</h2>
  </div>
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>⭐ ${restaurant.rating}</h4>
    <h4>Address</h4>
    <p>${restaurant.address}, ${restaurant.city}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>Categories</h4>
    <div class="categories-container">
      ${restaurant.categories.map((category) => (`<span class="category">${category.name}</span>`))}
    </div>
    <h4>Menus</h4>
    <div class="menus-container">
      <div class="foods-container">
        ${restaurant.menus.foods.map((food) => (`<span class="food">${food.name}</span>`))}
      </div>
      <div class="drinks-container">
        ${restaurant.menus.drinks.map((drink) => (`<span class="drink">${drink.name}</span>`))}
      </div>
  </div>
  <div class="restaurant__reviews">
    <h3>Let's see what others think about ${restaurant.name}</h3>
    <ul class="reviews-container">
      ${restaurant.customerReviews.map((reviewer) => (
        `<li>
          <div class="review-name"><h4>${reviewer.name}</h4></div>
          <div class="review-reviewer"><p>${reviewer.review}</p></div>
          <div class="review-date"><p>${reviewer.date}</p></div>
        </li>`
        )).join("")}
    </ul>
  </div>
`;

const createRestaurantItemTemplate = (resto) => `
  <article class="post-item">
  <a href="/#/detail/${resto.id}">
    <div class="post-item__thumbnail__container">
      <p class="post-city" tabindex="0">${resto.city}</p>
      <img tabindex="0" class="post-item__thumbnail" src="${API_ENDPOINT.PICTURE_MEDIUM(resto.pictureId)}" alt="${resto.name} image">
    </div>
    <div class="post-item__content">
      <p class="post-item__rating" tabindex="0">⭐ ${resto.rating}</p>
      <h3 class="post-item__title" tabindex="0">${resto.name}</h3>
      <p class="post-item__description" tabindex="0">${resto.description.length < 200 ? resto.description : resto.description.substring(0, 200)}...</p>
    </div>
    </a>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
