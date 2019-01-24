'use strict';

module.exports = {
  name: 'ember-cli-build-date',

  config: function (env, baseConfig) {
    if (baseConfig.APP) {
      baseConfig.APP.buildDate = new Date();
    }

    return this._super.config.apply(this, arguments);
  }
};