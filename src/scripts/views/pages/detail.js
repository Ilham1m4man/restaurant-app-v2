import UrlParser from "../../routes/url-parser";
import RestaurantAppDbSource from "../../data/restaurantappdb-source";
import { createRestaurantDetailTemplate, createAddReviewButtonTemplate } from "../templates/template-creator";
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurants" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
      <div id="addReviewButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantAppDbSource.detailRestaurant(url.id);
    const resto = restaurant.restaurant;
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(resto);
    const skipListener = document.querySelector('.skip-main');
    const addReviewButtonContainer = document.querySelector('#addReviewButtonContainer');
    addReviewButtonContainer.innerHTML = createAddReviewButtonTemplate();
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

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        pictureId: resto.pictureId,
        rating: resto.rating,
        description: resto.description,
      },
    });
  },
};

export default Detail;
