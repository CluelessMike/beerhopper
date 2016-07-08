//import Model from 'ember-data/model';
//import attr from 'ember-data/attr';

import DS from 'ember-data';

export default DS.Model.extend({
  beers: DS.hasMany('beer', {async: true})
});
