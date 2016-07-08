import Ember from 'ember';

export default Ember.Controller.extend({
	  queryParams: ['query'], // Search string
	  query: null,
	  
	  beerlist: Ember.computed('query', function() {
		  
		var query = this.get('query');
		if (query) {
			return this.store.query('search', { q: query , withBreweries:"Y", type:"beer"});
		}
		else {
			return this.get('model');
		}  
	  }),
	  actions: {
		  searchDatabase: function(queryString) {
			this.set('query', queryString);
		  }
	  }
});