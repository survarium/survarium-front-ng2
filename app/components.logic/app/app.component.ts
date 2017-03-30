import { Component, ViewEncapsulation, Inject, ViewContainerRef } from '@angular/core'

@Component({
    selector: 'survarium-stats',
    styles: [require('./app.styl')],
    encapsulation: ViewEncapsulation.None,
    template: require('./app.html'),
    host: {
        '[class.blocked]': 'adblocked'
    }
})

export class App {
    constructor (@Inject('CONFIG') private config, public viewRef :ViewContainerRef) {}

    public adblocked: false;
}
