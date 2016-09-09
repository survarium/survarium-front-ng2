import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { ClansDetail } from './clans-detail'

export const routes :Routes = [
    {
        path: '',
        component: ClansDetail
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
