import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		goToBeerList: function(queryString) {
			this.transitionToRoute('beers', {queryParams: {query: queryString}});
		}
	}
});
