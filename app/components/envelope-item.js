import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  actions: {	
    toggleEdit() {
      this.toggleProperty('editable');
    },
    saveEnvelope() {
      this.toggleProperty('editable')
    }
  }
});
