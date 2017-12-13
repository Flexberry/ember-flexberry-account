/* jshint node: true */

module.exports = function(environment) {
  var backendUrl = 'https://ember-flexberry-account.azurewebsites.net';

  if (environment === 'development-loc') {
    // Use `ember s -e development-loc` command for local backend usage.
    backendUrl = 'http://localhost:8700';
  }

  var ENV = {
    repositoryName: 'ember-flexberry-account/dummy',
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    recaptcha: {
      //These values are for automated tests.
      //Values are taken from https://developers.google.com/recaptcha/docs/faq
      siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      secretKey: '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      backendUrl: backendUrl,

      // It's a custom property, used to prevent duplicate backend urls in sources.
      backendUrls: {
        root: backendUrl,
        api: backendUrl + '/odata'
      },

      userAccount: {
        enabled: true,
        vk: false,
        facebook: false,
        twitter: false,
        google: false,
        microsoft: false,
        github: true,
        ok: false,
        mailru: false,
        yandex: false,
        gosuslugi: false
      }
    }
  };

  // Read more about CSP:
  // http://www.ember-cli.com/#content-security-policy
  // https://github.com/rwjblue/ember-cli-content-security-policy
  // http://content-security-policy.com
  ENV.contentSecurityPolicy = {
    'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
    'font-src': "'self' data: https://fonts.gstatic.com",
    'script-src': "'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/",
    'frame-src': "'self' https://www.google.com/recaptcha/",
    'connect-src': "'self' " + ENV.APP.backendUrls.root
  };

  // Read more about ember-i18n: https://github.com/jamesarosen/ember-i18n.
  ENV.i18n = {
    // Should be defined to avoid ember-i18n deprecations.
    // Locale will be changed then to navigator current locale (in instance initializer).
    defaultLocale: 'ru'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  // Change paths to application assets if build has been started with the following parameters:
  // ember build --gh-pages --gh-pages-branch=<branch-to-publish-on-gh-pages>.
  if (process.argv.indexOf('--gh-pages') >= 0) {
    var branch;

    // Retrieve branch name from process arguments.
    process.argv.forEach(function (value) {
      if (value.indexOf('--gh-pages-branch=') >= 0) {
        branch = value.split('=')[1];
        return;
      }
    });

    // Change base URL to force paths to application assets be relative.
    ENV.baseURL = '/' + ENV.repositoryName + '/' + branch + '/';
    ENV.locationType = 'none';
  }

  return ENV;
};
