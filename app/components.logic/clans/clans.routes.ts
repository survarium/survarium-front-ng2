import { Routes } from '@angular/router';

import { ClansModule } from './clans'
import { ClansSearchModule } from './clans-search'
import { ClansListModule } from './clans-list'
import { ClansDetailModule } from './clans-detail'

export const ClansRoutes :Routes = [
    {
        path: 'clans',
        pathMatch: 'full',
        component: ClansModule,
        children: [
            {
                path: '',
                component: ClansListModule
            },
            {
                path: ':abbr',
                component: ClansDetailModule
            },
            {
                path: 'search',
                component: ClansSearchModule
            }
        ]
    }
];
