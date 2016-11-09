
'use strict';

var moment = require('moment');

module.exports = {
  name: 'ember-cli-build-date',

  // forcing to Toronto (EST) timezone
  defaultTimeZoneOffset: '-0400',

  defaultFormat: 'MM/DD/YYYY h:mm:ss a',

  config: function(env, baseConfig) {

    // console.log('baseConfig', baseConfig);

    // if (baseConfig.APP) {
    //   if (baseConfig.timeZoneOffset) {
    //     let offsetValue = baseConfig.timeZoneOffset || defaultTimeZoneOffset;
    //     baseConfig.APP.buildTimeStamp = moment().utcOffset(offsetValue).format('MM/DD/YYYY h:mm:ss a');
    //   } else {
    //     //
    //     baseConfig.APP.buildTimeStamp = moment().format('MM/DD/YYYY h:mm:ss a');
    //   }
    // }

    baseConfig.APP.buildTimeStamp = moment().format('MM/DD/YYYY h:mm:ss a');

    return this._super.config.apply(this, arguments);
  }
};
