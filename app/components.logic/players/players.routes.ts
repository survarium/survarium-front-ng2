import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Players } from './players'
import { PlayersSearch } from './players-search'
import { PlayersList } from './players-list'
import { PlayersDetail } from './players-detail'

export const routes :Routes = [
    {
        path: '',
        component: Players,
        children: [
            {
                path: 'search',
                component: PlayersSearch
            },
            {
                path: ':nickname',
                component: PlayersDetail
            },
            {
                path: '',
                component: PlayersList
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
