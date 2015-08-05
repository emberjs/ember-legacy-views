[![Build Status](https://travis-ci.org/emberjs/ember-legacy-views.svg)](https://travis-ci.org/emberjs/ember-legacy-views)

## ember-legacy-views

Ember.js 1.13 deprecated the `Ember.View` API and its associated helpers.
Please see the [deprecation guide](http://emberjs.com/deprecations/v1.x/#toc_ember-view)
for information about how to migrate away from views in Ember.js.

This addon enables legacy view support without deprecation notices in Ember.js 1.13.
In Ember.js 2.0 views are not present at all, and this addon brings them back.
**After Ember 2.4 is released this addon will no longer be compatible with
Ember**. It should be used to provide extra time for migrating away from views,
not as a permanent solution.

To remove the compile-time deprecation warnings that may appear in the terminal
output of `ember serve`, make sure your Ember-CLI app is using `ember-cli-htmlbars`
version `0.7.9` or later (this will be the default for Ember-CLI version 1.13.0 and later).

### App Installation

```
ember install ember-legacy-views
```

### Contributing to this Addon

* `git clone` this repository
* `npm install`
* `bower install`

### Running Tests

* `ember test`
* `ember test --server`

### Building and Release

* `npm version TYPE` where TYPE is `major`, `minor` or `patch`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
