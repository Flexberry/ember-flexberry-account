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
    assert.ok(false, 'modules/ember-flexberry-account/services/user-account.js should pass jshint.\nmodules/ember-flexberry-account/services/user-account.js: line 63, col 19, \'password\' is defined but never used.\nmodules/ember-flexberry-account/services/user-account.js: line 63, col 9, \'username\' is defined but never used.\n\n2 errors');
  });
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
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
                "line": 17,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 46
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
          statements: [["inline", "input", [], ["type", "button", "value", "VK"], ["loc", [null, [17, 12], [17, 46]]]]],
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
                "line": 18,
                "column": 2
              },
              "end": {
                "line": 18,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Facebook"], ["loc", [null, [18, 18], [18, 58]]]]],
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
                "line": 19,
                "column": 2
              },
              "end": {
                "line": 19,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Twitter"], ["loc", [null, [19, 17], [19, 56]]]]],
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
                "line": 20,
                "column": 54
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
          statements: [["inline", "input", [], ["type", "button", "value", "Google"], ["loc", [null, [20, 16], [20, 54]]]]],
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
                "line": 21,
                "column": 2
              },
              "end": {
                "line": 21,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Microsoft"], ["loc", [null, [21, 19], [21, 60]]]]],
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
                "line": 22,
                "column": 2
              },
              "end": {
                "line": 22,
                "column": 54
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
          statements: [["inline", "input", [], ["type", "button", "value", "GitHub"], ["loc", [null, [22, 16], [22, 54]]]]],
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
                "line": 23,
                "column": 2
              },
              "end": {
                "line": 23,
                "column": 46
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
          statements: [["inline", "input", [], ["type", "button", "value", "OK"], ["loc", [null, [23, 12], [23, 46]]]]],
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
                "line": 24,
                "column": 2
              },
              "end": {
                "line": 24,
                "column": 55
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
          statements: [["inline", "input", [], ["type", "button", "value", "Mail.ru"], ["loc", [null, [24, 16], [24, 55]]]]],
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
                "line": 25,
                "column": 2
              },
              "end": {
                "line": 25,
                "column": 54
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
          statements: [["inline", "input", [], ["type", "button", "value", "Yandex"], ["loc", [null, [25, 16], [25, 54]]]]],
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
                "line": 26,
                "column": 2
              },
              "end": {
                "line": 26,
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
          statements: [["inline", "input", [], ["type", "button", "value", "Gosuslugi"], ["loc", [null, [26, 19], [26, 60]]]]],
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
              "line": 14,
              "column": 0
            },
            "end": {
              "line": 28,
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
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("\n  Login with:");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
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
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(10);
          morphs[0] = dom.createMorphAt(element0, 3, 3);
          morphs[1] = dom.createMorphAt(element0, 5, 5);
          morphs[2] = dom.createMorphAt(element0, 7, 7);
          morphs[3] = dom.createMorphAt(element0, 9, 9);
          morphs[4] = dom.createMorphAt(element0, 11, 11);
          morphs[5] = dom.createMorphAt(element0, 13, 13);
          morphs[6] = dom.createMorphAt(element0, 15, 15);
          morphs[7] = dom.createMorphAt(element0, 17, 17);
          morphs[8] = dom.createMorphAt(element0, 19, 19);
          morphs[9] = dom.createMorphAt(element0, 21, 21);
          return morphs;
        },
        statements: [["block", "if", [["get", "vk", ["loc", [null, [17, 8], [17, 10]]]]], [], 0, null, ["loc", [null, [17, 2], [17, 53]]]], ["block", "if", [["get", "facebook", ["loc", [null, [18, 8], [18, 16]]]]], [], 1, null, ["loc", [null, [18, 2], [18, 65]]]], ["block", "if", [["get", "twitter", ["loc", [null, [19, 8], [19, 15]]]]], [], 2, null, ["loc", [null, [19, 2], [19, 63]]]], ["block", "if", [["get", "google", ["loc", [null, [20, 8], [20, 14]]]]], [], 3, null, ["loc", [null, [20, 2], [20, 61]]]], ["block", "if", [["get", "microsoft", ["loc", [null, [21, 8], [21, 17]]]]], [], 4, null, ["loc", [null, [21, 2], [21, 67]]]], ["block", "if", [["get", "github", ["loc", [null, [22, 8], [22, 14]]]]], [], 5, null, ["loc", [null, [22, 2], [22, 61]]]], ["block", "if", [["get", "ok", ["loc", [null, [23, 8], [23, 10]]]]], [], 6, null, ["loc", [null, [23, 2], [23, 53]]]], ["block", "if", [["get", "mailru", ["loc", [null, [24, 8], [24, 14]]]]], [], 7, null, ["loc", [null, [24, 2], [24, 62]]]], ["block", "if", [["get", "yandex", ["loc", [null, [25, 8], [25, 14]]]]], [], 8, null, ["loc", [null, [25, 2], [25, 61]]]], ["block", "if", [["get", "gosuslugi", ["loc", [null, [26, 8], [26, 17]]]]], [], 9, null, ["loc", [null, [26, 2], [26, 67]]]]],
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
            "line": 32,
            "column": 4
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
        var el2 = dom.createTextNode("Login form");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\nLogin (E-mail):");
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
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\nPassword: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
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
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\nRemember: ");
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [6]);
        var element2 = dom.childAt(fragment, [9]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]), 3, 3);
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        morphs[3] = dom.createMorphAt(element1, 3, 3);
        morphs[4] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        morphs[5] = dom.createMorphAt(element2, 1, 1);
        morphs[6] = dom.createMorphAt(element2, 3, 3);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "login", ["loc", [null, [4, 27], [4, 32]]]]], [], []]], ["loc", [null, [4, 1], [4, 34]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [8, 26], [8, 34]]]]], [], []]], ["loc", [null, [8, 0], [8, 36]]]], ["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "remember", ["loc", [null, [11, 42], [11, 50]]]]], [], []]], ["loc", [null, [11, 10], [11, 52]]]], ["inline", "input", [], ["type", "button", "value", "Log in"], ["loc", [null, [12, 0], [12, 38]]]], ["block", "if", [["get", "useSocialBlock", ["loc", [null, [14, 6], [14, 20]]]]], [], 0, null, ["loc", [null, [14, 0], [28, 7]]]], ["inline", "input", [], ["type", "button", "value", "Register"], ["loc", [null, [30, 2], [30, 42]]]], ["inline", "input", [], ["type", "button", "value", "Reset password"], ["loc", [null, [31, 2], [31, 48]]]]],
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
            "column": 19
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
        var el1 = dom.createTextNode("Password reset form");
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
            "line": 38,
            "column": 4
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
        var el2 = dom.createTextNode("Register user form");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\nLogin (E-mail):");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\nName:");
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
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Surname:");
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
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  [Captcha]");
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
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  Register with:");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
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
        var el2 = dom.createElement("br");
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
        var el1 = dom.createTextNode("\nAlready registered?\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [12]);
        var element1 = dom.childAt(fragment, [14]);
        var morphs = new Array(17);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [6]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [8]), 3, 3);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [10]), 1, 1);
        morphs[5] = dom.createMorphAt(element0, 3, 3);
        morphs[6] = dom.createMorphAt(element0, 5, 5);
        morphs[7] = dom.createMorphAt(element0, 7, 7);
        morphs[8] = dom.createMorphAt(element0, 9, 9);
        morphs[9] = dom.createMorphAt(element0, 11, 11);
        morphs[10] = dom.createMorphAt(element0, 15, 15);
        morphs[11] = dom.createMorphAt(element0, 17, 17);
        morphs[12] = dom.createMorphAt(element0, 19, 19);
        morphs[13] = dom.createMorphAt(element0, 21, 21);
        morphs[14] = dom.createMorphAt(element0, 23, 23);
        morphs[15] = dom.createMorphAt(element1, 1, 1);
        morphs[16] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", "email", "value", ["subexpr", "@mut", [["get", "login", ["loc", [null, [4, 28], [4, 33]]]]], [], []]], ["loc", [null, [4, 1], [4, 35]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "name", ["loc", [null, [8, 27], [8, 31]]]]], [], []]], ["loc", [null, [8, 1], [8, 33]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "surname", ["loc", [null, [11, 27], [11, 34]]]]], [], []]], ["loc", [null, [11, 1], [11, 36]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "captchaValue", ["loc", [null, [15, 27], [15, 39]]]]], [], []]], ["loc", [null, [15, 1], [15, 41]]]], ["inline", "input", [], ["type", "button", "value", "Register"], ["loc", [null, [18, 2], [18, 42]]]], ["inline", "input", [], ["type", "button", "value", "VK"], ["loc", [null, [22, 2], [22, 36]]]], ["inline", "input", [], ["type", "button", "value", "Facebook"], ["loc", [null, [23, 2], [23, 42]]]], ["inline", "input", [], ["type", "button", "value", "Twitter"], ["loc", [null, [24, 2], [24, 41]]]], ["inline", "input", [], ["type", "button", "value", "Google"], ["loc", [null, [25, 2], [25, 40]]]], ["inline", "input", [], ["type", "button", "value", "Microsoft"], ["loc", [null, [26, 2], [26, 43]]]], ["inline", "input", [], ["type", "button", "value", "GitHub"], ["loc", [null, [28, 2], [28, 40]]]], ["inline", "input", [], ["type", "button", "value", "OK"], ["loc", [null, [29, 2], [29, 36]]]], ["inline", "input", [], ["type", "button", "value", "Mail.ru"], ["loc", [null, [30, 2], [30, 41]]]], ["inline", "input", [], ["type", "button", "value", "Yandex"], ["loc", [null, [31, 2], [31, 40]]]], ["inline", "input", [], ["type", "button", "value", "Gosuslugi"], ["loc", [null, [32, 2], [32, 43]]]], ["inline", "input", [], ["type", "button", "value", "Login"], ["loc", [null, [36, 2], [36, 39]]]], ["inline", "input", [], ["type", "button", "value", "Reset password"], ["loc", [null, [37, 2], [37, 48]]]]],
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
  require("dummy/app")["default"].create({"backendUrl":"https://ember-flexberry-account.azurewebsites.net","backendUrls":{"root":"https://ember-flexberry-account.azurewebsites.net","api":"https://ember-flexberry-account.azurewebsites.net/odata"},"userAccount":{"enabled":true,"vk":false,"facebook":false,"twitter":false,"google":false,"microsoft":false,"github":true,"ok":false,"mailru":false,"yandex":false,"gosuslugi":false},"name":"ember-flexberry-account","version":"0.0.1-alpha.0+1bb3c589"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
