import { Component, Inject, Input } from '@angular/core'

@Component({
    selector: 'adsense',
    inputs: ['slot'],
    template: require('./adsense.html')
})

export class Adsense {
    constructor (@Inject('CONFIG') private config) { }

    private client = this.config.adsense.client;
    @Input() private slot :number;
}

export default Adsense
