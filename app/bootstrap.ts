import { enableProdMode, provide, APP_ID, ComponentRef } from 'angular2/core';
import { bootstrap, Title as TitleProvider, enableDebugTools } from 'angular2/platform/browser'
import { HTTP_PROVIDERS } from 'angular2/http'
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router'


import { App } from './components.logic/app/app'
import { API_PROVIDERS } from './services/api'
import { StoreService } from './services/store'
import { TrackService } from './services/track'
import { TitleService } from './services/title'
import { I18N, i18n } from './services/i18n'

import CONFIG from './config'

if (CONFIG.production) {
    enableProdMode();
}

bootstrap(App,
    [
        provide(APP_ID, { useValue: 'survarium-pro' }),
        provide('window', { useValue: window }),
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        TitleProvider,
        StoreService,
        ...API_PROVIDERS,
        TrackService,
        TitleService,
        provide(I18N, { useValue: i18n }),
        provide(APP_BASE_HREF, { useValue: '/' }),
        provide('CONFIG', { useValue: CONFIG })
    ])
    .then((appRef :ComponentRef) => {
        if (!CONFIG.production) {
            CONFIG.enableDebugTools && enableDebugTools(appRef);
        }
    })
    .catch(err => console.error(err));

// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
