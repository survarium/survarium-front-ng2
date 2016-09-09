import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { ClansSearch } from './clans-search'

export const routes :Routes = [
    {
        path: '',
        component: ClansSearch
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
