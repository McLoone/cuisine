import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition(transition) {
      this.modelFor('recipes/recipe/edit').rollbackAttributes();
    }
  }
});
