import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';
import config from '../config/environment';

console.log(config.APP.DB_CONN)
var remote = new PouchDB(config.APP.DB_CONN);
var db = new PouchDB('local_pouch');

db.sync(remote, {
	live: true,
	retry: true
});

export default Adapter.extend({
	db: db
});
