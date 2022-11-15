import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  PICTURE_MEDIUM: (pictureId) => `${CONFIG.BASE_URL}images/medium/${pictureId}`,
  PICTURE_LARGE: (pictureId) => `${CONFIG.BASE_URL}images/large/${pictureId}`,
  ADD_REVIEW: (id, name, review) => {
    // eslint-disable-next-line no-unused-expressions, no-sequences
    `${CONFIG.BASE_URL}review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    };
  },
};

export default API_ENDPOINT;
