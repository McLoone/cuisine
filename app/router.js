import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recipes');
  this.route('schedule');
  this.route('checklist');
});

export default Router;
