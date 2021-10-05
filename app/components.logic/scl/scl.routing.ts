import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Scl } from './scl'
import { Scl1 } from './scl1'
import { Scl2 } from './scl2'

export const routes :Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/scl/scl2'
    },
    {
        path: '',
        component: Scl,
        children: [
            {
                path: 'scl1',
                component: Scl1,
            },
            {
                path: 'scl2',
                component: Scl2,
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
