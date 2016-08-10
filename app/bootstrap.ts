import { enableProdMode, APP_ID, ComponentRef } from '@angular/core';
import { Title as TitleProvider, enableDebugTools } from '@angular/platform-browser'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS } from '@angular/http'
import { ROUTER_PROVIDERS } from '@angular/router-deprecated'
import { APP_BASE_HREF } from '@angular/common'
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { App } from './components.logic/app/app'
import { API_PROVIDERS } from './services/api'
import { StoreService } from './services/store'
import { TrackService } from './services/track'
import { DirectService } from './services/direct'
import { TitleService } from './services/title'
import { VkFeedService } from './services/vk-feed'
import { I18N, i18n } from './services/i18n'
import { MapsService } from './services/maps'
import { FactionsService } from './services/factions'
import { ArmoryService } from './services/armory'
import { appProvider } from './services/app'

import CONFIG from './config'
import { ngOnLoad } from './async'

if (CONFIG.production) {
    enableProdMode();
}

export var app: ComponentRef<App>;

bootstrap(App,
    [
        { provide: APP_ID, useValue: 'survarium-pro' },
        { provide: 'window', useValue: window },
        { provide: I18N, useValue: i18n },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: 'CONFIG', useValue: CONFIG },
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        disableDeprecatedForms(),
        provideForms(),
        TitleProvider,
        StoreService,
        ...API_PROVIDERS,
        TrackService,
        DirectService,
        TitleService,
        VkFeedService,
        MapsService,
        FactionsService,
        ArmoryService
    ])
    .then((appRef :ComponentRef<any>) => {
        appProvider.app = appRef;

        if (!CONFIG.production) {
            CONFIG.enableDebugTools && enableDebugTools(appRef);
        }

        setTimeout(ngOnLoad.bind(this, window, document), 1000);
    })
    .catch(err => console.error(err));

// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
