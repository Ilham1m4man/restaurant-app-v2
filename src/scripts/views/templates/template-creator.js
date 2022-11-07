import CONFIG from '../../globals/config';
import API_ENDPOINT from '../../globals/api-endpoint';

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;

const createRestaurantItemTemplate = (resto) => `
  <article class="post-item">
    <div class="post-item__thumbnail__container">
      <p class="post-city" tabindex="0">${resto.city}</p>
      <img tabindex="0" class="post-item__thumbnail" src="${API_ENDPOINT.PICTURE(resto.pictureId)}" alt="${resto.name} image">
    </div>
    <div class="post-item__content">
      <p class="post-item__rating" tabindex="0">Rating ${resto.rating}</p>
      <h3 class="post-item__title" tabindex="0">${resto.name}</h3>
      <p class="post-item__description" tabindex="0">${resto.description.length < 200 ? resto.description : resto.description.substring(0, 200)}...</p>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
