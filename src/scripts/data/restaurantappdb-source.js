import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAppDbSource {
  static async listOfRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postReview(dataReview) {
    const response = await fetch(`${API_ENDPOINT.ADD_REVIEW}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataReview),
    });

    const responseJson = await response.json();

    if (responseJson.message !== 'success') {
      alert(responseJson.message);
      return responseJson;
    }

    return responseJson;
  }
}

export default RestaurantAppDbSource;
