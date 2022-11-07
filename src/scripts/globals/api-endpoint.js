import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/:${id}`,
  PICTURE: (pictureId) => `${CONFIG.BASE_URL}images/medium/${pictureId}`,
};

export default API_ENDPOINT;
