import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('pwd-reset');
  this.route('register');
  this.route('user-profile');
  this.route('email-confirmation');
  this.route('reg-end');
});

export default Router;
