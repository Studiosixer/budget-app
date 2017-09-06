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

			let self = this;

			function clearInputs(resp) {
				console.log(self.envelope_name);
				Ember.set(self, "envelope_name", '');
				Ember.set(self, "envelope_amount", '');
			}

			envelope.save().then(clearInputs);
			
		}
	}
});
