// Polyfills
import 'es6-shim';
import 'es6-promise';

import 'es7-reflect-metadata';
import 'zone.js/dist/zone-microtask';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';

if ('production' === process.env.ENV) {
} else {
    // by webpack.prod.config ProvidePlugin
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}

// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
