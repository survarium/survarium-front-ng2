import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Armory } from './armory'
import { ArmoryList } from './armory-list'
import { ArmoryItem } from './armory-item'

export const routes :Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: Armory,
        children: [
            {
                path: '',
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

export const routingProviders: any[] = [
    routing
];
