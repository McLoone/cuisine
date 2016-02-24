import DS from 'ember-data';

export default DS.Model.extend({
  recipe_id: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.attr('string'),
  default_portions: DS.attr('number'),
  time: DS.attr('number'),
  steps: DS.hasMany('step'),
  ingredients: DS.hasMany('ingredient'),
  tags: DS.hasMany('tag')
});
