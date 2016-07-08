import DS from "ember-data";

var ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://api.brewerydb.com',
  namespace: 'v2',
  headers: {
			'Access-Control-Allow-Origin': 'http://api.brewerydb.com'
        },
  pathForType: function(type) {
    return type;
  },
  buildURL: function(modelName, id, snapshot, requestType, query) {
      var url = this._super(...arguments);
	  return url+'?key=dbc8aa613861532b947102641f73d2f5';
  }
});

export default ApplicationAdapter;