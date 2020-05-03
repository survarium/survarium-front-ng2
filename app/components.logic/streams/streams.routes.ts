import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Streams } from './streams'
import { Twitch } from './twitch'
/*import { Youtube } from './youtube'*/

export const routes :Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/streams/twitch'
    },
    {
        path: '',
        component: Streams,
        children: [
            /*{
                path: 'youtube',
                component: Youtube
            },*/
            {
                path: 'twitch',
                component: Twitch
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
