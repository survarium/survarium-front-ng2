import { Component, Inject, Input, AfterViewInit, OnDestroy } from '@angular/core'
import { AdsenseService } from '../../services/adsense'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'adsense',
    inputs: ['width', 'height'],
    template: require('./adsense.html'),
    styles: [require('./adsense.styl')],
    pipes: [I18NPipe]
})

export class Adsense implements AfterViewInit, OnDestroy {
    @Input() private slot :number;
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
