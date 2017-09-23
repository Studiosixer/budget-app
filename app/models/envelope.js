import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
	name: DS.attr(),
	amount: DS.attr(),
	is_capped: DS.attr(),
	group_name: DS.attr()
});
