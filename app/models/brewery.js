import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  website: DS.attr('url'),
  established: DS.attr('number'),
  mailingListUrl: DS.attr('url'),
  isOrganic: DS.attr('boolean'),
  images: DS.attr('')
});
