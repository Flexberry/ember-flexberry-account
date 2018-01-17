/**
  @module ember-flexberry-account
*/

import Ember from 'ember';

export default Ember.Component.extend({
  username: undefined,
  actions: {
    register: function() {
      this.transitionToRoute('register');
    },
    login: function() {
      this.transitionToRoute('login');
    },
    pwdReset: function() {
      let username = this.get('username');
      this.get('userAccount').pwdReset(username);
    }
  }
});
