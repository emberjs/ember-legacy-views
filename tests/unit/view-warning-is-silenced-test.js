import { module, test } from 'qunit';

import Ember from 'ember';

module('Ember.View');

test('doest not issue deprecation on create', function(assert){
  assert.expect(1);

  try {
    Ember.View.create();
  } catch(e) {
    assert.ok(false, `An error was thrown unexpectedly: ${e.message}`);
  }

  assert.ok(true, 'No deprecation is thrown');
});
