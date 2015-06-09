import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';

import Ember from 'ember';

Ember.ENV.RAISE_ON_DEPRECATION = true;

setResolver(resolver);
