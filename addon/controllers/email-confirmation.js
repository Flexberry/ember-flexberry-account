import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['token', 'fwd'],

  token: null,
  fwd: null,

  init() {
    let token = this.get('token');
    let fwd = this.get('fwd');
    console.info(token);
    console.info(fwd);
  }
});
