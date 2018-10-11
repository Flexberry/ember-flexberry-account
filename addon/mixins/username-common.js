import Ember from 'ember';

export default Ember.Mixin.create({
  /**
    This field stores username.

    @property username
    @type String
    @default undefined
  */
  username: undefined,

  usernameShared: Ember.A(),

  usernameObserver: Ember.observer('username', function () {
    this.usernameShared.firstObject = this.get('username');
  }),

  init() {
    this._super(...arguments);
    this.set("username", this.usernameShared.firstObject);
  }
})