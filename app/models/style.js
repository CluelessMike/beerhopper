import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr(''), /* category id and name */
  abvMin: DS.attr('number'),
  abvMax: DS.attr('number'),
  ibuMin: DS.attr('number'),
  ibuMax: DS.attr('number'),
  srmMin: DS.attr('number'),
  srmMax: DS.attr('number'),
  ogMin: DS.attr('number'),
  ogMax: DS.attr('number'),
  fgMin: DS.attr('number'),
  fgMax: DS.attr('number')
});
