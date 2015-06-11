import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

import Ember from 'ember';

let component;

module('{{view "some-view"}}', {
  teardown() {
    if (component) {
      Ember.run(function() {
        component.destroy();
      });
    }
  }
});

test('doest not issue deprecation on invocation', function(assert){
  assert.expect(1);

  let registry = new Ember.Registry();
  registry.register('view:some-view', Ember.View.extend());
  registry.register('component:some-component', Ember.Component.extend({
    layout: hbs`{{view 'some-view'}}`
  }));
  let container = registry.container();
  component = container.lookup('component:some-component');

  try {
    Ember.run(function() {
      component.appendTo('#qunit-fixture');
    });
  } catch(e) {
    assert.ok(false, `An error was thrown unexpectedly: ${e.message}`);
  }

  assert.ok(true, 'No deprecation is thrown');
});
