import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
	return serialized.replace(/\/$/, "");
  },

  serialize(deserialized) {
    return deserialized;
  }
});
