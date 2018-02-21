/**
  @module ember-flexberry-account
*/

import Ember from 'ember';

export default Ember.Component.extend({

  userAccount: Ember.inject.service('user-account'),

  init: function() {
    this._super(...arguments);

    this.set('vk', this.get('userAccount.vk'));
    this.set('facebook', this.get('userAccount.facebook'));
    this.set('twitter', this.get('userAccount.twitter'));
    this.set('google', this.get('userAccount.google'));
    this.set('microsoft', this.get('userAccount.microsoft'));
    this.set('github', this.get('userAccount.github'));
    this.set('ok', this.get('userAccount.ok'));
    this.set('mailru', this.get('userAccount.mailru'));
    this.set('yandex', this.get('userAccount.yandex'));
    this.set('gosuslugi', this.get('userAccount.gosuslugi'));
    this.set('useSocialBlock', (
      this.get('vk') ||
      this.get('facebook') ||
      this.get('twitter') ||
      this.get('google') ||
      this.get('microsoft') ||
      this.get('github') ||
      this.get('ok') ||
      this.get('mailru') ||
      this.get('yandex') ||
      this.get('gosuslugi')
    ));
  },

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
  useSocialBlock: false,

  username: undefined,
  fullName: undefined,
  validUsername: false,
  validFullname: false,

  captchaPassed: false,

  allowRegistration: Ember.computed(
    'validUsername',
    'validFullname',
    function() { return !(this.validUsername && this.validFullname);}
  ),

  actions: {
    captchaSuccess: function() {
      this.set('captchaPassed', true);
    },
    validateUsername: function() {

      let username = this.get('username');
      let userAccountService = this.get('userAccount');

      let validateUsernameResult = userAccountService.validateUsername(username);

      this.set('validUsername', validateUsernameResult);
    },
    validateFullname: function() {
      if (!Ember.isEmpty(this.fullName)) {
        this.set('validFullname', true);
      } else {
        this.set('validFullname', false);
      }
    },
    register: function() {
      let username = this.get('username');
      let surname = this.get('surname');
      let name = this.get('name');
      let middlename = this.get('middlename');
      this.get('userAccount').register(username, surname, name, middlename);
    },
    login: function() {
      Ember.getOwner(this).lookup('router:main').transitionTo('login');
    },
    pwdReset: function() {
      Ember.getOwner(this).lookup('router:main').transitionTo('pwd-reset');
    }
  }
});
