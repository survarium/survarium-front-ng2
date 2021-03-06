import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading }   from '@angular/router';

import { Error404 } from '../errors/404'
import CONFIG from '../../config'

export const routes: Routes = [
    {
        path: 'armory',
        loadChildren: () => require('es6-promise!../armory/armory.module')('ArmoryModule')
    },
    {
        path: 'info',
        loadChildren: () => require('es6-promise!../info/info.module')('InfoModule')
    },
    {
        path: 'matches',
        loadChildren: () => require('es6-promise!../matches/matches.module')('MatchesModule')
    },
    {
        path: 'clans',
        loadChildren: () => require('es6-promise!../clans/clans.module')('ClansModule')
    },
    {
        path: 'players',
        loadChildren: () => require('es6-promise!../players/players.module')('PlayersModule')
    },
    {
        path: 'streams',
        loadChildren: () => require('es6-promise!../streams/streams.module')('StreamsModule')
    },
    {
        path: 'pve',
        loadChildren: () => require('es6-promise!../pve/pve.module')('PveModule')
    },
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => require('es6-promise!../home/home.module')('HomeModule')
    },
    {
        path: '**',
        component: Error404
    }
];

export const routingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: CONFIG.isWebBrowser ? PreloadAllModules : NoPreloading,
    enableTracing: !CONFIG.production && CONFIG.enableRouterTracing
});
