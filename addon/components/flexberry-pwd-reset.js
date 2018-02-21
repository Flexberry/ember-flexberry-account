/**
  @module ember-flexberry-account
*/

import Ember from 'ember';

export default Ember.Component.extend({
  username: undefined,
  actions: {
    register: function() {
      Ember.getOwner(this).lookup('router:main').transitionTo('register');
    },
    login: function() {
      Ember.getOwner(this).lookup('router:main').transitionTo('login');
    },
    pwdReset: function() {
      let username = this.get('username');
      this.get('userAccount').pwdReset(username);
    }
  }
});
