import Ember from 'ember';
import UserAccountService from 'ember-flexberry-account/services/user-account';

export default UserAccountService.reopen({
  validateUsername(username) {
    let enabled = this.get('enabled');

    if (!enabled) {
      return;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return new Ember.RSVP.Promise((resolve) => {
      resolve(re.test(String(username).toLowerCase()));
    });
  },
});
