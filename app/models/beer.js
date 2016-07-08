import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  nameDisplay: DS.attr('string'),
  description: DS.attr('string'),
  foodPairings: DS.attr('string'),
  originalGravity: DS.attr('number'),
  abv: DS.attr('abv'),
  ibu: DS.attr('number'),
  glass: DS.attr(''), /* name of glass */
  style: DS.attr(''), /* get only short name */
  styleId: DS.attr('string'),
  isOrganic: DS.attr('boolean'),
  labels: DS.attr(''), /* icon, medium, large */
  createDate: DS.attr('string'),
  updateDate: DS.attr('string'),
  available: DS.attr(''), /*name, description*/
  servingTemperature: DS.attr('string'),
  servingTemperatureDisplay: DS.attr('string'),
  breweries: DS.attr('')
});
