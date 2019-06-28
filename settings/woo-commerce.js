var wooCommerceAPI = require('woocommerce-api');
 
module.exports = new wooCommerceAPI({
  url: 'https://erni-shop.tk',
  consumerKey: 'ck_e88ed4953edc848b122dd9c4c9bb7b49d9e43452',
  consumerSecret: 'cs_dd3c7cb4b7074a39f28f3e40debac2892055e0bb',
  wpAPI: true,
  version: 'wc/v1'
});
