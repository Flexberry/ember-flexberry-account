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

  useNavBlock: Ember.computed('showPwdResetButton', 'showRegButton', function() {
    return this.get('showPwdResetButton') || this.get('showRegButton');
  }),

  /**
    Stores if we gonna show registration button or not.

    @property showRegButton
    @type Boolean
    @default false
  */
  showRegButton: false,

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
    This field stores password.

    @property password
    @type String
    @default undefined
  */
  password: undefined,

  /**
    This field stores whether to remember values or not.

    @property remember
    @type Boolean
    @default true
  */
  remember: true,

  /**
    Flag is used to hide remember me field.

    @property showRemember
    @type Boolean
    @default false
  */
  showRemember: false,

  /**
    This computed field shows whether login is allowed or not.

    @property allowToLogin
    @type Boolean
    @default false
  */
  allowToLogin: Ember.computed('username', 'password', function() { return Ember.isEmpty(this.username) || Ember.isEmpty(this.password); }),

  actions: {

    /**
      This action is called when login button is pressed.

      @method actions.login
    */
    login: function() {
      let userAccount = this.get('userAccount');
      userAccount.login(this.get('username'), this.get('password'))
      .then((result)=> {
        if (result) {
          if (Ember.isPresent(this.get('onSuccess'))) {
            this.get('onSuccess')();
          }
        } else {
          if (Ember.isPresent(this.get('onFail'))) {
            this.get('onFail')();
          }
        }

      }).catch((reason) => {
        if (Ember.isPresent(this.get('onFail'))) {
          this.get('onFail')(reason);
        }
      });
    },

    /**
      This action is called when register button is pressed.

      @method actions.register
    */
    register: function() {
      Ember.getOwner(this).lookup('router:main').transitionTo('register');
    },

    /**
      This action is called when password reset button is pressed.

      @method actions.pwdReset
    */
    pwdReset: function() {
      Ember.getOwner(this).lookup('router:main').transitionTo('pwd-reset');
    },

    onKeyPress: function(e) {
      if (e.keyCode === 13 && !this.get('allowToLogin')) {
        this.send('login');
      }
    },
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
  },
});
