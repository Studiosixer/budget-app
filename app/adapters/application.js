import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

var remote = new PouchDB('http://127.0.0.1:5984/my_couch');
var db = new PouchDB('local_pouch');

db.sync(remote, {
	live: true,
	retry: true
});

export default Adapter.extend({
	db: db
});
