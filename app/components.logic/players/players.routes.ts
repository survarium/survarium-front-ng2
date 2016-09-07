import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Players } from './players'
import { PlayersSearch } from './players-search'
import { PlayersList } from './players-list'
import { PlayersDetail } from './players-detail'

export const routes :Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
    },
    {
        path: '',
        component: Players,
        children: [
            {
                path: 'search',
                component: PlayersSearch
            },
            {
                path: 'list',
                component: PlayersList
            },
            {
                path: ':nickname',
                component: PlayersDetail
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
