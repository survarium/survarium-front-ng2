import { Component, ViewEncapsulation, Inject, ViewContainerRef } from '@angular/core'

@Component({
    selector: 'survarium-stats',
    styles: [require('./app.styl')],
    encapsulation: ViewEncapsulation.None,
    template: require('./app.html')
})

export class App {
    constructor (@Inject('CONFIG') private config, public viewRef :ViewContainerRef) {}
}
