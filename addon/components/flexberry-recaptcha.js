/**
  @module ember-flexberry-account
*/
import Ember from 'ember';

const { getOwner } = Ember;

export default Ember.Component.extend({

  appConfig: undefined,

  siteKey: undefined,

  init() {
    this._super(...arguments);

    // Import application config\environment.
    let appConfig = getOwner(this)._lookupFactory('config:environment');
    if (!Ember.isNone(appConfig)) {
      this.set('appConfig', appConfig);
    }

    this.set('siteKey', appConfig.recaptcha.siteKey);
  },

  actions: {

  }
});
