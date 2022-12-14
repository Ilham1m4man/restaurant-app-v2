/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('There are no Restaurant yet..', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  /*
    Catatan: Untuk test ini kita harus menjalankannya sebanyak 2x (atau lebih) agar testnya passed
  */
  I.see('There are no Restaurant yet..', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant__name');
  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__name');

  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('liking a restaurant and unliking it', async ({ I }) => {
  /*
    Catatan: Untuk test ini kita harus menjalankannya sebanyak 2x (atau lebih) agar testnya passed
  */
  I.see('There are no Restaurant yet..', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant__name');
  const lastRestaurant = locate('.restaurant__name').last();
  const lastRestaurantName = await I.grabTextFrom(lastRestaurant);
  I.click(lastRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__name');

  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');
  assert.strictEqual(lastRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('There are no Restaurant yet..', '.restaurant-item__not__found');
});

Scenario('searching restaurant', async ({ I }) => {
  /*
    Catatan: Untuk test ini kita harus menjalankannya sebanyak 2x (atau lebih) agar testnya passed
  */

  I.see('There are no Restaurant yet..', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant__name');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__name').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.restaurant__name-title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visiblename = await I.grabTextFrom(locate('.restaurant__name').at(index + 1));
    assert.strictEqual(name, visiblename);
  });
});
