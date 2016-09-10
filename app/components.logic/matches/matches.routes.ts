import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Matches } from './matches'
import { MatchesDetail } from './matches-detail'
import { MatchesList } from './matches-list'
import { MatchesListCW } from './matches-list-cw'
import { MatchesSearch } from './matches-search'

export const routes :Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
    },
    {
        path: '',
        component: Matches,
        children: [
            {
                path: 'search',
                component: MatchesSearch
            },
            {
                path: 'list',
                component: MatchesList
            },
            {
                path: 'clanwars',
                component: MatchesListCW
            },
            {
                path: ':match',
                component: MatchesDetail
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
