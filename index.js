
'use strict';

var moment = require('moment');

module.exports = {
  name: 'ember-cli-build-date',

  config: function(env, baseConfig) {
    if (baseConfig.APP) {
      baseConfig.APP.buildDate = moment().format('MM/DD/YYYY h:mm:ss a');
    }

    return this._super.config.apply(this, arguments);
  }
};

