import {
  createAddReviewButtonTemplate, createReviewFormTemplate, /* , createOfflineScreenTemplate */
} from '../views/templates/template-creator';
import RestaurantAppDbSource from '../data/restaurantappdb-source';

const AddReviewButtonInitiator = {
  init({ addReviewButtonContainer, addReviewFormContainer, restaurant }) {
    this._addReviewButtonContainer = addReviewButtonContainer;
    this._addReviewFormContainer = addReviewFormContainer;
    this._restaurant = restaurant;

    this._renderButton();
  },

  _renderButton() {
    const { id } = this._restaurant;
    this._addReviewButtonContainer.innerHTML = createAddReviewButtonTemplate();

    const addReviewButton = document.querySelector('#addReviewButton');
    ['click', 'keydown'].map((event) => addReviewButton.addEventListener(event, () => {
      /* if (!navigator.onLine) {
        createOfflineScreenTemplate();
      } else {
      } */
      this._addReviewFormContainer.innerHTML = createReviewFormTemplate();
      this._afterRenderAddReview(id);
    }));
  },

  async _afterRenderAddReview(restoId) {
    const addReviewContainer = document.querySelector('#review-form');

    const cancelReviewButton = document.querySelector('#cancelReviewButton');
    ['click', 'keydown'].map((event) => cancelReviewButton.addEventListener(event, () => {
      addReviewContainer.style.display = "none";
    }));

    const formContainer = document.querySelector('#form-input');
    formContainer.addEventListener('submit', async () => {
      const nameInput = document.querySelector('#input-name').value;
      const reviewInput = document.querySelector('#input-review').value;
      const dataReview = {
        id: restoId,
        name: nameInput,
        review: reviewInput,
      };
      await RestaurantAppDbSource.postReview(dataReview);
      addReviewContainer.style.display = "none";
    });
  },
};

export default AddReviewButtonInitiator;
