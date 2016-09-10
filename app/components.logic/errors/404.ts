import { NgModule, Component, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule }   from '@angular/router';

@Component({
    selector: 'error-404',
    styles: [`:host { padding: 1em 0; }`],
    template: `<h2>Error 404</h2><p>Page not found</p>`,
})
export class Error404 {}

export const routes :Routes = [
    {
        path: '**',
        component: Error404
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [CommonModule, routing],
    declarations: [Error404]
})

export class Error404Module {}
