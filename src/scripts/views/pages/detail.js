import UrlParser from "../../routes/url-parser";
import RestaurantAppDbSource from "../../data/restaurantappdb-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import LikeButtonPresenter from '../../utils/like-button-presenter';
import AddReviewButtonInitiator from "../../utils/addReview-button-initiator";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Detail = {
  async render() {
    return `
      <div id="restaurants" class="restaurant-detail"></div>
      <div id="reviewFormContainer" class="review-form-container"></div>
      <div id="likeButtonContainer"></div>
      <div id="addReviewButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantAppDbSource.detailRestaurant(url.id);
    const resto = restaurant.restaurant;

    const restaurantsContainer = document.querySelector('#restaurants');
    // eslint-disable-next-line max-len
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(resto);
    const skipListener = document.querySelector('.skip-main');
    /*
        Kalau pakai Extension "Screen Reader" di Chrome nanti event focus-nya bakal stuck
        di tombol "Skip to Main" jika user mengklik pakai tombol "ENTER",
        sedangkan kalau mengklik tombol lainnya tidak ada masalah tersebut.
        Tapi kalau gak pakai "Screen Reader", masalah ini gak akan terjadi.
        Saya tidak tahu cara mengatasinya kak, kemungkinan ini bug dari Extension-nya kak
    */
    const namaResto = document.querySelector('#resto-name');

    skipListener.href = ``;
    skipListener.href = `/#/detail/${resto.id}`;
    ['click', 'keydown'].map((event) => skipListener.addEventListener(event, () => {
      // eslint-disable-next-line no-unused-expressions
      namaResto.focus();
    }));

    AddReviewButtonInitiator.init({
      addReviewButtonContainer: document.querySelector('#addReviewButtonContainer'),
      addReviewFormContainer: document.querySelector('#reviewFormContainer'),
      restaurant: {
        id: resto.id,
      },
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        pictureId: resto.pictureId,
        rating: resto.rating,
        description: resto.description,
      },
    });

    const loaderContainer = document.querySelector('#loader');
    loaderContainer.style.display = 'none';
  },
};

export default Detail;
