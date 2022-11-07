import ListRestaurant from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ListRestaurant, // default page
  /* '/ListRestaurant': ListRestaurant, */
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
