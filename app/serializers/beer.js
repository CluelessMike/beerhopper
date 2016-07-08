import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  modelNameFromPayloadKey: function(payloadKey) {
    if (payloadKey === 'data') {
      return this._super('beer');
	}  else {
	 return payloadKey;
	}
  }
});
