import UrlParser from "../../routes/url-parser";
import RestaurantAppDbSource from "../../data/restaurantappdb-source";

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await RestaurantAppDbSource.detailRestaurant(url.id);
    console.log(movie);
  },
};

export default Detail;
