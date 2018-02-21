/**
  @module ember-flexberry-account
*/

import Ember from 'ember';

export default Ember.Component.extend({
  username: undefined,
  captchaPassed: false,

  invalidUsername: true,

  allowReset: Ember.computed('username', function() {
    return Ember.isEmpty(this.username);
  }),

  actions: {
    captchaSuccess: function() {
      console.log('aaa');
      this.set('captchaPassed', true);
    },
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
