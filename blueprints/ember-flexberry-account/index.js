/* globals module */
module.exports = {
  afterInstall: function() {
    var _this = this;

    var env1 = '  var ENV = {'+
    '\n    recaptcha: {' +
    '\n      //These values are for automated tests.'+
    '\n      //Values are taken from https://developers.google.com/recaptcha/docs/faq'+
    '\n      //TODO: change them. These are not for production. Remember to change sekret key in backend!'+
    '\n      siteKey: \'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI\''+
  '    },';

    return _this.insertIntoFile(
            'app/index.html',
            '\n    <script src="//cdn.polyfill.io/v1/polyfill.js?features=es6"></script> \n <script src="https://www.google.com/recaptcha/api.js"></script>',
            {
              after: '{{content-for "head"}}\n'
            }
          ).then(function() {
            return _this.insertIntoFile(
              'config/environment.js',
              '\n //Read more about CSP:' +
                '// http://www.ember-cli.com/#content-security-policy' +
                '// https://github.com/rwjblue/ember-cli-content-security-policy' +
                '// http://content-security-policy.com' +
                'ENV.contentSecurityPolicy = {' +
                  '\'style-src\': "\'self\' \'unsafe-inline\' https://fonts.googleapis.com",' +
                  '\'font-src\': "\'self\' data: https://fonts.gstatic.com",' +
                  '\'script-src\': "\'self\' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/",' +
                  '\'frame-src\': "\'self\' https://www.google.com/recaptcha/",' +
                  '\'connect-src\': "\'self\' " + ENV.APP.backendUrls.root' +
                '};\n\n'
            ).then(function() {
              return _this.insertIntoFile(
                'config/environment.js',
                env1
            })
          });
  },

  normalizeEntityName: function() {}
};
