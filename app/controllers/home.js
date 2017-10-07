import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		userAddedEnvelope(name, amount, group_name) {

			const envelope = this.get('store').createRecord('envelope',{
				name: name,
				amount: amount,
				group_name: group_name
			});

			return envelope.save();
		},
		saveEnvelope(envelope) {
			const envelopePromise = this.get('store').findRecord('envelope', envelope.get("id"));

			envelopePromise.then((e) => {
				e.set('name', e.get("name"))
				e.set('amount', e.get("amount"))
        e.save()
			})
		}
	}
});
