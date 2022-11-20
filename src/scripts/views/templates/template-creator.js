/* eslint-disable no-unexpected-multiline */
/* eslint-disable template-tag-spacing */
/* eslint-disable indent */
import API_ENDPOINT from '../../globals/api-endpoint';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__hero">
    <picture>
      <source media="(max-width: 450px)" srcset="${API_ENDPOINT.PICTURE_SMALL(restaurant.pictureId)}" type="image/jpeg">
      <source media="(max-width: 770px)" srcset="${API_ENDPOINT.PICTURE_MEDIUM(restaurant.pictureId)}" type="image/jpeg">
      <img class="restaurant__poster" src="${API_ENDPOINT.PICTURE_LARGE(restaurant.pictureId)}" alt="${restaurant.name} image" tabindex="0" type="image/jpeg" />
    </picture>
    <h2 class="restaurant__name-title" id="resto-name" tabindex="0">${restaurant.name}</h2>
  </div>
  <div class="restaurant__info" aria-label="information section" tabindex="0">
    <h3 tabindex="0">Information</h3>
    <h4 id="rating" class="info__section" tabindex="0" aria-label="rating from 1 to 5 star, ${restaurant.name} have ${restaurant.rating} star">⭐ ${restaurant.rating}</h4>
    <div id="address" class="info__section">
      <h4 tabindex="0">Address</h4>
      <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
    </div>
    <div id="categories" class="info__section">
      <h4 tabindex="0">Categories</h4>
      <div class="categories-container">
        ${restaurant.categories.map((category) => (`<span class="category" tabindex="0">${category.name}</span>`)).join("")}
      </div>
    </div>
    <div id="description" class="info__section">
      <h4 tabindex="0">Description</h4>
      <p tabindex="0">${restaurant.description}</p>
    </div>
    <div id="menus" class="info__section">
      <h4 tabindex="0">Menu</h4>
      <div class="menus-container">
        <div class="foods-container">
          <h5 tabindex="0">Foods</h5>
          <ul>
            ${restaurant.menus.foods.map((food) => (`<li tabindex="0">${food.name}</li>`)).join("")}
          </ul>
        </div>
        <div class="drinks-container">
          <h5 tabindex="0">Drinks</h5>
          <ul>
            ${restaurant.menus.drinks.map((drink) => (`<li tabindex="0">${drink.name}</li>`)).join("")}
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="restaurant__reviews" aria-label="reviews section" tabindex="0">
    <h3 tabindex="0">Let's see what others think about ${restaurant.name}</h3>
    <ul class="reviews-container">
      ${restaurant.customerReviews.map((reviewer) => (
        `<li>
          <div class="review-date"><p tabindex="0" aria-label="reviews date, ${reviewer.date}">${reviewer.date}</p></div>
          <div class="review-name"><h4 tabindex="0" aria-label="reviewers name, ${reviewer.name}">${reviewer.name}</h4></div>
          <div class="review-reviewer"><p tabindex="0" aria-label="reviews, ${reviewer.review}">${reviewer.review}</p></div>
        </li>`
        )).join("")}
    </ul>
  </div>
`;

const createRestaurantItemTemplate = (resto) => `
  <div class="restaurant-item">
  <a href="/#/detail/${resto.id}">
    <div class="restaurant-item__thumbnail__container">
      <p class="post-city" tabindex="0">${resto.city}</p>
      <img tabindex="0" class="restaurant-item__thumbnail lazyload" data-src="${API_ENDPOINT.PICTURE_MEDIUM(resto.pictureId)}" alt="${resto.name || '-'} image">
    </div>
    <div class="restaurant-item__content">
      <p class="restaurant-item__rating" tabindex="0" aria-label="rating from 1 to 5 star, ${resto.name || '-'} have ${resto.rating} star">⭐ ${resto.rating}</p>
      <h3 class="restaurant__name" tabindex="0">${resto.name || '-'}</h3>
      <p class="restaurant-item__description" tabindex="0">${resto.description.length < 200 ? resto.description : resto.description.substring(0, 200)}...</p>
    </div>
    </a>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="button">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="button">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createAddReviewButtonTemplate = () => `
  <button aria-label="add review to this restaurant" id="addReviewButton" class="button">
    <i class="fa fa-comment-o" aria-hidden="true"></i>
  </button>
`;

const createReviewFormTemplate = () => `
  <div id="review-form" class="modal-style">
    <form id="form-input">
      <h3>Add Review</h3>
      <input type="text" aria-label="write your name here" placeholder="Name" id="input-name">
      <textarea type="text" aria-label="write your review here" placeholder="What's your thought about this restaurant?" id="input-review"></textarea>
      <div class="form-button">
        <button type="button" aria-label="cancel review" id="cancelReviewButton">Cancel</button>
        <button type="submit" aria-label="post review" id="postReviewButton">Post</button>
      </div>
      </form>
  </div>
`;

const createOfflineScreenTemplate = () => `
  <div id="offline-screen" class="modal-style" tabindex="0">
    <h2>Internet connection required!</h2>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createAddReviewButtonTemplate,
  createReviewFormTemplate,
  createOfflineScreenTemplate,
};
