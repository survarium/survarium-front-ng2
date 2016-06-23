import { Component, Inject, Input } from '@angular/core'

@Component({
    selector: 'adsense',
    inputs: ['slot'],
    template: require('./adsense.html')
})

export class Adsense {
    constructor (@Inject('CONFIG') private config) { }

    private client = 'ca-pub-8677968039358823';
    @Input() private slot :number;

    ngOnInit () {
        setTimeout(() => {
            var adsbygoogle = window['adsbygoogle'] || [];
            try {
                adsbygoogle.push({
                    google_ad_client: this.client,
                    enable_page_level_ads: this.config.isMobile
                });
            } catch (e) { console.error(e) }
        }, 100);
    }
}
export default Adsense
