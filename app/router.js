import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recipes', function() {
    this.route('recipe', {path: ':id'}, function() {
      this.route('show');
      this.route('edit');
    });
  });
  this.route('schedule');
  this.route('checklist');
});

export default Router;
