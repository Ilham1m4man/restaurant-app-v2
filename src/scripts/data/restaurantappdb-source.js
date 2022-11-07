import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAppDbSource {
  static async listOfRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  /* static async pictureOfRestaurant(pictureId) {
    const response = await fetch(API_ENDPOINT.PICTURE(pictureId));
    const responseJson = await response.json();
    return responseJson;
  } */

  /* static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  } */

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantAppDbSource;
