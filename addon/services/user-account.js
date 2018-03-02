/**
  @module ember-flexberry-account
*/

import Ember from 'ember';

export default Ember.Service.extend({
  /**
    Flag indicates whether user-account service is enabled or not.

    @property enabled
    @type Boolean
    @default true

    @example
      ```
      // UserAccount 'enabled' setting could be also defined through application config/environment.js
      module.exports = function(environment) {
        let ENV = {
          ...
          APP: {
            ...
            user-account: {
              enabled: true
            }
            ...
          }
          ...
      };
      ```
  */
  enabled: true,

  vk: false,
  facebook: false,
  twitter: false,
  google: false,
  microsoft: false,
  github: false,
  ok: false,
  mailru: false,
  yandex: false,
  gosuslugi: false,

  /**
    Is user authenticated?

    @method login
    @return {Boolean} Returns user authenticated status.
  */
  isUserAuthenticated() {
    let enabled = this.get('enabled');

    if (!enabled) {
      return;
    }

    Ember.assert('Developer must override isUserAuthenticated method of user-account service.');
  },

  /**
    Log in.

    @method login
    @param username {String} User name for log in.
    @param password {String} Password phrase for log in.
    @return {Boolean} Returns log in result.
  */
  login(username, password) {
    let enabled = this.get('enabled');

    if (!enabled) {
      return;
    }

    Ember.assert('Developer must override login method of user-account service.' +
    ' You try login with ' + username + ' and password ' + password + '.');
  },

  /**
    Log out.

    @method logout
    @return {Boolean} Returns log out result.
  */
  logout() {
    let enabled = this.get('enabled');

    if (!enabled) {
      return;
    }

    Ember.assert('Developer must override logout method of user-account service.');
  },

  /**
    Validate username.

    @method validateUsername
    @param username {String} User name for validation.
    @return {Promise} Returns validation result.
  */
  validateUsername(username) {
    let enabled = this.get('enabled');

    if (!enabled) {
      return;
    }

    Ember.assert('Developer must override validateUsername method of user-account service.' +
    'Validate username: ' + username + '.');
  },

  /**
    Register user.

    @method register
    @param username {String} User name for log in.
    @param surname {String} User surname.
    @param name {String} User name.
    @param middlename {String} User middlename.
    @return {Boolean} Returns register result.
  */
  register(username, surname, name, middlename) {
    let enabled = this.get('enabled');

    if (!enabled) {
      return;
    }

    Ember.assert('Developer must override register method of user-account service.' +
    ' You try register with username: ' + username + ', surname: ' + surname +
    ', name: ' + name + ', middlename: ' + middlename + '.');
  },
  /**
    Reset password request for username.

    @method pwdReset
    @param username {String} User name for reset password request.
    @return {Boolean} Returns reset request result.
  */
  pwdReset(username) {
    let enabled = this.get('enabled');

    if (!enabled) {
      return;
    }

    Ember.assert('Developer must override pwdReset method of user-account service.' +
    'Request for username: ' + username + '.');
  },

  /**
    Reset password request for username.

    @method validateCaptcha
    @return {Boolean} Returns if captcha valid.
  */
  validateCaptcha() {
    let enabled = this.get('enabled');

    if (!enabled) {
      return;
    }

    Ember.assert('Developer must override validateCaptcha() method of user-account service.');
  },

  /**
    Activate account.

    @method activateAccount
    @param token {String} Activation token from email.
    @return {Promise} Returns activation result.
  */
  activateAccount(token) {
    let enabled = this.get('enabled');

    if (!enabled) {
      return;
    }

    Ember.assert('Developer must override activateAccount method of user-account service.' +
    'Activation token: ' + token + '.');
  },
});
