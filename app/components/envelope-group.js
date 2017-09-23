import Ember from 'ember';

export default Ember.Component.extend({

	actions: {

		addEnvelope() {

			let p = this.get('onEnvelopeAdd')(this.envelope_name, this.envelope_amount, this.group_name);
			p.then(() => {
				Ember.set(this, "envelope_name", '');
				Ember.set(this, "envelope_amount", '');
			})

		}
	}
});
