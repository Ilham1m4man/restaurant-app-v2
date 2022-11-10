import UrlParser from "../../routes/url-parser";
import RestaurantAppDbSource from "../../data/restaurantappdb-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurants" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantAppDbSource.detailRestaurant(url.id);
    const resto = restaurant.restaurant;
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(resto);

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
