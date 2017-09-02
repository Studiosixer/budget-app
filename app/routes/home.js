import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.get('store').findAll('envelope');
	},
	actions: {
		addEnvelope() {
			this.get('store').createRecord('envelope', {
				id: 'test',
				attributes: {
					name: 'my test envelope',
					amount: 34.66
				}
			})
			alert('hello')
		}
	}
});
