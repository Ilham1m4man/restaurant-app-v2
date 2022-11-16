import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  PICTURE_MEDIUM: (pictureId) => `${CONFIG.BASE_URL}images/medium/${pictureId}`,
  PICTURE_LARGE: (pictureId) => `${CONFIG.BASE_URL}images/large/${pictureId}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
