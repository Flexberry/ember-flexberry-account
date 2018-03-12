import Ember from 'ember';
import UserAccountService from 'ember-flexberry-account/services/user-account';
import config from '../config/environment';

let enabled = Ember.get(config, 'APP.userAccount.enabled');
if (Ember.typeOf(enabled) === 'boolean') {
  UserAccountService.reopen({
    enabled: enabled
  });
}

let vk = Ember.get(config, 'APP.userAccount.vk');
if (Ember.typeOf(vk) === 'boolean') {
  UserAccountService.reopen({
    vk: vk
  });
}

let facebook = Ember.get(config, 'APP.userAccount.facebook');
if (Ember.typeOf(facebook) === 'boolean') {
  UserAccountService.reopen({
    facebook: facebook
  });
}

let twitter = Ember.get(config, 'APP.userAccount.twitter');
if (Ember.typeOf(twitter) === 'boolean') {
  UserAccountService.reopen({
    twitter: twitter
  });
}

let google = Ember.get(config, 'APP.userAccount.google');
if (Ember.typeOf(google) === 'boolean') {
  UserAccountService.reopen({
    google: google
  });
}

let microsoft = Ember.get(config, 'APP.userAccount.microsoft');
if (Ember.typeOf(microsoft) === 'boolean') {
  UserAccountService.reopen({
    microsoft: microsoft
  });
}

let github = Ember.get(config, 'APP.userAccount.github');
if (Ember.typeOf(github) === 'boolean') {
  UserAccountService.reopen({
    github: github
  });
}

let ok = Ember.get(config, 'APP.userAccount.ok');
if (Ember.typeOf(ok) === 'boolean') {
  UserAccountService.reopen({
    ok: ok
  });
}

let mailru = Ember.get(config, 'APP.userAccount.mailru');
if (Ember.typeOf(mailru) === 'boolean') {
  UserAccountService.reopen({
    mailru: mailru
  });
}

let yandex = Ember.get(config, 'APP.userAccount.yandex');
if (Ember.typeOf(yandex) === 'boolean') {
  UserAccountService.reopen({
    yandex: yandex
  });
}

let gosuslugi = Ember.get(config, 'APP.userAccount.gosuslugi');
if (Ember.typeOf(gosuslugi) === 'boolean') {
  UserAccountService.reopen({
    gosuslugi: gosuslugi
  });
}

export default UserAccountService;
