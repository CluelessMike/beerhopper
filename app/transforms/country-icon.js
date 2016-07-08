import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
	return  serialized.toLowerCase()+".png";
  },

  serialize(deserialized) {
    return deserialized;
  }
});
