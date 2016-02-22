import { enableProdMode, provide, APP_ID } from 'angular2/core';
import { bootstrap, Title as TitleProvider, ELEMENT_PROBE_PROVIDERS }    from 'angular2/platform/browser'
import { HTTP_PROVIDERS } from 'angular2/http'
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router'

import { App } from './components.logic/app/app.component'
import { API_PROVIDERS } from './services/api'
import Store from './services/store'
import TitleService from './services/title'
import { I18N, i18n } from './services/i18n'

import CONFIG from './config'

const ENV_PROVIDERS = [];

if (CONFIG.production) {
    enableProdMode();
} else {
    ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

bootstrap(App,
    [
        provide(APP_ID, { useValue: 'survarium-pro' }),
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        ...ENV_PROVIDERS,
        TitleProvider,
        Store,
        API_PROVIDERS,
        TitleService,
        provide(I18N, { useValue: i18n }),
        provide(APP_BASE_HREF, { useValue: '/' }),
        provide('CONFIG', { useValue: CONFIG })
    ])
    .catch(err => console.error(err));

/*
 * Modified for using hot module reload
 */

// typescript lint error 'Cannot find name "module"' fix
declare let module: any;

// activate hot module reload
if (module.hot) {

    // bootstrap must not be called after DOMContentLoaded,
    // otherwise it cannot be rerenderd after module replacement
    //
    // for testing try to comment the bootstrap function,
    // open the dev tools and you'll see the reloader is replacing the module but cannot rerender it
    bootstrap(App, [
        ...ENV_PROVIDERS,
        ...HTTP_PROVIDERS,
        ...ROUTER_PROVIDERS,
    ])
        .catch(err => console.error(err));

    module.hot.accept();
}

// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
