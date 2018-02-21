"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/flexberry-login', ['exports', 'ember-flexberry-account/components/flexberry-login'], function (exports, _emberFlexberryAccountComponentsFlexberryLogin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountComponentsFlexberryLogin['default'];
    }
  });
});
define('dummy/components/flexberry-pwd-reset', ['exports', 'ember-flexberry-account/components/flexberry-pwd-reset'], function (exports, _emberFlexberryAccountComponentsFlexberryPwdReset) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountComponentsFlexberryPwdReset['default'];
    }
  });
});
define('dummy/components/flexberry-recaptcha', ['exports', 'ember-flexberry-account/components/flexberry-recaptcha'], function (exports, _emberFlexberryAccountComponentsFlexberryRecaptcha) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountComponentsFlexberryRecaptcha['default'];
    }
  });
});
define('dummy/components/flexberry-register', ['exports', 'ember-flexberry-account/components/flexberry-register'], function (exports, _emberFlexberryAccountComponentsFlexberryRegister) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountComponentsFlexberryRegister['default'];
    }
  });
});
define('dummy/components/flexberry-user-profile', ['exports', 'ember-flexberry-account/components/flexberry-user-profile'], function (exports, _emberFlexberryAccountComponentsFlexberryUserProfile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountComponentsFlexberryUserProfile['default'];
    }
  });
});
define('dummy/controllers/login', ['exports', 'ember-flexberry-account/controllers/login'], function (exports, _emberFlexberryAccountControllersLogin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountControllersLogin['default'];
    }
  });
});
define('dummy/controllers/pwd-reset', ['exports', 'ember-flexberry-account/controllers/pwd-reset'], function (exports, _emberFlexberryAccountControllersPwdReset) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountControllersPwdReset['default'];
    }
  });
});
define('dummy/controllers/register', ['exports', 'ember-flexberry-account/controllers/register'], function (exports, _emberFlexberryAccountControllersRegister) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountControllersRegister['default'];
    }
  });
});
define('dummy/controllers/user-profile', ['exports', 'ember-flexberry-account/controllers/user-profile'], function (exports, _emberFlexberryAccountControllersUserProfile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountControllersUserProfile['default'];
    }
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/components/flexberry-login.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/components/flexberry-login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/components/flexberry-login.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/components/flexberry-pwd-reset.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/components/flexberry-pwd-reset.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/components/flexberry-pwd-reset.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/components/flexberry-recaptcha.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/components/flexberry-recaptcha.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/components/flexberry-recaptcha.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/components/flexberry-register.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/components/flexberry-register.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/components/flexberry-register.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/components/flexberry-user-profile.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/components/flexberry-user-profile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/components/flexberry-user-profile.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/controllers/login.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/controllers/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/controllers/login.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/controllers/pwd-reset.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/controllers/pwd-reset.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/controllers/pwd-reset.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/controllers/register.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/controllers/register.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/controllers/register.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/controllers/user-profile.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/controllers/user-profile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/controllers/user-profile.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/locales/en/translations.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/locales/en/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/locales/en/translations.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/locales/ru/translations.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/locales/ru/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/locales/ru/translations.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/models/user-profile.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/models/user-profile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/models/user-profile.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/routes/login.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/routes/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/routes/login.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/routes/pwd-reset.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/routes/pwd-reset.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/routes/pwd-reset.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/routes/register.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/routes/register.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/routes/register.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/routes/user-profile.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/routes/user-profile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/routes/user-profile.js should pass jshint.');
  });
});
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/services/user-account.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/services/user-account.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/services/user-account.js should pass jshint.');
  });
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _emberI18nHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nHelper['default'];
    }
  });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dummy/initializers/ember-i18n', ['exports', 'ember-i18n/initializers/ember-i18n'], function (exports, _emberI18nInitializersEmberI18n) {
  exports['default'] = _emberI18nInitializersEmberI18n['default'];
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _emberDataInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInitializeStoreService["default"]
  };
});
define('dummy/instance-initializers/ember-i18n', ['exports', 'ember-i18n/instance-initializers/ember-i18n'], function (exports, _emberI18nInstanceInitializersEmberI18n) {
  exports['default'] = _emberI18nInstanceInitializersEmberI18n['default'];
});
define('dummy/locales/en/translations', ['exports', 'ember', 'ember-flexberry-account/locales/en/translations'], function (exports, _ember, _emberFlexberryAccountLocalesEnTranslations) {

  var translations = {};
  _ember['default'].$.extend(true, translations, _emberFlexberryAccountLocalesEnTranslations['default']);

  _ember['default'].$.extend(true, translations, {});

  exports['default'] = translations;
});
define('dummy/locales/ru/translations', ['exports', 'ember', 'ember-flexberry-account/locales/ru/translations'], function (exports, _ember, _emberFlexberryAccountLocalesRuTranslations) {

  var translations = {};
  _ember['default'].$.extend(true, translations, _emberFlexberryAccountLocalesRuTranslations['default']);

  _ember['default'].$.extend(true, translations, {});

  exports['default'] = translations;
});
define('dummy/models/user-profile', ['exports', 'ember-flexberry-account/models/user-profile'], function (exports, _emberFlexberryAccountModelsUserProfile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountModelsUserProfile['default'];
    }
  });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('login');
    this.route('pwd-reset');
    this.route('register');
    this.route('user-profile');
  });

  exports['default'] = Router;
});
define('dummy/routes/login', ['exports', 'ember-flexberry-account/routes/login'], function (exports, _emberFlexberryAccountRoutesLogin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountRoutesLogin['default'];
    }
  });
});
define('dummy/routes/pwd-reset', ['exports', 'ember-flexberry-account/routes/pwd-reset'], function (exports, _emberFlexberryAccountRoutesPwdReset) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountRoutesPwdReset['default'];
    }
  });
});
define('dummy/routes/register', ['exports', 'ember-flexberry-account/routes/register'], function (exports, _emberFlexberryAccountRoutesRegister) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountRoutesRegister['default'];
    }
  });
});
define('dummy/routes/user-profile', ['exports', 'ember-flexberry-account/routes/user-profile'], function (exports, _emberFlexberryAccountRoutesUserProfile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountRoutesUserProfile['default'];
    }
  });
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _emberI18nServicesI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nServicesI18n['default'];
    }
  });
});
define('dummy/services/user-account', ['exports', 'ember', 'ember-flexberry-account/services/user-account', 'dummy/config/environment'], function (exports, _ember, _emberFlexberryAccountServicesUserAccount, _dummyConfigEnvironment) {

  var enabled = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.userAccount.enabled');
  if (_ember['default'].typeOf(enabled) === 'boolean') {
    _emberFlexberryAccountServicesUserAccount['default'].reopen({
      enabled: enabled
    });
  }

  var vk = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.userAccount.vk');
  if (_ember['default'].typeOf(vk) === 'boolean') {
    _emberFlexberryAccountServicesUserAccount['default'].reopen({
      vk: vk
    });
  }

  var facebook = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.userAccount.facebook');
  if (_ember['default'].typeOf(facebook) === 'boolean') {
    _emberFlexberryAccountServicesUserAccount['default'].reopen({
      facebook: facebook
    });
  }

  var twitter = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.userAccount.twitter');
  if (_ember['default'].typeOf(twitter) === 'boolean') {
    _emberFlexberryAccountServicesUserAccount['default'].reopen({
      twitter: twitter
    });
  }

  var google = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.userAccount.google');
  if (_ember['default'].typeOf(google) === 'boolean') {
    _emberFlexberryAccountServicesUserAccount['default'].reopen({
      google: google
    });
  }

  var microsoft = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.userAccount.microsoft');
  if (_ember['default'].typeOf(microsoft) === 'boolean') {
    _emberFlexberryAccountServicesUserAccount['default'].reopen({
      microsoft: microsoft
    });
  }

  var github = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.userAccount.github');
  if (_ember['default'].typeOf(github) === 'boolean') {
    _emberFlexberryAccountServicesUserAccount['default'].reopen({
      github: github
    });
  }

  var ok = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.userAccount.ok');
  if (_ember['default'].typeOf(ok) === 'boolean') {
    _emberFlexberryAccountServicesUserAccount['default'].reopen({
      ok: ok
    });
  }

  var mailru = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.userAccount.mailru');
  if (_ember['default'].typeOf(mailru) === 'boolean') {
    _emberFlexberryAccountServicesUserAccount['default'].reopen({
      mailru: mailru
    });
  }

  var yandex = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.userAccount.yandex');
  if (_ember['default'].typeOf(yandex) === 'boolean') {
    _emberFlexberryAccountServicesUserAccount['default'].reopen({
      yandex: yandex
    });
  }

  var gosuslugi = _ember['default'].get(_dummyConfigEnvironment['default'], 'APP.userAccount.gosuslugi');
  if (_ember['default'].typeOf(gosuslugi) === 'boolean') {
    _emberFlexberryAccountServicesUserAccount['default'].reopen({
      gosuslugi: gosuslugi
    });
  }

  exports['default'] = _emberFlexberryAccountServicesUserAccount['default'];
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 3,
              "column": 27
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Login");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 33
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Register");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 40
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Reset password");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 41
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("User profile");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("ember-flexberry-account Dummy");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("nav");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        morphs[3] = dom.createMorphAt(element0, 7, 7);
        morphs[4] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["login"], [], 0, null, ["loc", [null, [3, 2], [3, 39]]]], ["block", "link-to", ["register"], [], 1, null, ["loc", [null, [4, 2], [4, 45]]]], ["block", "link-to", ["pwd-reset"], [], 2, null, ["loc", [null, [5, 2], [5, 52]]]], ["block", "link-to", ["user-profile"], [], 3, null, ["loc", [null, [6, 2], [6, 53]]]], ["content", "outlet", ["loc", [null, [9, 0], [9, 10]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("dummy/templates/components/flexberry-login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 4
              },
              "end": {
                "line": 25,
                "column": 48
              }
            },
            "moduleName": "dummy/templates/components/flexberry-login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "VK"], ["loc", [null, [25, 14], [25, 48]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 4
              },
              "end": {
                "line": 26,
                "column": 60
              }
            },
            "moduleName": "dummy/templates/components/flexberry-login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Facebook"], ["loc", [null, [26, 20], [26, 60]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 27,
                "column": 4
              },
              "end": {
                "line": 27,
                "column": 58
              }
            },
            "moduleName": "dummy/templates/components/flexberry-login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Twitter"], ["loc", [null, [27, 19], [27, 58]]]]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 28,
                "column": 4
              },
              "end": {
                "line": 28,
                "column": 56
              }
            },
            "moduleName": "dummy/templates/components/flexberry-login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Google"], ["loc", [null, [28, 18], [28, 56]]]]],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 29,
                "column": 4
              },
              "end": {
                "line": 29,
                "column": 62
              }
            },
            "moduleName": "dummy/templates/components/flexberry-login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Microsoft"], ["loc", [null, [29, 21], [29, 62]]]]],
          locals: [],
          templates: []
        };
      })();
      var child5 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 30,
                "column": 4
              },
              "end": {
                "line": 30,
                "column": 56
              }
            },
            "moduleName": "dummy/templates/components/flexberry-login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "GitHub"], ["loc", [null, [30, 18], [30, 56]]]]],
          locals: [],
          templates: []
        };
      })();
      var child6 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 4
              },
              "end": {
                "line": 31,
                "column": 48
              }
            },
            "moduleName": "dummy/templates/components/flexberry-login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "OK"], ["loc", [null, [31, 14], [31, 48]]]]],
          locals: [],
          templates: []
        };
      })();
      var child7 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 4
              },
              "end": {
                "line": 32,
                "column": 57
              }
            },
            "moduleName": "dummy/templates/components/flexberry-login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Mail.ru"], ["loc", [null, [32, 18], [32, 57]]]]],
          locals: [],
          templates: []
        };
      })();
      var child8 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 33,
                "column": 4
              },
              "end": {
                "line": 33,
                "column": 56
              }
            },
            "moduleName": "dummy/templates/components/flexberry-login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Yandex"], ["loc", [null, [33, 18], [33, 56]]]]],
          locals: [],
          templates: []
        };
      })();
      var child9 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 34,
                "column": 4
              },
              "end": {
                "line": 34,
                "column": 62
              }
            },
            "moduleName": "dummy/templates/components/flexberry-login.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Gosuslugi"], ["loc", [null, [34, 21], [34, 62]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 0
            },
            "end": {
              "line": 37,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-login.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "social-div");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "social-buttons");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [4]);
          var morphs = new Array(11);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createMorphAt(element1, 3, 3);
          morphs[3] = dom.createMorphAt(element1, 5, 5);
          morphs[4] = dom.createMorphAt(element1, 7, 7);
          morphs[5] = dom.createMorphAt(element1, 9, 9);
          morphs[6] = dom.createMorphAt(element1, 11, 11);
          morphs[7] = dom.createMorphAt(element1, 13, 13);
          morphs[8] = dom.createMorphAt(element1, 15, 15);
          morphs[9] = dom.createMorphAt(element1, 17, 17);
          morphs[10] = dom.createMorphAt(element1, 19, 19);
          return morphs;
        },
        statements: [["inline", "t", ["components.login.login-with-label"], [], ["loc", [null, [23, 2], [23, 43]]]], ["block", "if", [["get", "vk", ["loc", [null, [25, 10], [25, 12]]]]], [], 0, null, ["loc", [null, [25, 4], [25, 55]]]], ["block", "if", [["get", "facebook", ["loc", [null, [26, 10], [26, 18]]]]], [], 1, null, ["loc", [null, [26, 4], [26, 67]]]], ["block", "if", [["get", "twitter", ["loc", [null, [27, 10], [27, 17]]]]], [], 2, null, ["loc", [null, [27, 4], [27, 65]]]], ["block", "if", [["get", "google", ["loc", [null, [28, 10], [28, 16]]]]], [], 3, null, ["loc", [null, [28, 4], [28, 63]]]], ["block", "if", [["get", "microsoft", ["loc", [null, [29, 10], [29, 19]]]]], [], 4, null, ["loc", [null, [29, 4], [29, 69]]]], ["block", "if", [["get", "github", ["loc", [null, [30, 10], [30, 16]]]]], [], 5, null, ["loc", [null, [30, 4], [30, 63]]]], ["block", "if", [["get", "ok", ["loc", [null, [31, 10], [31, 12]]]]], [], 6, null, ["loc", [null, [31, 4], [31, 55]]]], ["block", "if", [["get", "mailru", ["loc", [null, [32, 10], [32, 16]]]]], [], 7, null, ["loc", [null, [32, 4], [32, 64]]]], ["block", "if", [["get", "yandex", ["loc", [null, [33, 10], [33, 16]]]]], [], 8, null, ["loc", [null, [33, 4], [33, 63]]]], ["block", "if", [["get", "gosuslugi", ["loc", [null, [34, 10], [34, 19]]]]], [], 9, null, ["loc", [null, [34, 4], [34, 69]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 50,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-login.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "username-div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "password-div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "captcha-div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "login-div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "ui login-button button");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "register-reset-div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "ui register-button button");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "ui pwd-reset-button button");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var element3 = dom.childAt(fragment, [2]);
        var element4 = dom.childAt(fragment, [6]);
        var element5 = dom.childAt(element4, [5]);
        var element6 = dom.childAt(fragment, [9]);
        var element7 = dom.childAt(element6, [1]);
        var element8 = dom.childAt(element6, [3]);
        var morphs = new Array(17);
        morphs[0] = dom.createMorphAt(element2, 1, 1);
        morphs[1] = dom.createMorphAt(element2, 4, 4);
        morphs[2] = dom.createMorphAt(element3, 1, 1);
        morphs[3] = dom.createMorphAt(element3, 4, 4);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        morphs[5] = dom.createMorphAt(element4, 1, 1);
        morphs[6] = dom.createMorphAt(element4, 3, 3);
        morphs[7] = dom.createAttrMorph(element5, 'title');
        morphs[8] = dom.createElementMorph(element5);
        morphs[9] = dom.createMorphAt(element5, 1, 1);
        morphs[10] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        morphs[11] = dom.createAttrMorph(element7, 'title');
        morphs[12] = dom.createElementMorph(element7);
        morphs[13] = dom.createMorphAt(element7, 1, 1);
        morphs[14] = dom.createAttrMorph(element8, 'title');
        morphs[15] = dom.createElementMorph(element8);
        morphs[16] = dom.createMorphAt(element8, 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["components.login.username-label"], [], ["loc", [null, [2, 2], [2, 41]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "username", ["loc", [null, [3, 28], [3, 36]]]]], [], []]], ["loc", [null, [3, 2], [3, 38]]]], ["inline", "t", ["components.login.password-label"], [], ["loc", [null, [6, 2], [6, 41]]]], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [7, 32], [7, 40]]]]], [], []]], ["loc", [null, [7, 2], [7, 42]]]], ["inline", "flexberry-recaptcha", [], ["onSuccess", ["subexpr", "action", ["test"], [], ["loc", [null, [10, 34], [10, 49]]]]], ["loc", [null, [10, 2], [10, 51]]]], ["inline", "t", ["components.login.remember-label"], [], ["loc", [null, [13, 2], [13, 41]]]], ["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "remember", ["loc", [null, [13, 74], [13, 82]]]]], [], []]], ["loc", [null, [13, 42], [13, 84]]]], ["attribute", "title", ["subexpr", "t", ["components.login.login-button-title"], [], ["loc", [null, [16, 10], [16, 53]]]]], ["element", "action", ["login"], [], ["loc", [null, [17, 4], [17, 22]]]], ["inline", "t", ["components.login.login-button-text"], [], ["loc", [null, [18, 6], [18, 48]]]], ["block", "if", [["get", "useSocialBlock", ["loc", [null, [21, 6], [21, 20]]]]], [], 0, null, ["loc", [null, [21, 0], [37, 7]]]], ["attribute", "title", ["subexpr", "t", ["components.login.register-button-title"], [], ["loc", [null, [40, 10], [40, 56]]]]], ["element", "action", ["register"], [], ["loc", [null, [41, 4], [41, 25]]]], ["inline", "t", ["components.login.register-button-text"], [], ["loc", [null, [42, 6], [42, 51]]]], ["attribute", "title", ["subexpr", "t", ["components.login.pwd-reset-button-title"], [], ["loc", [null, [45, 8], [45, 55]]]]], ["element", "action", ["pwdReset"], [], ["loc", [null, [46, 2], [46, 23]]]], ["inline", "t", ["components.login.pwd-reset-button-text"], [], ["loc", [null, [47, 4], [47, 50]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/components/flexberry-pwd-reset", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-pwd-reset.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "username-div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "captcha-div");
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "pwd-reset-div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "ui pwd-reset-button button");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "login-register-div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "ui login-button button");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "ui register-button button");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(fragment, [4, 1]);
        var element3 = dom.childAt(fragment, [6]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var morphs = new Array(13);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 4, 4);
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        morphs[3] = dom.createMorphAt(element1, 4, 4);
        morphs[4] = dom.createAttrMorph(element2, 'title');
        morphs[5] = dom.createElementMorph(element2);
        morphs[6] = dom.createMorphAt(element2, 1, 1);
        morphs[7] = dom.createAttrMorph(element4, 'title');
        morphs[8] = dom.createElementMorph(element4);
        morphs[9] = dom.createMorphAt(element4, 1, 1);
        morphs[10] = dom.createAttrMorph(element5, 'title');
        morphs[11] = dom.createElementMorph(element5);
        morphs[12] = dom.createMorphAt(element5, 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["components.pwd-reset.username-label"], [], ["loc", [null, [2, 2], [2, 45]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "username", ["loc", [null, [3, 28], [3, 36]]]]], [], []]], ["loc", [null, [3, 2], [3, 38]]]], ["inline", "t", ["components.pwd-reset.captcha-label"], [], ["loc", [null, [6, 3], [6, 45]]]], ["content", "flexberry-recaptcha", ["loc", [null, [7, 3], [7, 26]]]], ["attribute", "title", ["subexpr", "t", ["components.pwd-reset.pwd-reset-button-title"], [], ["loc", [null, [12, 10], [12, 61]]]]], ["element", "action", ["pwdReset"], [], ["loc", [null, [13, 4], [13, 25]]]], ["inline", "t", ["components.pwd-reset.pwd-reset-button-text"], [], ["loc", [null, [14, 6], [14, 56]]]], ["attribute", "title", ["subexpr", "t", ["components.pwd-reset.login-button-title"], [], ["loc", [null, [19, 10], [19, 57]]]]], ["element", "action", ["login"], [], ["loc", [null, [20, 4], [20, 22]]]], ["inline", "t", ["components.pwd-reset.login-button-text"], [], ["loc", [null, [21, 6], [21, 52]]]], ["attribute", "title", ["subexpr", "t", ["components.pwd-reset.register-button-title"], [], ["loc", [null, [24, 10], [24, 60]]]]], ["element", "action", ["register"], [], ["loc", [null, [25, 4], [25, 25]]]], ["inline", "t", ["components.pwd-reset.register-button-text"], [], ["loc", [null, [26, 6], [26, 55]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/flexberry-register", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-register.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("ok!\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 36,
                "column": 4
              },
              "end": {
                "line": 36,
                "column": 48
              }
            },
            "moduleName": "dummy/templates/components/flexberry-register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "VK"], ["loc", [null, [36, 14], [36, 48]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 4
              },
              "end": {
                "line": 37,
                "column": 60
              }
            },
            "moduleName": "dummy/templates/components/flexberry-register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Facebook"], ["loc", [null, [37, 20], [37, 60]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 38,
                "column": 4
              },
              "end": {
                "line": 38,
                "column": 58
              }
            },
            "moduleName": "dummy/templates/components/flexberry-register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Twitter"], ["loc", [null, [38, 19], [38, 58]]]]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 39,
                "column": 4
              },
              "end": {
                "line": 39,
                "column": 56
              }
            },
            "moduleName": "dummy/templates/components/flexberry-register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Google"], ["loc", [null, [39, 18], [39, 56]]]]],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 40,
                "column": 4
              },
              "end": {
                "line": 40,
                "column": 62
              }
            },
            "moduleName": "dummy/templates/components/flexberry-register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Microsoft"], ["loc", [null, [40, 21], [40, 62]]]]],
          locals: [],
          templates: []
        };
      })();
      var child5 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 41,
                "column": 4
              },
              "end": {
                "line": 41,
                "column": 56
              }
            },
            "moduleName": "dummy/templates/components/flexberry-register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "GitHub"], ["loc", [null, [41, 18], [41, 56]]]]],
          locals: [],
          templates: []
        };
      })();
      var child6 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 42,
                "column": 4
              },
              "end": {
                "line": 42,
                "column": 48
              }
            },
            "moduleName": "dummy/templates/components/flexberry-register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "OK"], ["loc", [null, [42, 14], [42, 48]]]]],
          locals: [],
          templates: []
        };
      })();
      var child7 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 43,
                "column": 4
              },
              "end": {
                "line": 43,
                "column": 57
              }
            },
            "moduleName": "dummy/templates/components/flexberry-register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Mail.ru"], ["loc", [null, [43, 18], [43, 57]]]]],
          locals: [],
          templates: []
        };
      })();
      var child8 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 44,
                "column": 4
              },
              "end": {
                "line": 44,
                "column": 56
              }
            },
            "moduleName": "dummy/templates/components/flexberry-register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Yandex"], ["loc", [null, [44, 18], [44, 56]]]]],
          locals: [],
          templates: []
        };
      })();
      var child9 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 45,
                "column": 4
              },
              "end": {
                "line": 45,
                "column": 62
              }
            },
            "moduleName": "dummy/templates/components/flexberry-register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "button", "value", "Gosuslugi"], ["loc", [null, [45, 21], [45, 62]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 0
            },
            "end": {
              "line": 48,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/flexberry-register.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "social-div");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "social-buttons");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [4]);
          var morphs = new Array(11);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createMorphAt(element1, 3, 3);
          morphs[3] = dom.createMorphAt(element1, 5, 5);
          morphs[4] = dom.createMorphAt(element1, 7, 7);
          morphs[5] = dom.createMorphAt(element1, 9, 9);
          morphs[6] = dom.createMorphAt(element1, 11, 11);
          morphs[7] = dom.createMorphAt(element1, 13, 13);
          morphs[8] = dom.createMorphAt(element1, 15, 15);
          morphs[9] = dom.createMorphAt(element1, 17, 17);
          morphs[10] = dom.createMorphAt(element1, 19, 19);
          return morphs;
        },
        statements: [["inline", "t", ["components.register.register-with-label"], [], ["loc", [null, [34, 2], [34, 49]]]], ["block", "if", [["get", "vk", ["loc", [null, [36, 10], [36, 12]]]]], [], 0, null, ["loc", [null, [36, 4], [36, 55]]]], ["block", "if", [["get", "facebook", ["loc", [null, [37, 10], [37, 18]]]]], [], 1, null, ["loc", [null, [37, 4], [37, 67]]]], ["block", "if", [["get", "twitter", ["loc", [null, [38, 10], [38, 17]]]]], [], 2, null, ["loc", [null, [38, 4], [38, 65]]]], ["block", "if", [["get", "google", ["loc", [null, [39, 10], [39, 16]]]]], [], 3, null, ["loc", [null, [39, 4], [39, 63]]]], ["block", "if", [["get", "microsoft", ["loc", [null, [40, 10], [40, 19]]]]], [], 4, null, ["loc", [null, [40, 4], [40, 69]]]], ["block", "if", [["get", "github", ["loc", [null, [41, 10], [41, 16]]]]], [], 5, null, ["loc", [null, [41, 4], [41, 63]]]], ["block", "if", [["get", "ok", ["loc", [null, [42, 10], [42, 12]]]]], [], 6, null, ["loc", [null, [42, 4], [42, 55]]]], ["block", "if", [["get", "mailru", ["loc", [null, [43, 10], [43, 16]]]]], [], 7, null, ["loc", [null, [43, 4], [43, 64]]]], ["block", "if", [["get", "yandex", ["loc", [null, [44, 10], [44, 16]]]]], [], 8, null, ["loc", [null, [44, 4], [44, 63]]]], ["block", "if", [["get", "gosuslugi", ["loc", [null, [45, 10], [45, 19]]]]], [], 9, null, ["loc", [null, [45, 4], [45, 69]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 62,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-register.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "username-div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "surname-div");
        var el2 = dom.createTextNode("\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "name-div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "middle-name-div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "captcha-div");
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "register-div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "ui register-button button");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "login-reset-div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "ui login-button button");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "ui pwd-reset-button button");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var element3 = dom.childAt(fragment, [2]);
        var element4 = dom.childAt(fragment, [4]);
        var element5 = dom.childAt(fragment, [6]);
        var element6 = dom.childAt(fragment, [8]);
        var element7 = dom.childAt(fragment, [10, 1]);
        var element8 = dom.childAt(fragment, [13]);
        var element9 = dom.childAt(element8, [4]);
        var element10 = dom.childAt(element8, [6]);
        var morphs = new Array(22);
        morphs[0] = dom.createMorphAt(element2, 1, 1);
        morphs[1] = dom.createMorphAt(element2, 4, 4);
        morphs[2] = dom.createMorphAt(element2, 6, 6);
        morphs[3] = dom.createMorphAt(element3, 1, 1);
        morphs[4] = dom.createMorphAt(element3, 4, 4);
        morphs[5] = dom.createMorphAt(element4, 1, 1);
        morphs[6] = dom.createMorphAt(element4, 4, 4);
        morphs[7] = dom.createMorphAt(element5, 1, 1);
        morphs[8] = dom.createMorphAt(element5, 4, 4);
        morphs[9] = dom.createMorphAt(element6, 1, 1);
        morphs[10] = dom.createMorphAt(element6, 4, 4);
        morphs[11] = dom.createAttrMorph(element7, 'title');
        morphs[12] = dom.createElementMorph(element7);
        morphs[13] = dom.createMorphAt(element7, 1, 1);
        morphs[14] = dom.createMorphAt(fragment, 12, 12, contextualElement);
        morphs[15] = dom.createMorphAt(element8, 1, 1);
        morphs[16] = dom.createAttrMorph(element9, 'title');
        morphs[17] = dom.createElementMorph(element9);
        morphs[18] = dom.createMorphAt(element9, 1, 1);
        morphs[19] = dom.createAttrMorph(element10, 'title');
        morphs[20] = dom.createElementMorph(element10);
        morphs[21] = dom.createMorphAt(element10, 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["components.register.username-label"], [], ["loc", [null, [2, 0], [2, 42]]]], ["inline", "input", [], ["type", "email", "value", ["subexpr", "@mut", [["get", "username", ["loc", [null, [3, 27], [3, 35]]]]], [], []]], ["loc", [null, [3, 0], [3, 37]]]], ["block", "if", [["get", "validUsername", ["loc", [null, [4, 6], [4, 19]]]]], [], 0, null, ["loc", [null, [4, 0], [6, 7]]]], ["inline", "t", ["components.register.surname-label"], [], ["loc", [null, [9, 1], [9, 42]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "surname", ["loc", [null, [10, 27], [10, 34]]]]], [], []]], ["loc", [null, [10, 1], [10, 36]]]], ["inline", "t", ["components.register.name-label"], [], ["loc", [null, [13, 0], [13, 38]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "name", ["loc", [null, [14, 27], [14, 31]]]]], [], []]], ["loc", [null, [14, 1], [14, 33]]]], ["inline", "t", ["components.register.middlename-label"], [], ["loc", [null, [17, 0], [17, 44]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "middlename", ["loc", [null, [18, 27], [18, 37]]]]], [], []]], ["loc", [null, [18, 1], [18, 39]]]], ["inline", "t", ["components.register.captcha-label"], [], ["loc", [null, [21, 3], [21, 44]]]], ["content", "flexberry-recaptcha", ["loc", [null, [22, 3], [22, 26]]]], ["attribute", "title", ["subexpr", "t", ["components.register.register-button-title"], [], ["loc", [null, [27, 10], [27, 59]]]]], ["element", "action", ["register"], [], ["loc", [null, [28, 4], [28, 25]]]], ["inline", "t", ["components.register.register-button-text"], [], ["loc", [null, [29, 6], [29, 54]]]], ["block", "if", [["get", "useSocialBlock", ["loc", [null, [32, 6], [32, 20]]]]], [], 1, null, ["loc", [null, [32, 0], [48, 7]]]], ["inline", "t", ["components.register.login-reset-label"], [], ["loc", [null, [50, 2], [50, 47]]]], ["attribute", "title", ["subexpr", "t", ["components.register.login-button-title"], [], ["loc", [null, [52, 10], [52, 56]]]]], ["element", "action", ["login"], [], ["loc", [null, [53, 4], [53, 22]]]], ["inline", "t", ["components.register.login-button-text"], [], ["loc", [null, [54, 6], [54, 51]]]], ["attribute", "title", ["subexpr", "t", ["components.register.pwd-reset-button-title"], [], ["loc", [null, [57, 10], [57, 60]]]]], ["element", "action", ["pwdReset"], [], ["loc", [null, [58, 4], [58, 25]]]], ["inline", "t", ["components.register.pwd-reset-button-text"], [], ["loc", [null, [59, 6], [59, 55]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/components/flexberry-user-profile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/flexberry-user-profile.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("User profile edit form\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/login.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "t", ["forms.login.caption"], [], ["loc", [null, [1, 4], [1, 31]]]], ["content", "flexberry-login", ["loc", [null, [2, 0], [2, 19]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/pwd-reset", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/pwd-reset.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "t", ["forms.pwd-reset.caption"], [], ["loc", [null, [1, 4], [1, 35]]]], ["content", "flexberry-pwd-reset", ["loc", [null, [2, 0], [2, 23]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/register", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/register.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "t", ["forms.register.caption"], [], ["loc", [null, [1, 4], [1, 34]]]], ["content", "flexberry-register", ["loc", [null, [2, 0], [2, 22]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/user-profile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/user-profile.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "t", ["forms.user-profile.caption"], [], ["loc", [null, [1, 4], [1, 38]]]], ["content", "flexberry-user-profile", ["loc", [null, [2, 0], [2, 26]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _emberI18nUtilsI18nCompileTemplate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nCompileTemplate['default'];
    }
  });
});
define('dummy/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _emberI18nUtilsI18nMissingMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nMissingMessage['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"backendUrl":"https://ember-flexberry-account.azurewebsites.net","backendUrls":{"root":"https://ember-flexberry-account.azurewebsites.net","api":"https://ember-flexberry-account.azurewebsites.net/odata"},"userAccount":{"enabled":true,"vk":false,"facebook":false,"twitter":false,"google":false,"microsoft":false,"github":true,"ok":false,"mailru":false,"yandex":false,"gosuslugi":false},"name":"ember-flexberry-account","version":"0.1.0-alpha.2+5db8adea"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
