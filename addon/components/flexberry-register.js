/**
  @module ember-flexberry-account
*/

import Ember from 'ember';
import UsernameCommonMixin from '../mixins/username-common';

export default Ember.Component.extend(UsernameCommonMixin, {

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

  useNavBlock: Ember.computed('showPwdResetButton', 'showRegButton', function() {
    return this.get('showPwdResetButton') || this.get('showRegButton');
  }),

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
    This field stores full name.

    @property fullName
    @type String
    @default undefined
  */
  fullName: undefined,

  /**
    Route to redirect after success registration.

    @property goto
    @type String
    @default undefined
  */
  goto: undefined,

  /**
    This field stores if username is valid.

    @property validUsername
    @type Boolean
    @default false
  */
  validUsername: false,

  existUsername: false,

  showValidUsernameMessages: false,

  /**
    This computed field shows whether fullname is valid or not.

    @property validFullname
    @type Boolean
    @default false
  */
  validFullname: Ember.computed('fullName', function() {
      if (!Ember.isEmpty(this.get('fullName'))) {
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
    'existUsername',
    function() { 
      return !(this.get('validUsername') && this.get('validFullname') && this.get('existUsername') && this.get('captchaPassed'));
    }
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
      let userAccount = this.get('userAccount');
      this.set('showValidUsernameMessages', true);
      userAccount.validateUsername(username).then((result) => {
        if (result) {
          userAccount.existUsername(username).then((result) => {
            this.set('existUsername', result);
          })
          .catch(() => {
            this.set('existUsername', false);
          });
        }
        this.set('validUsername', result);
      })
      .catch(() => {
        this.set('validUsername', false);
      });
    },

    /**
      This action is called when register button is pressed.

      @method actions.register
    */
    register: function() {
      let username = this.get('username');
      let fullName = this.get('fullName');
      let goto = this.get('goto');
      let userAccount = this.get('userAccount');
      userAccount.register(username, fullName, goto).then((result) => {
        if (result) {
          if (Ember.isPresent(this.get('onSuccess'))) {
            this.get('onSuccess')();
          }
        } else {
          if (Ember.isPresent(this.get('onFail'))) {
            this.get('onFail')();
          }
        }
      })
      .catch((reason) => {
        if (Ember.isPresent(this.get('onFail'))) {
          this.get('onFail')(reason);
        }
      });
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
