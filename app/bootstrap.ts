import { enableProdMode, provide } from 'angular2/core';
import { bootstrap, Title as TitleProvider }    from 'angular2/platform/browser'
import { HTTP_PROVIDERS } from 'angular2/http'
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router'

import { App } from './components.logic/app/app.component'
import { API_PROVIDERS } from './services/api'
import Store from './services/store'
import TitleService from './services/title'

import CONFIG from './config'

import './deps'

CONFIG.production && enableProdMode();

bootstrap(App,
    [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        TitleProvider,
        Store,
        API_PROVIDERS,
        TitleService,
        provide(APP_BASE_HREF, {useValue: '/'}),
        provide('CONFIG', { useValue: CONFIG })
    ])
    .catch(err => console.error(err));
