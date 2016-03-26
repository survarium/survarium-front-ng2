import { Component } from 'angular2/core'

@Component({
    selector: 'error-404',
    styles: [`:host { padding: 1em 0; }`],
    template: `<h2>Error 404</h2><p>Page not found</p>`,
})
export class Error404 {}
