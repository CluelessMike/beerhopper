import Ember from 'ember';

export default Ember.Component.extend({
	queryString: '',
	
	findDisabled: Ember.computed('queryString', function() {
		return !(/[a-zA-Z0-9]{2}/.test(this.get('queryString')));
	}),
	
	actions: {
		search() {
		  // Prevent search action when constraint not met
		  if (/[a-zA-Z0-9]{2}/.test(this.get('queryString'))) {
			  this.sendAction('action', this.get('queryString'));
			  return true;  
			}
		   
		}
	}
});