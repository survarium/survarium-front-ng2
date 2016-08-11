import { Injectable, Inject } from '@angular/core'
import { CONFIG } from '../config'

@Injectable()
export class AdsenseService {
    private _loaded = false;

    get loaded () {
        return this._loaded;
    }

    set loaded (val :boolean) {
        this._loaded = val;
    }

    get blocked () {
        return CONFIG.adblock;
    }

    private adsense :any;

    constructor(@Inject('window') private window,
                @Inject('CONFIG') private config) {
        (window['adsbygoogle'] || (window['adsbygoogle'] = []));

        window['adsbygoogle'].onload = () => {
            try {
                window['adsbygoogle'].push({
                    google_ad_client: config.adsense.client,
                    enable_page_level_ads: config.isMobile
                });
            } catch (e) {}
            this.loaded = true;
        }
    }

    load () {
        try {
            window['adsbygoogle'].push({});
        } catch (e) {}
    }
}
