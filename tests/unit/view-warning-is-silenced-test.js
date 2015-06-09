import { module, test } from 'qunit';

import Ember from 'ember';

module('Ember.View');

test('doest not issue deprecation on create', function(assert){
  assert.expect(1);
  Ember.View.create();
  assert.ok(true, 'No deprecation is thrown');
});
