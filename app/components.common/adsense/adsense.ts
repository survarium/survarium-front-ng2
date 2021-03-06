import { Component, Inject, Input, AfterViewInit, OnDestroy } from '@angular/core'
import { AdsenseService } from '../../services/adsense'

@Component({
    selector: 'sense',
    inputs: ['width', 'height'],
    template: require('./adsense.html'),
    styles: [require('./adsense.styl')],
    host: {
        '[class.shown]': '!config.isMobile',
        '[class.sns]': 'true'
    }
})

export class Adsense implements AfterViewInit, OnDestroy {
    @Input() private slot :number;
    @Input() private format :string = 'auto';
    private client = this.config.adsense.client;

    constructor (@Inject('CONFIG') private config,
                private adsense :AdsenseService) {}

    private get blocked () {
        return this.adsense.blocked;
    }

    private checker :any;

    ngAfterViewInit () {
        this.checker = setTimeout(() => this.adsense.load(), 100);
    }

    ngOnDestroy () {
        clearTimeout(this.checker);
    }
}

export default Adsense
