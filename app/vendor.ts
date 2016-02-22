// Polyfills
import 'es6-shim';
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)
import 'es6-promise';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';

declare let process :any;
declare let require :any;

if ('production' === process.env.ENV) {
    // Production

    // In production Reflect with es7-reflect-metadata/reflect-metadata is added

    // Zone.js
    require('zone.js/dist/zone-microtask.min');

} else {
    // Reflect Polyfill
    require('es7-reflect-metadata/src/global/browser');
    // In production Reflect with es7-reflect-metadata/reflect-metadata is added

    // by webpack.prod.config ProvidePlugin
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/zone-microtask');
    require('zone.js/dist/long-stack-trace-zone');
}

// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
