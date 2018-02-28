/**
  @module ember-flexberry-account
*/

import Ember from 'ember';

export default Ember.Component.extend({

  useNavBlock: false,

  /**
    Stores if we gonna show registration button or not.

    @property showRegButton
    @type Boolean
    @default false
  */
  showRegButton: false,

  /**
    Stores if we gonna show login button or not.

    @property showLoginButton
    @type Boolean
    @default false
  */
  showLoginButton: false,

  /**
    This field stores username.

    @property username
    @type String
    @default undefined
  */
  username: undefined,

  /**
    This field shows if captcha was successfully passed.

    @property captchaPassed
    @type Boolean
    @default false
  */
  captchaPassed: false,

  /**
    This computed field shows whether password reset is allowed or not.

    @property allowReset
    @type Boolean
    @default false
  */
  allowReset: Ember.computed('username', function() {
    return Ember.isEmpty(this.username);
  }),

  actions: {

    /**
      This action is called when captcha is successfully passed.

      @method actions.captchaSuccess
    */
    captchaSuccess: function() {
      this.set('captchaPassed', true);
    },

    /**
      This action is called when register button is pressed.

      @method actions.register
    */
    register: function() {
      Ember.getOwner(this).lookup('router:main').transitionTo('register');
    },

    /**
      This action is called when login button is pressed.

      @method actions.login
    */
    login: function() {
      Ember.getOwner(this).lookup('router:main').transitionTo('login');
    },

    /**
      This action is called when password reset button is pressed.

      @method actions.pwdReset
    */
    pwdReset: function() {
      let username = this.get('username');
      let userAccount = this.get('userAccount');
      userAccount.pwdReset(username).then((result) => {
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
      .catch(() => {
        if (Ember.isPresent(this.get('onFail'))) {
          this.get('onFail')();
        }
      });
    }
  }
});
