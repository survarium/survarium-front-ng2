import { Routes } from '@angular/router';

import { Matches } from './matches'
import { MatchesDetail } from './matches-detail'
import { MatchesList } from './matches-list'
import { MatchesListCW } from './matches-list-cw'
import { MatchesSearch } from './matches-search'

export const MatchesRoutes :Routes = [
    {
        path: 'matches',
        pathMatch: 'full',
        component: Matches,
        redirectTo: 'search',
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
