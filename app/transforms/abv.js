import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
	  if (serialized) return serialized+"%";
  },

  serialize(deserialized) {
    return deserialized;
  }
});
