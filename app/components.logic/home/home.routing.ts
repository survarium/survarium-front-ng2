import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Home } from './home.component'

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        pathMatch: 'full',
        component: Home
    }
]);
