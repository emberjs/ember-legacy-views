import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

import Ember from 'ember';

let component;

module('{{view "select"}}', {
  teardown() {
    if (component) {
      Ember.run(function() {
        component.destroy();
      });
    }
  }
});

test('does not issue deprecation when appended', function(assert){
  assert.expect(1);

  let registry = new Ember.Registry();
  registry.register('view:select', Ember.Select);
  registry.register('component:some-component', Ember.Component.extend({
    layout: hbs`{{view 'select'}}`
  }));
  let container = registry.container();
  component = container.lookup('component:some-component');

  try {
    Ember.run(function() {
      component.appendTo('#qunit-fixture');
    });
    assert.ok(true, 'No deprecation is thrown');
  } catch(e) {
    assert.ok(false, `An error was thrown unexpectedly: ${e.message}`);
  }
});

test('does not issue deprecation when compiled', function(assert){
  assert.expect(1);

  try {
    Ember.HTMLBars.compile('{{view "select"}}');
    assert.ok(true, 'No deprecation is issued.');
  } catch(e) {
    assert.ok(false, `An error was thrown unexpectedly: ${e.message}`);
  }
});
