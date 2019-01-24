import Component from '@ember/component';
import config from '../config/environment';

export default Component.extend({
  buildDate: config.APP.buildDate,
  version: config.APP.version
});
