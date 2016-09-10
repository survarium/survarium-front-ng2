import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Info } from './info'
import { DevMessages } from './dev-messages'
import { About } from './about'
import { Bans } from './bans'

export const routes :Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/info/messages'
    },
    {
        path: '',
        component: Info,
        children: [
            {
                path: 'messages',
                component: DevMessages
            },
            {
                path: 'about',
                component: About
            },
            {
                path: 'bans',
                component: Bans
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
