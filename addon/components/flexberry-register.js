/**
  @module ember-flexberry-account
*/

import Ember from 'ember';

export default Ember.Component.extend({

  userAccount: Ember.inject.service('user-account'),

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
  useNavBlock: false,

  /**
    Stores if we gonna show login button or not.

    @property showLoginButton
    @type Boolean
    @default false
  */
  showLoginButton: false,

  /**
    Stores if we gonna show password reset button or not.

    @property showPwdResetButton
    @type Boolean
    @default false
  */
  showPwdResetButton: false,

  /**
    This field stores username.

    @property username
    @type String
    @default undefined
  */
  username: undefined,

  /**
    This field stores full name.

    @property fullName
    @type String
    @default undefined
  */
  fullName: undefined,

  /**
    This field stores if username is valid.

    @property validUsername
    @type Boolean
    @default false
  */
  validUsername: false,

  usernameFlag: undefined,

  /**
    This computed field shows whether fullname is valid or not.

    @property validFullname
    @type Boolean
    @default false
  */
  validFullname: Ember.computed('fullName', function() {
      if (!Ember.isEmpty(this.fullName)) {
        return true;
      } else {
        return false;
      }
    }),

  /**
    This field stores if captcha is passed successfully.

    @property captchaPassed
    @type Boolean
    @default false
  */
  captchaPassed: false,

  allowRegistration: Ember.computed(
    'validUsername',
    'validFullname',
    function() { return !(this.validUsername && this.validFullname);}
  ),

  actions: {

    /**
      This action is called when captcha is successfully passed.

      @method actions.captchaSuccess
    */
    captchaSuccess: function() {
      this.set('captchaPassed', true);
    },

    /**
      This action is called when username field is out of focus.

      @method actions.validateUsername
    */
    validateUsername: function() {
      let username = this.get('username');
      let userAccountService = this.get('userAccount');

      let validateUsernameResult = userAccountService.validateUsername(username).then((result) => {
        this.set('validUsername', result);
        if (result) {
          this.set('usernameFlag', '<i class="green check icon">');
        } else {
          this.set('usernameFlag', '<i class="red times icon">');
        }
      }).catch(() => {
        this.set('validUsername', result);
        this.set('usernameFlag', '<i class="red times icon">');
      });
    },

    /**
      This action is called when register button is pressed.

      @method actions.register
    */
    register: function() {
      let username = this.get('username');
      let fullName = this.get('fullName');
      this.get('userAccount').register(username, fullName);
    },

    /**
      This action is called when login button is pressed.

      @method actions.login
    */
    login: function() {
      Ember.getOwner(this).lookup('router:main').transitionTo('login');
    },

    /**
      This action is called when pwdReset button is pressed.

      @method actions.pwdReset
    */
    pwdReset: function() {
      Ember.getOwner(this).lookup('router:main').transitionTo('pwd-reset');
    }
  },

  /**
    Initializes component.
  */
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
  }
});
