# ember-cli-build-date

[![Build Status](https://travis-ci.org/alisdair/ember-cli-build-date.svg)](https://travis-ci.org/alisdair/ember-cli-build-date)

Adds the build date for your app to the environment, and allows you to use it in the app code. Useful for letting your users see when your app was last updated.

## Installation

Requires ember-cli 0.2.7 and ember 1.12 or newer.

* `ember install ember-cli-build-date`

## Usage

Access the app build date by importing your `config/environment.js`. The date is stored in `config.APP.buildDate` as a string formatted date.

Works well in combination with [ember-cli-app-version](https://github.com/embersherpa/ember-cli-app-version). For example, here's a component to display the version and date, `app/components/build-date.js`:


```javascript
import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  buildDate: config.APP.buildDate,
  version: config.APP.version
});
```

And the template, `app/templates/components/build-date.hbs`:

```handlebars
Version {{version}}, released on {{buildDate}}
```

## Running Tests

* `ember test`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
