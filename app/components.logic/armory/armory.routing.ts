import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Armory } from './armory'
import { ArmoryList } from './armory-list'
import { ArmoryItem } from './armory-item'
import { ArmoryTTK } from './armory-ttk'

export const routes :Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/armory/ttk'
    },
    {
        path: '',
        component: Armory,
        children: [
            {
                path: 'ttk',
                component: ArmoryTTK
            },
            {
                path: 'list',
                component: ArmoryList
            },
            {
                path: ':item',
                component: ArmoryItem
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
