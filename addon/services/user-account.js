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
  isUserAuthnticated() {
    // TODO: Assert.
  },

  /**
    Log in.

    @method login
    @param username {String} User name for log in.
    @param password {String} Password phrase for log in.
    @return {Boolean} Returns log in result.
  */
  login(username, password) {
    // TODO: assert that developer must redefine this method in own code.
  },

  /**
    Log out.

    @method logout
    @return {Boolean} Returns log out result.
  */
  logout() {
    // TODO: assert that developer must redefine this method in own code.
  }
});
