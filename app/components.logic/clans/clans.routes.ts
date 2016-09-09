import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Clans } from './clans'

export const routes :Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
    },
    {
        path: '',
        component: Clans,
        children: [
            {
                path: 'list',
                loadChildren: () => require('es6-promise!./clans-list.module')('ClansListModule')
            },
            {
                path: 'search',
                loadChildren: () => require('es6-promise!./clans-search.module')('ClansSearchModule')
            },
            {
                path: ':abbr',
                loadChildren: () => require('es6-promise!./clans-detail.module')('ClansDetailModule')
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
