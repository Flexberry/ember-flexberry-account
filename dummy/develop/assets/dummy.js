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
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _emberDataInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInstanceInitializersInitializeStoreService["default"]
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
define("dummy/templates/login", ["exports"], function (exports) {
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
            "moduleName": "dummy/templates/login.hbs"
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
            "moduleName": "dummy/templates/login.hbs"
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
            "moduleName": "dummy/templates/login.hbs"
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
            "moduleName": "dummy/templates/login.hbs"
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
            "moduleName": "dummy/templates/login.hbs"
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
            "moduleName": "dummy/templates/login.hbs"
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
            "moduleName": "dummy/templates/login.hbs"
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
            "moduleName": "dummy/templates/login.hbs"
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
            "moduleName": "dummy/templates/login.hbs"
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
            "moduleName": "dummy/templates/login.hbs"
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
          "moduleName": "dummy/templates/login.hbs"
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
        statements: [["inline", "t", ["forms.login.login-with-label"], [], ["loc", [null, [21, 2], [21, 38]]]], ["block", "if", [["get", "vk", ["loc", [null, [23, 10], [23, 12]]]]], [], 0, null, ["loc", [null, [23, 4], [23, 55]]]], ["block", "if", [["get", "facebook", ["loc", [null, [24, 10], [24, 18]]]]], [], 1, null, ["loc", [null, [24, 4], [24, 67]]]], ["block", "if", [["get", "twitter", ["loc", [null, [25, 10], [25, 17]]]]], [], 2, null, ["loc", [null, [25, 4], [25, 65]]]], ["block", "if", [["get", "google", ["loc", [null, [26, 10], [26, 16]]]]], [], 3, null, ["loc", [null, [26, 4], [26, 63]]]], ["block", "if", [["get", "microsoft", ["loc", [null, [27, 10], [27, 19]]]]], [], 4, null, ["loc", [null, [27, 4], [27, 69]]]], ["block", "if", [["get", "github", ["loc", [null, [28, 10], [28, 16]]]]], [], 5, null, ["loc", [null, [28, 4], [28, 63]]]], ["block", "if", [["get", "ok", ["loc", [null, [29, 10], [29, 12]]]]], [], 6, null, ["loc", [null, [29, 4], [29, 55]]]], ["block", "if", [["get", "mailru", ["loc", [null, [30, 10], [30, 16]]]]], [], 7, null, ["loc", [null, [30, 4], [30, 64]]]], ["block", "if", [["get", "yandex", ["loc", [null, [31, 10], [31, 16]]]]], [], 8, null, ["loc", [null, [31, 4], [31, 63]]]], ["block", "if", [["get", "gosuslugi", ["loc", [null, [32, 10], [32, 19]]]]], [], 9, null, ["loc", [null, [32, 4], [32, 69]]]]],
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
            "line": 47,
            "column": 6
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [2]);
        var element3 = dom.childAt(fragment, [4]);
        var element4 = dom.childAt(fragment, [6]);
        var element5 = dom.childAt(element4, [5]);
        var element6 = dom.childAt(fragment, [9]);
        var element7 = dom.childAt(element6, [1]);
        var element8 = dom.childAt(element6, [3]);
        var morphs = new Array(17);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(element2, 1, 1);
        morphs[2] = dom.createMorphAt(element2, 4, 4);
        morphs[3] = dom.createMorphAt(element3, 1, 1);
        morphs[4] = dom.createMorphAt(element3, 4, 4);
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
      statements: [["inline", "t", ["forms.login.caption"], [], ["loc", [null, [1, 4], [1, 31]]]], ["inline", "t", ["forms.login.username-label"], [], ["loc", [null, [3, 2], [3, 36]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "username", ["loc", [null, [4, 28], [4, 36]]]]], [], []]], ["loc", [null, [4, 2], [4, 38]]]], ["inline", "t", ["forms.login.password-label"], [], ["loc", [null, [7, 2], [7, 36]]]], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [8, 32], [8, 40]]]]], [], []]], ["loc", [null, [8, 2], [8, 42]]]], ["inline", "t", ["forms.login.remember-label"], [], ["loc", [null, [11, 2], [11, 36]]]], ["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "remember", ["loc", [null, [11, 69], [11, 77]]]]], [], []]], ["loc", [null, [11, 37], [11, 79]]]], ["attribute", "title", ["subexpr", "t", ["forms.login.login-button-title"], [], ["loc", [null, [14, 10], [14, 48]]]]], ["element", "action", ["login"], [], ["loc", [null, [15, 4], [15, 22]]]], ["inline", "t", ["forms.login.login-button-text"], [], ["loc", [null, [16, 6], [16, 43]]]], ["block", "if", [["get", "useSocialBlock", ["loc", [null, [19, 6], [19, 20]]]]], [], 0, null, ["loc", [null, [19, 0], [35, 7]]]], ["attribute", "title", ["subexpr", "t", ["forms.login.register-button-title"], [], ["loc", [null, [38, 10], [38, 51]]]]], ["element", "action", ["register"], [], ["loc", [null, [39, 4], [39, 25]]]], ["inline", "t", ["forms.login.register-button-text"], [], ["loc", [null, [40, 6], [40, 46]]]], ["attribute", "title", ["subexpr", "t", ["forms.login.pwd-reset-button-title"], [], ["loc", [null, [43, 8], [43, 50]]]]], ["element", "action", ["pwdReset"], [], ["loc", [null, [44, 2], [44, 23]]]], ["inline", "t", ["forms.login.pwd-reset-button-text"], [], ["loc", [null, [45, 4], [45, 45]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/pwd-reset", ["exports"], function (exports) {
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
            "column": 6
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(fragment, [4]);
        var element2 = dom.childAt(fragment, [6, 1]);
        var element3 = dom.childAt(fragment, [8]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var morphs = new Array(14);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        morphs[2] = dom.createMorphAt(element0, 4, 4);
        morphs[3] = dom.createMorphAt(element1, 1, 1);
        morphs[4] = dom.createMorphAt(element1, 4, 4);
        morphs[5] = dom.createAttrMorph(element2, 'title');
        morphs[6] = dom.createElementMorph(element2);
        morphs[7] = dom.createMorphAt(element2, 1, 1);
        morphs[8] = dom.createAttrMorph(element4, 'title');
        morphs[9] = dom.createElementMorph(element4);
        morphs[10] = dom.createMorphAt(element4, 1, 1);
        morphs[11] = dom.createAttrMorph(element5, 'title');
        morphs[12] = dom.createElementMorph(element5);
        morphs[13] = dom.createMorphAt(element5, 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["forms.pwd-reset.caption"], [], ["loc", [null, [1, 4], [1, 35]]]], ["inline", "t", ["forms.pwd-reset.username-label"], [], ["loc", [null, [3, 2], [3, 40]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "username", ["loc", [null, [4, 28], [4, 36]]]]], [], []]], ["loc", [null, [4, 2], [4, 38]]]], ["inline", "t", ["forms.pwd-reset.captcha-label"], [], ["loc", [null, [7, 3], [7, 40]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "captchaValue", ["loc", [null, [8, 27], [8, 39]]]]], [], []]], ["loc", [null, [8, 1], [8, 41]]]], ["attribute", "title", ["subexpr", "t", ["forms.pwd-reset.pwd-reset-button-title"], [], ["loc", [null, [13, 10], [13, 56]]]]], ["element", "action", ["pwdReset"], [], ["loc", [null, [14, 4], [14, 25]]]], ["inline", "t", ["forms.pwd-reset.pwd-reset-button-text"], [], ["loc", [null, [15, 6], [15, 51]]]], ["attribute", "title", ["subexpr", "t", ["forms.pwd-reset.login-button-title"], [], ["loc", [null, [20, 10], [20, 52]]]]], ["element", "action", ["login"], [], ["loc", [null, [21, 4], [21, 22]]]], ["inline", "t", ["forms.pwd-reset.login-button-text"], [], ["loc", [null, [22, 6], [22, 47]]]], ["attribute", "title", ["subexpr", "t", ["forms.pwd-reset.register-button-title"], [], ["loc", [null, [25, 10], [25, 55]]]]], ["element", "action", ["register"], [], ["loc", [null, [26, 4], [26, 25]]]], ["inline", "t", ["forms.pwd-reset.register-button-text"], [], ["loc", [null, [27, 6], [27, 50]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/register", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
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
                "line": 37,
                "column": 4
              },
              "end": {
                "line": 37,
                "column": 48
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
          statements: [["inline", "input", [], ["type", "button", "value", "VK"], ["loc", [null, [37, 14], [37, 48]]]]],
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
                "line": 38,
                "column": 4
              },
              "end": {
                "line": 38,
                "column": 60
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
          statements: [["inline", "input", [], ["type", "button", "value", "Facebook"], ["loc", [null, [38, 20], [38, 60]]]]],
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
                "line": 39,
                "column": 4
              },
              "end": {
                "line": 39,
                "column": 58
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
          statements: [["inline", "input", [], ["type", "button", "value", "Twitter"], ["loc", [null, [39, 19], [39, 58]]]]],
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
                "line": 40,
                "column": 4
              },
              "end": {
                "line": 40,
                "column": 56
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
          statements: [["inline", "input", [], ["type", "button", "value", "Google"], ["loc", [null, [40, 18], [40, 56]]]]],
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
                "line": 41,
                "column": 4
              },
              "end": {
                "line": 41,
                "column": 62
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
          statements: [["inline", "input", [], ["type", "button", "value", "Microsoft"], ["loc", [null, [41, 21], [41, 62]]]]],
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
                "line": 42,
                "column": 4
              },
              "end": {
                "line": 42,
                "column": 56
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
          statements: [["inline", "input", [], ["type", "button", "value", "GitHub"], ["loc", [null, [42, 18], [42, 56]]]]],
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
                "line": 43,
                "column": 4
              },
              "end": {
                "line": 43,
                "column": 48
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
          statements: [["inline", "input", [], ["type", "button", "value", "OK"], ["loc", [null, [43, 14], [43, 48]]]]],
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
                "line": 44,
                "column": 4
              },
              "end": {
                "line": 44,
                "column": 57
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
          statements: [["inline", "input", [], ["type", "button", "value", "Mail.ru"], ["loc", [null, [44, 18], [44, 57]]]]],
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
                "line": 45,
                "column": 4
              },
              "end": {
                "line": 45,
                "column": 56
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
          statements: [["inline", "input", [], ["type", "button", "value", "Yandex"], ["loc", [null, [45, 18], [45, 56]]]]],
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
                "line": 46,
                "column": 4
              },
              "end": {
                "line": 46,
                "column": 62
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
          statements: [["inline", "input", [], ["type", "button", "value", "Gosuslugi"], ["loc", [null, [46, 21], [46, 62]]]]],
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
              "line": 33,
              "column": 0
            },
            "end": {
              "line": 49,
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
        statements: [["inline", "t", ["forms.register.register-with-label"], [], ["loc", [null, [35, 2], [35, 44]]]], ["block", "if", [["get", "vk", ["loc", [null, [37, 10], [37, 12]]]]], [], 0, null, ["loc", [null, [37, 4], [37, 55]]]], ["block", "if", [["get", "facebook", ["loc", [null, [38, 10], [38, 18]]]]], [], 1, null, ["loc", [null, [38, 4], [38, 67]]]], ["block", "if", [["get", "twitter", ["loc", [null, [39, 10], [39, 17]]]]], [], 2, null, ["loc", [null, [39, 4], [39, 65]]]], ["block", "if", [["get", "google", ["loc", [null, [40, 10], [40, 16]]]]], [], 3, null, ["loc", [null, [40, 4], [40, 63]]]], ["block", "if", [["get", "microsoft", ["loc", [null, [41, 10], [41, 19]]]]], [], 4, null, ["loc", [null, [41, 4], [41, 69]]]], ["block", "if", [["get", "github", ["loc", [null, [42, 10], [42, 16]]]]], [], 5, null, ["loc", [null, [42, 4], [42, 63]]]], ["block", "if", [["get", "ok", ["loc", [null, [43, 10], [43, 12]]]]], [], 6, null, ["loc", [null, [43, 4], [43, 55]]]], ["block", "if", [["get", "mailru", ["loc", [null, [44, 10], [44, 16]]]]], [], 7, null, ["loc", [null, [44, 4], [44, 64]]]], ["block", "if", [["get", "yandex", ["loc", [null, [45, 10], [45, 16]]]]], [], 8, null, ["loc", [null, [45, 4], [45, 63]]]], ["block", "if", [["get", "gosuslugi", ["loc", [null, [46, 10], [46, 19]]]]], [], 9, null, ["loc", [null, [46, 4], [46, 69]]]]],
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
            "column": 6
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [2]);
        var element3 = dom.childAt(fragment, [4]);
        var element4 = dom.childAt(fragment, [6]);
        var element5 = dom.childAt(fragment, [8]);
        var element6 = dom.childAt(fragment, [10]);
        var element7 = dom.childAt(fragment, [12, 1]);
        var element8 = dom.childAt(fragment, [15]);
        var element9 = dom.childAt(element8, [4]);
        var element10 = dom.childAt(element8, [6]);
        var morphs = new Array(23);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(element2, 1, 1);
        morphs[2] = dom.createMorphAt(element2, 4, 4);
        morphs[3] = dom.createMorphAt(element2, 6, 6);
        morphs[4] = dom.createMorphAt(element3, 1, 1);
        morphs[5] = dom.createMorphAt(element3, 4, 4);
        morphs[6] = dom.createMorphAt(element4, 1, 1);
        morphs[7] = dom.createMorphAt(element4, 4, 4);
        morphs[8] = dom.createMorphAt(element5, 1, 1);
        morphs[9] = dom.createMorphAt(element5, 4, 4);
        morphs[10] = dom.createMorphAt(element6, 1, 1);
        morphs[11] = dom.createMorphAt(element6, 4, 4);
        morphs[12] = dom.createAttrMorph(element7, 'title');
        morphs[13] = dom.createElementMorph(element7);
        morphs[14] = dom.createMorphAt(element7, 1, 1);
        morphs[15] = dom.createMorphAt(fragment, 14, 14, contextualElement);
        morphs[16] = dom.createMorphAt(element8, 1, 1);
        morphs[17] = dom.createAttrMorph(element9, 'title');
        morphs[18] = dom.createElementMorph(element9);
        morphs[19] = dom.createMorphAt(element9, 1, 1);
        morphs[20] = dom.createAttrMorph(element10, 'title');
        morphs[21] = dom.createElementMorph(element10);
        morphs[22] = dom.createMorphAt(element10, 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["forms.register.caption"], [], ["loc", [null, [1, 4], [1, 34]]]], ["inline", "t", ["forms.register.username-label"], [], ["loc", [null, [3, 0], [3, 37]]]], ["inline", "input", [], ["type", "email", "value", ["subexpr", "@mut", [["get", "username", ["loc", [null, [4, 27], [4, 35]]]]], [], []]], ["loc", [null, [4, 0], [4, 37]]]], ["block", "if", [["get", "validUsername", ["loc", [null, [5, 6], [5, 19]]]]], [], 0, null, ["loc", [null, [5, 0], [7, 7]]]], ["inline", "t", ["forms.register.surname-label"], [], ["loc", [null, [10, 1], [10, 37]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "surname", ["loc", [null, [11, 27], [11, 34]]]]], [], []]], ["loc", [null, [11, 1], [11, 36]]]], ["inline", "t", ["forms.register.name-label"], [], ["loc", [null, [14, 0], [14, 33]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "name", ["loc", [null, [15, 27], [15, 31]]]]], [], []]], ["loc", [null, [15, 1], [15, 33]]]], ["inline", "t", ["forms.register.middlename-label"], [], ["loc", [null, [18, 0], [18, 39]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "middlename", ["loc", [null, [19, 27], [19, 37]]]]], [], []]], ["loc", [null, [19, 1], [19, 39]]]], ["inline", "t", ["forms.register.captcha-label"], [], ["loc", [null, [22, 3], [22, 39]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "captchaValue", ["loc", [null, [23, 27], [23, 39]]]]], [], []]], ["loc", [null, [23, 1], [23, 41]]]], ["attribute", "title", ["subexpr", "t", ["forms.register.register-button-title"], [], ["loc", [null, [28, 10], [28, 54]]]]], ["element", "action", ["register"], [], ["loc", [null, [29, 4], [29, 25]]]], ["inline", "t", ["forms.register.register-button-text"], [], ["loc", [null, [30, 6], [30, 49]]]], ["block", "if", [["get", "useSocialBlock", ["loc", [null, [33, 6], [33, 20]]]]], [], 1, null, ["loc", [null, [33, 0], [49, 7]]]], ["inline", "t", ["forms.register.login-reset-label"], [], ["loc", [null, [51, 2], [51, 42]]]], ["attribute", "title", ["subexpr", "t", ["forms.register.login-button-title"], [], ["loc", [null, [53, 10], [53, 51]]]]], ["element", "action", ["login"], [], ["loc", [null, [54, 4], [54, 22]]]], ["inline", "t", ["forms.register.login-button-text"], [], ["loc", [null, [55, 6], [55, 46]]]], ["attribute", "title", ["subexpr", "t", ["forms.register.pwd-reset-button-title"], [], ["loc", [null, [58, 10], [58, 55]]]]], ["element", "action", ["pwdReset"], [], ["loc", [null, [59, 4], [59, 25]]]], ["inline", "t", ["forms.register.pwd-reset-button-text"], [], ["loc", [null, [60, 6], [60, 50]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/user-profile", ["exports"], function (exports) {
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
            "line": 1,
            "column": 22
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
        var el1 = dom.createTextNode("User profile edit form");
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
  require("dummy/app")["default"].create({"backendUrl":"https://ember-flexberry-account.azurewebsites.net","backendUrls":{"root":"https://ember-flexberry-account.azurewebsites.net","api":"https://ember-flexberry-account.azurewebsites.net/odata"},"userAccount":{"enabled":true,"vk":false,"facebook":false,"twitter":false,"google":false,"microsoft":false,"github":true,"ok":false,"mailru":false,"yandex":false,"gosuslugi":false},"name":"ember-flexberry-account","version":"0.0.1-alpha.0+d83c487b"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
