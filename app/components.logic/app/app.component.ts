import {Component, ViewEncapsulation, Inject, ViewContainerRef, OnInit} from '@angular/core'

@Component({
    selector: 'survarium-stats',
    styles: [require('./app.styl')],
    encapsulation: ViewEncapsulation.None,
    template: require('./app.html'),
    host: {
        '[class.blocked]': 'adblocked'
    }
})

export class App implements OnInit {
    constructor(@Inject('CONFIG') private config, public viewRef: ViewContainerRef) {
    }

    public adblocked: false;
    public ismobile: boolean;


    ngOnInit() {
        this.ismobile = window.screen.width <= 767;
    }
}

