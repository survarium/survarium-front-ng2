import { NgModule, APP_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { APP_BASE_HREF } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { Title as TitleProvider } from '@angular/platform-browser'

import { routingProviders, routing } from './app.routing'

import { API_PROVIDERS } from '../../services/api'
import { StoreService } from '../../services/store'
import { TrackService } from '../../services/track'
import { AdsenseService } from '../../services/adsense'
import { DFPService } from '../../services/dfp'
import { TitleService } from '../../services/title'
import { I18N, i18n } from '../../services/i18n'
import { MapsService } from '../../services/maps'
import { FactionsService } from '../../services/factions'
import { ArmoryService } from '../../services/armory'

import { SharedModule } from '../../shared'

import { App }  from './app.component';

import CONFIG from '../../config'

import { Error404 } from '../errors/404'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        SharedModule,
        //HomeModule,
        //ArmoryModule
        //InfoModule
    ],
    entryComponents: [
    ],
    providers: [
        routingProviders,
        { provide: APP_ID, useValue: 'survarium-pro' },
        { provide: 'window', useValue: window },
        { provide: I18N, useValue: i18n },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: 'CONFIG', useValue: CONFIG },
        TitleProvider,
        StoreService,
        ...API_PROVIDERS,
        TrackService,
        AdsenseService,
        DFPService,
        TitleService,
        MapsService,
        FactionsService,
        ArmoryService
    ],
    declarations: [
        App,
        Error404
    ],
    exports: [
    ],
    bootstrap:[
        App
    ]
})

export class AppModule { }
