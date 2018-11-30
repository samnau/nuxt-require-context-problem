import Vue from 'vue';

const imageHelper = require.context('~/assets/images', true, /\.(gif|png|jpe?g|svg)$/);
const thumbnailHelper = require.context('~/assets/images/thumbnails', true, /\.(gif|png|jpe?g|svg)$/);

Vue.prototype.imageContext = (imagePath, isStatic) => {
  const targetHelper = isStatic ? staticImageHelper : imageHelper;
  if(!imagePath) {
    return '';
  }
  return targetHelper(`./${imagePath}`);
};
Vue.prototype.thumbnailContext = (imagePath) => {
  if(!imagePath) {
    return '';
  }
  return thumbnailHelper(`./${imagePath}`);
};

Vue.prototype.hotpsotContext = (imagePath) => {
  if(!imagePath) {
    return '';
  }
  return hotspotHelper(`./${imagePath}`);
};
