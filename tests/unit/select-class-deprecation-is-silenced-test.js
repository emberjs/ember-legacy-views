import { module, test } from 'qunit';

import Ember from 'ember';

module('Ember.Select');

test('does not issue deprecation on create', function(assert){
  assert.expect(1);

  try {
    Ember.Select.create();
  } catch(e) {
    assert.ok(false, `An error was thrown unexpectedly: ${e.message}`);
  }

  assert.ok(true, 'No deprecation is thrown');
});

test('does not issue deprecation on reopen', function(assert){
  assert.expect(1);

  try {
    Ember.Select.reopen();
  } catch(e) {
    assert.ok(false, `An error was thrown unexpectedly: ${e.message}`);
  }

  assert.ok(true, 'No deprecation is thrown');
});

test('does not issue deprecation on extend', function(assert){
  assert.expect(1);

  try {
    Ember.Select.extend();
  } catch(e) {
    assert.ok(false, `An error was thrown unexpectedly: ${e.message}`);
  }

  assert.ok(true, 'No deprecation is thrown');
});
