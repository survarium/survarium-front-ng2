import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { ClansList } from './clans-list'

export const routes :Routes = [
    {
        path: '',
        component: ClansList
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
