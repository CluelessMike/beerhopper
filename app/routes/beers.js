import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.query('search', { q: "heineken" , type: "beer", withBreweries:"Y"  });
		// return this.store.query('search', params );
	}
});
