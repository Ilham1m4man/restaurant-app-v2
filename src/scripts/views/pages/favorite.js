import RestaurantAppDbSource from "../../data/restaurantappdb-source";

const Favorite = {
  async render() {
    return `
      <h2>Favorite Page</h2>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantAppDbSource.listOfRestaurant();
    console.log(restaurants);
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;
