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
		}
	}
});
