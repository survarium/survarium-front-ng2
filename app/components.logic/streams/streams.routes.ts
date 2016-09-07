import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Streams } from './streams'
import { Youtube } from './youtube'
import { Twitch } from './twitch'

export const routes :Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/streams/youtube'
    },
    {
        path: '',
        component: Streams,
        children: [
            {
                path: 'youtube',
                component: Youtube
            },
            {
                path: 'twitch',
                component: Twitch
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
