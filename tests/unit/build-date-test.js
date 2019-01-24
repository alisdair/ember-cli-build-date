import config from 'dummy/config/environment';
import { module, test } from 'qunit';

module('build date');

test('build date is available in config', function(assert){
  assert.expect(2);

  let date = config.APP.buildDate;
  assert.equal(typeof date, 'string', `date is a string: ${date}`);

  let parsed = Date.parse(date);
  assert.equal(typeof parsed, 'number', `is a valid date: ${new Date(parsed)}`);
});
