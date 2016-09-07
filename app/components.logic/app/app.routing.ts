import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

/*
import { MatchesRoutes } from '../matches/matches.routes'
import { PlayersRoutes } from '../players/players.routes'
import { StreamsRoutes } from '../streams/streams.routes'*/
import { Error404 } from '../errors/404'

export const routes: Routes = [
    {
        path: 'armory',
        loadChildren: () => require('es6-promise!../armory/armory.module')('ArmoryModule')
    },
    {
        path: 'info',
        loadChildren: () => require('es6-promise!../info/info.module')('InfoModule')
    },
    //...ClansRoutes,
    //...MatchesRoutes,
    //...PlayersRoutes,
    //...StreamsRoutes,
    {
        path: 'players',
        loadChildren: () => require('es6-promise!../players/players.module')('PlayersModule')
    },
    {
        path: 'streams',
        loadChildren: () => require('es6-promise!../streams/streams.module')('StreamsModule')
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

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
