import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  picture: DS.attr('string'),
  nflteam: DS.attr('string'),
  team: DS.attr('string'),
  value: DS.attr('string'),
  position: DS.attr('string'),
});
