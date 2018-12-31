import { NgModule, APP_ID, QueryList } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { Title as TitleProvider } from '@angular/platform-browser'

import { routingProviders, routing } from './app.routing'

import { API_PROVIDERS } from '../../services/api'
import { StoreService } from '../../services/store'
import { TrackService } from '../../services/track'
import { AdsenseService } from '../../services/adsense'
import { TitleService } from '../../services/title'
import { I18N, i18n } from '../../services/i18n'
import { MapsService } from '../../services/maps'
import { ArmoryService } from '../../services/armory'
import { SteamService } from '../../services/steam'
//import { DFPService } from '../../services/dfp'
//import { FactionsService } from '../../services/factions'

import { SharedModule } from '../../shared'

import { App }  from './app.component';

import CONFIG from '../../config'

import { Error404 } from '../errors/404'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        routing,
        SharedModule
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
        QueryList,
        TitleProvider,
        StoreService,
        ...API_PROVIDERS,
        TrackService,
        AdsenseService,
        //DFPService,
        TitleService,
        MapsService,
        //FactionsService,
        ArmoryService,
        SteamService
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
