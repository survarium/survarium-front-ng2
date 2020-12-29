import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Info } from './info'
import { DevMessages } from './dev-messages'
import { DevMessage } from './dev-message'
import { About } from './about'
import { Bans } from './bans'

export const routes :Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/info/about'
    },
    {
        path: '',
        component: Info,
        children: [
            {
                path: 'about',
                component: About
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
