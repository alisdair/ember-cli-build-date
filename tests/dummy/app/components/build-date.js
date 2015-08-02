import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  buildDate: config.APP.buildDate,
  version: config.APP.version
});
