import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('beers');
  this.route('beer', {path: '/beer/:beer_id'});
  this.route('brewery', {path: '/brewery/:brewery_id'});
  this.route('style', {path: '/style/:style_id'});
});

export default Router;