import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { Armory } from './armory'
import { ArmoryList } from './armory-list'
import { ArmoryItem } from './armory-item'

export const routes :Routes = [
    {
        path: '',
        component: Armory,
        children: [
            {
                path: ':item',
                component: ArmoryItem
            },
            {
                path: '',
                component: ArmoryList
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
