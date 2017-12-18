/* globals module */
module.exports = {
  afterInstall: function() {
    var _this = this;
    return _this.insertIntoFile(
            'app/index.html',
            '\n    <script src="//cdn.polyfill.io/v1/polyfill.js?features=es6"></script>',
            {
              after: '{{content-for "head"}}\n'
            }
          );
  },

  normalizeEntityName: function() {}
};
