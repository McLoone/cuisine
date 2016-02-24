import DS from 'ember-data';

export default DS.Model.extend({
  ingredient: DS.attr('string'),
  amount: DS.attr('number'),
  unit: DS.attr('string')
});
