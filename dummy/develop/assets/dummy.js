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
define('dummy/controllers/email-confirmation', ['exports', 'ember-flexberry-account/controllers/email-confirmation'], function (exports, _emberFlexberryAccountControllersEmailConfirmation) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFlexberryAccountControllersEmailConfirmation['default'];
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
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/controllers/email-confirmation.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/controllers/email-confirmation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/controllers/email-confirmation.js should pass jshint.');
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
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/routes/email-confirmation.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/routes/email-confirmation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/routes/email-confirmation.js should pass jshint.');
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
define('dummy/ember-flexberry-account/tests/modules/ember-flexberry-account/routes/reg-end.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-flexberry-account/routes/reg-end.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-flexberry-account/routes/reg-end.js should pass jshint.');
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
    assert.ok(false, 'modules/ember-flexberry-account/services/user-account.js should pass jshint.\nmodules/ember-flexberry-account/services/user-account.js: line 123, col 28, \'redirectRoute\' is defined but never used.\n\n1 error');
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
    this.route('email-confirmation');
    this.route('reg-end');
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
define('dummy/services/user-account', ['exports', 'ember', 'ember-flexberry-account/services/user-account'], function (exports, _ember, _emberFlexberryAccountServicesUserAccount) {
  exports['default'] = _emberFlexberryAccountServicesUserAccount['default'].reopen({
    validateUsername: function validateUsername(username) {
      var enabled = this.get('enabled');

      if (!enabled) {
        return;
      }

      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return new _ember['default'].RSVP.Promise(function (resolve) {
        resolve(re.test(String(username).toLowerCase()));
      });
    }
  });
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
                "line": 23,
                "column": 4
              },
              "end": {
                "line": 23,
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
          statements: [["inline", "input", [], ["type", "button", "value", "VK"], ["loc", [null, [23, 14], [23, 48]]]]],
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
                "line": 24,
                "column": 4
              },
              "end": {
                "line": 24,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Facebook"], ["loc", [null, [24, 20], [24, 60]]]]],
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
                "line": 25,
                "column": 4
              },
              "end": {
                "line": 25,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Twitter"], ["loc", [null, [25, 19], [25, 58]]]]],
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
                "line": 26,
                "column": 4
              },
              "end": {
                "line": 26,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Google"], ["loc", [null, [26, 18], [26, 56]]]]],
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
                "line": 27,
                "column": 4
              },
              "end": {
                "line": 27,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Microsoft"], ["loc", [null, [27, 21], [27, 62]]]]],
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
          statements: [["inline", "input", [], ["type", "button", "value", "GitHub"], ["loc", [null, [28, 18], [28, 56]]]]],
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
                "line": 29,
                "column": 4
              },
              "end": {
                "line": 29,
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
          statements: [["inline", "input", [], ["type", "button", "value", "OK"], ["loc", [null, [29, 14], [29, 48]]]]],
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
                "line": 30,
                "column": 4
              },
              "end": {
                "line": 30,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Mail.ru"], ["loc", [null, [30, 18], [30, 57]]]]],
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
                "line": 31,
                "column": 4
              },
              "end": {
                "line": 31,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Yandex"], ["loc", [null, [31, 18], [31, 56]]]]],
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
                "line": 32,
                "column": 4
              },
              "end": {
                "line": 32,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Gosuslugi"], ["loc", [null, [32, 21], [32, 62]]]]],
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
              "line": 19,
              "column": 0
            },
            "end": {
              "line": 35,
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
          var element3 = dom.childAt(fragment, [0]);
          var element4 = dom.childAt(element3, [4]);
          var morphs = new Array(11);
          morphs[0] = dom.createMorphAt(element3, 1, 1);
          morphs[1] = dom.createMorphAt(element4, 1, 1);
          morphs[2] = dom.createMorphAt(element4, 3, 3);
          morphs[3] = dom.createMorphAt(element4, 5, 5);
          morphs[4] = dom.createMorphAt(element4, 7, 7);
          morphs[5] = dom.createMorphAt(element4, 9, 9);
          morphs[6] = dom.createMorphAt(element4, 11, 11);
          morphs[7] = dom.createMorphAt(element4, 13, 13);
          morphs[8] = dom.createMorphAt(element4, 15, 15);
          morphs[9] = dom.createMorphAt(element4, 17, 17);
          morphs[10] = dom.createMorphAt(element4, 19, 19);
          return morphs;
        },
        statements: [["inline", "t", ["components.login.login-with-label"], [], ["loc", [null, [21, 2], [21, 43]]]], ["block", "if", [["get", "vk", ["loc", [null, [23, 10], [23, 12]]]]], [], 0, null, ["loc", [null, [23, 4], [23, 55]]]], ["block", "if", [["get", "facebook", ["loc", [null, [24, 10], [24, 18]]]]], [], 1, null, ["loc", [null, [24, 4], [24, 67]]]], ["block", "if", [["get", "twitter", ["loc", [null, [25, 10], [25, 17]]]]], [], 2, null, ["loc", [null, [25, 4], [25, 65]]]], ["block", "if", [["get", "google", ["loc", [null, [26, 10], [26, 16]]]]], [], 3, null, ["loc", [null, [26, 4], [26, 63]]]], ["block", "if", [["get", "microsoft", ["loc", [null, [27, 10], [27, 19]]]]], [], 4, null, ["loc", [null, [27, 4], [27, 69]]]], ["block", "if", [["get", "github", ["loc", [null, [28, 10], [28, 16]]]]], [], 5, null, ["loc", [null, [28, 4], [28, 63]]]], ["block", "if", [["get", "ok", ["loc", [null, [29, 10], [29, 12]]]]], [], 6, null, ["loc", [null, [29, 4], [29, 55]]]], ["block", "if", [["get", "mailru", ["loc", [null, [30, 10], [30, 16]]]]], [], 7, null, ["loc", [null, [30, 4], [30, 64]]]], ["block", "if", [["get", "yandex", ["loc", [null, [31, 10], [31, 16]]]]], [], 8, null, ["loc", [null, [31, 4], [31, 63]]]], ["block", "if", [["get", "gosuslugi", ["loc", [null, [32, 10], [32, 19]]]]], [], 9, null, ["loc", [null, [32, 4], [32, 69]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9]
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
                "line": 38,
                "column": 2
              },
              "end": {
                "line": 44,
                "column": 2
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
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "ui register-button button");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element1, 'title');
            morphs[1] = dom.createElementMorph(element1);
            morphs[2] = dom.createMorphAt(element1, 1, 1);
            return morphs;
          },
          statements: [["attribute", "title", ["subexpr", "t", ["components.login.register-button-title"], [], ["loc", [null, [40, 10], [40, 56]]]]], ["element", "action", ["register"], [], ["loc", [null, [41, 4], [41, 25]]]], ["inline", "t", ["components.login.register-button-text"], [], ["loc", [null, [42, 6], [42, 51]]]]],
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
                "line": 45,
                "column": 2
              },
              "end": {
                "line": 51,
                "column": 2
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
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "ui pwd-reset-button button");
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element0, 'title');
            morphs[1] = dom.createElementMorph(element0);
            morphs[2] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "title", ["subexpr", "t", ["components.login.pwd-reset-button-title"], [], ["loc", [null, [47, 8], [47, 55]]]]], ["element", "action", ["pwdReset"], [], ["loc", [null, [48, 2], [48, 23]]]], ["inline", "t", ["components.login.pwd-reset-button-text"], [], ["loc", [null, [49, 4], [49, 50]]]]],
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
              "line": 36,
              "column": 0
            },
            "end": {
              "line": 53,
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
          dom.setAttribute(el1, "class", "register-reset-div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [0]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element2, 1, 1);
          morphs[1] = dom.createMorphAt(element2, 2, 2);
          return morphs;
        },
        statements: [["block", "if", [["get", "showRegButton", ["loc", [null, [38, 8], [38, 21]]]]], [], 0, null, ["loc", [null, [38, 2], [44, 9]]]], ["block", "if", [["get", "showPwdResetButton", ["loc", [null, [45, 8], [45, 26]]]]], [], 1, null, ["loc", [null, [45, 2], [51, 9]]]]],
        locals: [],
        templates: [child0, child1]
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
            "line": 54,
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [0]);
        var element6 = dom.childAt(fragment, [2]);
        var element7 = dom.childAt(fragment, [4]);
        var element8 = dom.childAt(element7, [5]);
        var morphs = new Array(12);
        morphs[0] = dom.createMorphAt(element5, 1, 1);
        morphs[1] = dom.createMorphAt(element5, 4, 4);
        morphs[2] = dom.createMorphAt(element6, 1, 1);
        morphs[3] = dom.createMorphAt(element6, 4, 4);
        morphs[4] = dom.createMorphAt(element7, 1, 1);
        morphs[5] = dom.createMorphAt(element7, 3, 3);
        morphs[6] = dom.createAttrMorph(element8, 'title');
        morphs[7] = dom.createAttrMorph(element8, 'disabled');
        morphs[8] = dom.createElementMorph(element8);
        morphs[9] = dom.createMorphAt(element8, 1, 1);
        morphs[10] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[11] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "t", ["components.login.username-label"], [], ["loc", [null, [2, 2], [2, 41]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "username", ["loc", [null, [3, 28], [3, 36]]]]], [], []]], ["loc", [null, [3, 2], [3, 38]]]], ["inline", "t", ["components.login.password-label"], [], ["loc", [null, [6, 2], [6, 41]]]], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [7, 32], [7, 40]]]]], [], []]], ["loc", [null, [7, 2], [7, 42]]]], ["inline", "t", ["components.login.remember-label"], [], ["loc", [null, [10, 2], [10, 41]]]], ["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "remember", ["loc", [null, [10, 74], [10, 82]]]]], [], []]], ["loc", [null, [10, 42], [10, 84]]]], ["attribute", "title", ["subexpr", "t", ["components.login.login-button-title"], [], ["loc", [null, [13, 10], [13, 53]]]]], ["attribute", "disabled", ["get", "allowToLogin", ["loc", [null, [14, 15], [14, 27]]]]], ["element", "action", ["login"], [], ["loc", [null, [15, 4], [15, 22]]]], ["inline", "t", ["components.login.login-button-text"], [], ["loc", [null, [16, 6], [16, 48]]]], ["block", "if", [["get", "useSocialBlock", ["loc", [null, [19, 6], [19, 20]]]]], [], 0, null, ["loc", [null, [19, 0], [35, 7]]]], ["block", "if", [["get", "useNavBlock", ["loc", [null, [36, 6], [36, 17]]]]], [], 1, null, ["loc", [null, [36, 0], [53, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/components/flexberry-pwd-reset", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
              "line": 8,
              "column": 2
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "username", ["loc", [null, [7, 30], [7, 38]]]]], [], []]], ["loc", [null, [7, 4], [7, 40]]]]],
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
              "line": 8,
              "column": 2
            },
            "end": {
              "line": 10,
              "column": 2
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "readonly", true], ["loc", [null, [9, 4], [9, 39]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 2
              },
              "end": {
                "line": 29,
                "column": 2
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
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "ui login-button button");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element1, 'title');
            morphs[1] = dom.createElementMorph(element1);
            morphs[2] = dom.createMorphAt(element1, 1, 1);
            return morphs;
          },
          statements: [["attribute", "title", ["subexpr", "t", ["components.pwd-reset.login-button-title"], [], ["loc", [null, [25, 10], [25, 57]]]]], ["element", "action", ["login"], [], ["loc", [null, [26, 4], [26, 22]]]], ["inline", "t", ["components.pwd-reset.login-button-text"], [], ["loc", [null, [27, 6], [27, 52]]]]],
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
                "line": 30,
                "column": 2
              },
              "end": {
                "line": 36,
                "column": 2
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
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "ui register-button button");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element0, 'title');
            morphs[1] = dom.createElementMorph(element0);
            morphs[2] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "title", ["subexpr", "t", ["components.pwd-reset.register-button-title"], [], ["loc", [null, [32, 10], [32, 60]]]]], ["element", "action", ["register"], [], ["loc", [null, [33, 4], [33, 25]]]], ["inline", "t", ["components.pwd-reset.register-button-text"], [], ["loc", [null, [34, 6], [34, 55]]]]],
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
              "line": 38,
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
          dom.setAttribute(el1, "class", "login-register-div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [0]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element2, 1, 1);
          morphs[1] = dom.createMorphAt(element2, 2, 2);
          return morphs;
        },
        statements: [["block", "if", [["get", "showPwdResetButton", ["loc", [null, [23, 8], [23, 26]]]]], [], 0, null, ["loc", [null, [23, 2], [29, 9]]]], ["block", "if", [["get", "showRegButton", ["loc", [null, [30, 8], [30, 21]]]]], [], 1, null, ["loc", [null, [30, 2], [36, 9]]]]],
        locals: [],
        templates: [child0, child1]
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
            "line": 39,
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
        dom.setAttribute(el1, "class", "captcha-div");
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
        dom.setAttribute(el1, "class", "username-div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [2]);
        var element4 = dom.childAt(fragment, [4, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(element3, 1, 1);
        morphs[2] = dom.createMorphAt(element3, 4, 4);
        morphs[3] = dom.createAttrMorph(element4, 'title');
        morphs[4] = dom.createAttrMorph(element4, 'disabled');
        morphs[5] = dom.createElementMorph(element4);
        morphs[6] = dom.createMorphAt(element4, 1, 1);
        morphs[7] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "flexberry-recaptcha", [], ["onSuccess", ["subexpr", "action", ["captchaSuccess"], [], ["loc", [null, [2, 35], [2, 60]]]]], ["loc", [null, [2, 3], [2, 62]]]], ["inline", "t", ["components.pwd-reset.username-label"], [], ["loc", [null, [5, 2], [5, 45]]]], ["block", "if", [["get", "captchaPassed", ["loc", [null, [6, 8], [6, 21]]]]], [], 0, 1, ["loc", [null, [6, 2], [10, 9]]]], ["attribute", "title", ["subexpr", "t", ["components.pwd-reset.pwd-reset-button-title"], [], ["loc", [null, [15, 10], [15, 61]]]]], ["attribute", "disabled", ["get", "allowReset", ["loc", [null, [16, 15], [16, 25]]]]], ["element", "action", ["pwdReset"], [], ["loc", [null, [17, 4], [17, 25]]]], ["inline", "t", ["components.pwd-reset.pwd-reset-button-text"], [], ["loc", [null, [18, 6], [18, 56]]]], ["block", "if", [["get", "showNavBlock", ["loc", [null, [21, 6], [21, 18]]]]], [], 2, null, ["loc", [null, [21, 0], [38, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
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
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 11,
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
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "email", "value", ["subexpr", "@mut", [["get", "username", ["loc", [null, [10, 29], [10, 37]]]]], [], []], "focus-out", "validateUsername"], ["loc", [null, [10, 2], [10, 68]]]]],
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
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 13,
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
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "email", "readonly", true], ["loc", [null, [12, 2], [12, 38]]]]],
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
              "line": 20,
              "column": 1
            },
            "end": {
              "line": 22,
              "column": 1
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
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "fullName", ["loc", [null, [21, 28], [21, 36]]]]], [], []]], ["loc", [null, [21, 2], [21, 38]]]]],
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
              "line": 22,
              "column": 1
            },
            "end": {
              "line": 24,
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
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "text", "readonly", true], ["loc", [null, [23, 2], [23, 37]]]]],
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
              "line": 26,
              "column": 0
            },
            "end": {
              "line": 28,
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
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "green check icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
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
    var child5 = (function () {
      var child0 = (function () {
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
          statements: [["inline", "input", [], ["type", "button", "value", "VK"], ["loc", [null, [43, 14], [43, 48]]]]],
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
                "line": 44,
                "column": 4
              },
              "end": {
                "line": 44,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Facebook"], ["loc", [null, [44, 20], [44, 60]]]]],
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
                "line": 45,
                "column": 4
              },
              "end": {
                "line": 45,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Twitter"], ["loc", [null, [45, 19], [45, 58]]]]],
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
                "line": 46,
                "column": 4
              },
              "end": {
                "line": 46,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Google"], ["loc", [null, [46, 18], [46, 56]]]]],
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
                "line": 47,
                "column": 4
              },
              "end": {
                "line": 47,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Microsoft"], ["loc", [null, [47, 21], [47, 62]]]]],
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
                "line": 48,
                "column": 4
              },
              "end": {
                "line": 48,
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
          statements: [["inline", "input", [], ["type", "button", "value", "GitHub"], ["loc", [null, [48, 18], [48, 56]]]]],
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
                "line": 49,
                "column": 4
              },
              "end": {
                "line": 49,
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
          statements: [["inline", "input", [], ["type", "button", "value", "OK"], ["loc", [null, [49, 14], [49, 48]]]]],
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
                "line": 50,
                "column": 4
              },
              "end": {
                "line": 50,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Mail.ru"], ["loc", [null, [50, 18], [50, 57]]]]],
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
                "line": 51,
                "column": 4
              },
              "end": {
                "line": 51,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Yandex"], ["loc", [null, [51, 18], [51, 56]]]]],
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
                "line": 52,
                "column": 4
              },
              "end": {
                "line": 52,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Gosuslugi"], ["loc", [null, [52, 21], [52, 62]]]]],
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
              "line": 39,
              "column": 0
            },
            "end": {
              "line": 55,
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
          var element3 = dom.childAt(fragment, [0]);
          var element4 = dom.childAt(element3, [4]);
          var morphs = new Array(11);
          morphs[0] = dom.createMorphAt(element3, 1, 1);
          morphs[1] = dom.createMorphAt(element4, 1, 1);
          morphs[2] = dom.createMorphAt(element4, 3, 3);
          morphs[3] = dom.createMorphAt(element4, 5, 5);
          morphs[4] = dom.createMorphAt(element4, 7, 7);
          morphs[5] = dom.createMorphAt(element4, 9, 9);
          morphs[6] = dom.createMorphAt(element4, 11, 11);
          morphs[7] = dom.createMorphAt(element4, 13, 13);
          morphs[8] = dom.createMorphAt(element4, 15, 15);
          morphs[9] = dom.createMorphAt(element4, 17, 17);
          morphs[10] = dom.createMorphAt(element4, 19, 19);
          return morphs;
        },
        statements: [["inline", "t", ["components.register.register-with-label"], [], ["loc", [null, [41, 2], [41, 49]]]], ["block", "if", [["get", "vk", ["loc", [null, [43, 10], [43, 12]]]]], [], 0, null, ["loc", [null, [43, 4], [43, 55]]]], ["block", "if", [["get", "facebook", ["loc", [null, [44, 10], [44, 18]]]]], [], 1, null, ["loc", [null, [44, 4], [44, 67]]]], ["block", "if", [["get", "twitter", ["loc", [null, [45, 10], [45, 17]]]]], [], 2, null, ["loc", [null, [45, 4], [45, 65]]]], ["block", "if", [["get", "google", ["loc", [null, [46, 10], [46, 16]]]]], [], 3, null, ["loc", [null, [46, 4], [46, 63]]]], ["block", "if", [["get", "microsoft", ["loc", [null, [47, 10], [47, 19]]]]], [], 4, null, ["loc", [null, [47, 4], [47, 69]]]], ["block", "if", [["get", "github", ["loc", [null, [48, 10], [48, 16]]]]], [], 5, null, ["loc", [null, [48, 4], [48, 63]]]], ["block", "if", [["get", "ok", ["loc", [null, [49, 10], [49, 12]]]]], [], 6, null, ["loc", [null, [49, 4], [49, 55]]]], ["block", "if", [["get", "mailru", ["loc", [null, [50, 10], [50, 16]]]]], [], 7, null, ["loc", [null, [50, 4], [50, 64]]]], ["block", "if", [["get", "yandex", ["loc", [null, [51, 10], [51, 16]]]]], [], 8, null, ["loc", [null, [51, 4], [51, 63]]]], ["block", "if", [["get", "gosuslugi", ["loc", [null, [52, 10], [52, 19]]]]], [], 9, null, ["loc", [null, [52, 4], [52, 69]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9]
      };
    })();
    var child6 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 60,
                "column": 2
              },
              "end": {
                "line": 66,
                "column": 2
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
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "ui login-button button");
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element1, 'title');
            morphs[1] = dom.createElementMorph(element1);
            morphs[2] = dom.createMorphAt(element1, 1, 1);
            return morphs;
          },
          statements: [["attribute", "title", ["subexpr", "t", ["components.register.login-button-title"], [], ["loc", [null, [62, 10], [62, 56]]]]], ["element", "action", ["login"], [], ["loc", [null, [63, 4], [63, 22]]]], ["inline", "t", ["components.register.login-button-text"], [], ["loc", [null, [64, 4], [64, 49]]]]],
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
                "line": 67,
                "column": 2
              },
              "end": {
                "line": 73,
                "column": 2
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
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "ui pwd-reset-button button");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element0, 'title');
            morphs[1] = dom.createElementMorph(element0);
            morphs[2] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "title", ["subexpr", "t", ["components.register.pwd-reset-button-title"], [], ["loc", [null, [69, 10], [69, 60]]]]], ["element", "action", ["pwdReset"], [], ["loc", [null, [70, 4], [70, 25]]]], ["inline", "t", ["components.register.pwd-reset-button-text"], [], ["loc", [null, [71, 6], [71, 55]]]]],
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
              "line": 57,
              "column": 0
            },
            "end": {
              "line": 75,
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
          dom.setAttribute(el1, "class", "login-reset-div");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [0]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element2, 1, 1);
          morphs[1] = dom.createMorphAt(element2, 4, 4);
          morphs[2] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["inline", "t", ["components.register.login-reset-label"], [], ["loc", [null, [59, 2], [59, 47]]]], ["block", "if", [["get", "showLoginButton", ["loc", [null, [60, 8], [60, 23]]]]], [], 0, null, ["loc", [null, [60, 2], [66, 9]]]], ["block", "if", [["get", "showPwdResetButton", ["loc", [null, [67, 8], [67, 26]]]]], [], 1, null, ["loc", [null, [67, 2], [73, 9]]]]],
        locals: [],
        templates: [child0, child1]
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
            "line": 76,
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
        dom.setAttribute(el1, "class", "captcha-div");
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
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
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "full-name-div");
        var el2 = dom.createTextNode("\n ");
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
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [2]);
        var element6 = dom.childAt(fragment, [4]);
        var element7 = dom.childAt(fragment, [6, 1]);
        var morphs = new Array(13);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(element5, 1, 1);
        morphs[2] = dom.createMorphAt(element5, 4, 4);
        morphs[3] = dom.createUnsafeMorphAt(element5, 6, 6);
        morphs[4] = dom.createMorphAt(element6, 1, 1);
        morphs[5] = dom.createMorphAt(element6, 4, 4);
        morphs[6] = dom.createMorphAt(element6, 6, 6);
        morphs[7] = dom.createAttrMorph(element7, 'title');
        morphs[8] = dom.createAttrMorph(element7, 'disabled');
        morphs[9] = dom.createElementMorph(element7);
        morphs[10] = dom.createMorphAt(element7, 1, 1);
        morphs[11] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        morphs[12] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "flexberry-recaptcha", [], ["onSuccess", ["subexpr", "action", ["captchaSuccess"], [], ["loc", [null, [3, 15], [3, 40]]]]], ["loc", [null, [2, 3], [4, 5]]]], ["inline", "t", ["components.register.username-label"], [], ["loc", [null, [8, 0], [8, 42]]]], ["block", "if", [["get", "captchaPassed", ["loc", [null, [9, 6], [9, 19]]]]], [], 0, 1, ["loc", [null, [9, 0], [13, 7]]]], ["content", "usernameFlag", ["loc", [null, [15, 0], [15, 18]]]], ["inline", "t", ["components.register.full-name-label"], [], ["loc", [null, [19, 1], [19, 44]]]], ["block", "if", [["get", "captchaPassed", ["loc", [null, [20, 7], [20, 20]]]]], [], 2, 3, ["loc", [null, [20, 1], [24, 7]]]], ["block", "if", [["get", "validFullname", ["loc", [null, [26, 6], [26, 19]]]]], [], 4, null, ["loc", [null, [26, 0], [28, 7]]]], ["attribute", "title", ["subexpr", "t", ["components.register.register-button-title"], [], ["loc", [null, [33, 10], [33, 59]]]]], ["attribute", "disabled", ["get", "allowRegistration", ["loc", [null, [34, 15], [34, 32]]]]], ["element", "action", ["register"], [], ["loc", [null, [35, 4], [35, 25]]]], ["inline", "t", ["components.register.register-button-text"], [], ["loc", [null, [36, 6], [36, 54]]]], ["block", "if", [["get", "useSocialBlock", ["loc", [null, [39, 6], [39, 20]]]]], [], 5, null, ["loc", [null, [39, 0], [55, 7]]]], ["block", "if", [["get", "showNavBlock", ["loc", [null, [57, 6], [57, 18]]]]], [], 6, null, ["loc", [null, [57, 0], [75, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6]
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
define("dummy/templates/email-confirmation", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 10,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/email-confirmation.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui error message");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "close icon");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "header");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
          morphs[1] = dom.createMorphAt(element1, 5, 5);
          return morphs;
        },
        statements: [["inline", "t", ["forms.email-confirmation.error-header"], [], ["loc", [null, [6, 8], [6, 53]]]], ["inline", "t", ["forms.email-confirmation.error-text"], [], ["loc", [null, [8, 6], [8, 49]]]]],
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
              "line": 12,
              "column": 2
            },
            "end": {
              "line": 16,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/email-confirmation.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui active dimmer");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui loader");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
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
              "line": 18,
              "column": 2
            },
            "end": {
              "line": 20,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/email-confirmation.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'onclick');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "onclick", ["subexpr", "action", ["verify"], [], ["loc", [null, [19, 20], [19, 39]]]]], ["inline", "t", ["forms.email-confirmation.confirm"], [], ["loc", [null, [19, 40], [19, 80]]]]],
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
              "line": 20,
              "column": 2
            },
            "end": {
              "line": 22,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/email-confirmation.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "disabled", "");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "t", ["forms.email-confirmation.confirm"], [], ["loc", [null, [21, 21], [21, 61]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/email-confirmation.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "email-confirmation-div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element2, 1, 1);
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createMorphAt(element2, 5, 5);
        return morphs;
      },
      statements: [["block", "if", [["get", "activationError", ["loc", [null, [2, 8], [2, 23]]]]], [], 0, null, ["loc", [null, [2, 2], [10, 9]]]], ["block", "if", [["get", "loaderEnabled", ["loc", [null, [12, 8], [12, 21]]]]], [], 1, null, ["loc", [null, [12, 2], [16, 9]]]], ["block", "if", [["get", "buttonEnabled", ["loc", [null, [18, 8], [18, 21]]]]], [], 2, 3, ["loc", [null, [18, 2], [22, 9]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
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
define("dummy/templates/reg-end", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/reg-end.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "reg-end-div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["forms.reg-end.caption"], [], ["loc", [null, [2, 0], [2, 29]]]]],
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
  require("dummy/app")["default"].create({"backendUrl":"https://ember-flexberry-account.azurewebsites.net","backendUrls":{"root":"https://ember-flexberry-account.azurewebsites.net","api":"https://ember-flexberry-account.azurewebsites.net/odata"},"userAccount":{"enabled":true,"vk":false,"facebook":false,"twitter":false,"google":false,"microsoft":false,"github":true,"ok":false,"mailru":false,"yandex":false,"gosuslugi":false},"name":"ember-flexberry-account","version":"0.1.0-alpha.4+3fa5bfda"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
