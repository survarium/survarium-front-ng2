import { enableProdMode, APP_ID, ComponentRef, NgModule, ApplicationRef, NgModuleRef } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser'
import { BrowserModule } from '@angular/platform-browser';
import { Title as TitleProvider } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS } from '@angular/http'
import { ROUTER_PROVIDERS } from '@angular/router-deprecated'
import { APP_BASE_HREF } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { App } from './components.logic/app/app'

import { API_PROVIDERS } from './services/api'
import { StoreService } from './services/store'
import { TrackService } from './services/track'
import { AdsenseService } from './services/adsense'
import { DFPService } from './services/dfp'
import { TitleService } from './services/title'
import { VkFeedService } from './services/vk-feed'
import { I18N, i18n } from './services/i18n'
import { MapsService } from './services/maps'
import { FactionsService } from './services/factions'
import { ArmoryService } from './services/armory'
import { appProvider } from './services/app'

import { I18NPipe } from './pipes/i18n'
import { DataGridModule } from './components.common/data-grid/data-grid.module'

import CONFIG from './config'
import { ngOnLoad } from './async'

if (CONFIG.production) {
    enableProdMode();
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DataGridModule
    ],
    providers: [
        HTTP_PROVIDERS,
        { provide: APP_ID, useValue: 'survarium-pro' },
        { provide: 'window', useValue: window },
        { provide: I18N, useValue: i18n },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: 'CONFIG', useValue: CONFIG },
        I18NPipe,
        ComponentRef,
        ROUTER_PROVIDERS,
        TitleProvider,
        StoreService,
        ...API_PROVIDERS,
        TrackService,
        AdsenseService,
        DFPService,
        TitleService,
        VkFeedService,
        MapsService,
        FactionsService,
        ArmoryService
    ],
    declarations: [
        App
    ],
    bootstrap:[
        App
    ]
})

class Boot {}

platformBrowserDynamic()
    .bootstrapModule(Boot)
    .then((moduleRef :NgModuleRef<Boot>) => {
        const appRef :ApplicationRef = moduleRef.injector.get(ApplicationRef);
        const appCmp :ComponentRef<App> = appRef.components[0];

        appProvider.app = appCmp;

        if (!CONFIG.production) {
            CONFIG.enableDebugTools && enableDebugTools(appCmp);
        }

        setTimeout(ngOnLoad.bind(this, window, document), 1000);
    })
    .catch(err => console.error(err));

// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
