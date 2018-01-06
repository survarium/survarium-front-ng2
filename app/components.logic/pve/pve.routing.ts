import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Pve } from './pve'
import { PvePage } from './pve-page'

export const routes :Routes = [
    {
        path: '',
        component: Pve,
        children: [
            {
                path: ':page',
                component: PvePage
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
