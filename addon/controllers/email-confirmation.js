import Ember from 'ember';

export default Ember.Controller.extend({

  userAccount: Ember.inject.service('user-account'),

  /**
    Defines which query parameters the controller accepts. [More info.](http://emberjs.com/api/classes/Ember.Controller.html#property_queryParams).
    @property queryParams
    @type Array
    @default ['token', 'fwd']
  */
  queryParams: ['token', 'fwd'],

  /**
    Activation token passed in query parameter.
    @property token
    @type String
    @default null
  */
  token: null,
  /**
    Route to transit to passed in query parameter.
    @property fwd
    @type String
    @default null
  */
  fwd: null,

  /**
    Flag indicates if activation button is enabled.
    @property buttonEnabled
    @type Boolean
    @default true
  */
  buttonEnabled: true,

  /**
    Flag indicates if there was an error while activating.
    @property activationError
    @type Boolean
    @default false
  */
  activationError: false,

  /**
    Flag indicates if there was an error while activating.
    @property loaderEnabled
    @type Boolean
    @default false
  */
  loaderEnabled: false,

  actions: {

    /**
      This action is called when activation button is pressed.

      @method actions.verify
    */
    verify() {
      this.set('buttonEnabled', false);

      let token = this.get('token');
      let fwd = this.get('fwd');

      if (Ember.isEmpty(token)) {
        this.set('activationError', true);
        return;
      }

      let userAccount = this.get('userAccount');

      userAccount.activateAccount(token)
      .then(() => {
        this.set('loaderEnabled', false);

        if (fwd != null) {
          this.transitionTo(fwd);
        } else {
          this.transitionTo('/');
        }

      })
      .catch(() => {
        this.set('loaderEnabled', false);
        this.set('activationError', true);
      });
    }
  }
});
