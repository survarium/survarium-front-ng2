import { enableProdMode, ComponentRef, ApplicationRef, NgModuleRef } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './components.logic/app/app.module'
import { App } from './components.logic/app/app.component'

import { appProvider } from './services/app'

import CONFIG from './config'
import { ngOnLoad } from './async'

if (CONFIG.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((moduleRef :NgModuleRef<AppModule>) => {
        const appRef :ApplicationRef = moduleRef.injector.get(ApplicationRef);
        const appCmp :ComponentRef<App> = appRef.components[0];

        appProvider.app = appCmp;

        if (!CONFIG.production) {
            CONFIG.enableDebugTools && enableDebugTools(appCmp);
        }

        setTimeout(ngOnLoad.bind(this, window, document), 1000);
    })
    .catch(err => console.error(err));

// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
