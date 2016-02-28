import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      this.get('model').save().then(() => {
        this.transitionToRoute('recipes.recipe.show', this.get('model').id);
      });
    },

    cancel() {
      this.get('model').rollbackAttributes();
      this.transitionToRoute('recipes.recipe.show', this.get('model').id);
    }
  }
});
