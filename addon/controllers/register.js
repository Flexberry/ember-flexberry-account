import Ember from 'ember';

export default Ember.Controller.extend({
  userAccount: Ember.inject.service('user-account'),
  init: function() {
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
  surname: undefined,
  name: undefined,
  middlename: undefined,
  validUsername: false,

  actions: {
    validateUsername: function() {
      let username = this.get('username');
      let userAccountService = this.get('userAccount');
      let validateUsernameResult = userAccountService.validateUsername(username);
      this.set('validUsername', validateUsernameResult);
    },
    register: function() {
      let username = this.get('username');
      let surname = this.get('surname');
      let name = this.get('name');
      let middlename = this.get('middlename');
      this.get('userAccount').register(username, surname, name, middlename);
    },
    login: function() {
      this.transitionToRoute('login');
    },
    pwdReset: function() {
      this.transitionToRoute('pwd-reset');
    }
  }
});
