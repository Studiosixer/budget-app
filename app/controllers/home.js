import Ember from 'ember';

export default Ember.Controller.extend({
	envelope_name: '',
	envelope_amount: '',
	actions: {
		addEnvelope() {
		
			let envelope = this.get('store').createRecord('envelope',{
				name: this.envelope_name,
				amount: this.envelope_amount
			});

			envelope.save();
			
		}
	}
});
