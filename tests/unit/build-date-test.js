import Ember from "ember";
import { module, test } from 'qunit';
import startApp from './index';
var App;

console.log('startApp', JSON.stringify(startApp, null, 2));

// module('An Integration test', {
//   beforeEach: function() {
//     App = startApp();
//   },
//   afterEach: function() {
//     Ember.run(App, App.destroy);
//   }
// });
//
// test("Page contents", function(assert) {
//
//   assert.ok(true);
//
// });
