import { Injectable, Inject } from '@angular/core'
import { CONFIG } from '../config'

@Injectable()
export class DFPService {
    get blocked () {
        return CONFIG.adblock;
    }

    private slots :any = {};

    constructor(@Inject('window') private window) {
        window['googletag'] = window['googletag'] || {};
        window['googletag'].cmd = window['googletag'].cmd || [];

        window['googletag'].cmd.push(() => {
            let googletag = window['googletag'];

            var mapping = googletag
                .sizeMapping()
                .addSize([250, 100], [234, 60])
                .addSize([340, 100], [320, 50])
                .addSize([500, 100], [468, 60])
                .addSize([750, 100], [728, 90])
                .addSize([1050, 100], [970, 90])
                .build();

            this.slots.playerSplit =
                googletag
                    .defineSlot(
                        '/126806937/sv.pro_player-split',
                        [234, 60],
                        'playerSplit'
                    )
                    .addService(googletag.pubads())
                    .defineSizeMapping(mapping);

            googletag.pubads().setCentering(true);

            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                event.slot.__extListenter(event);
            });

            googletag.enableServices();
        });
    }

    load (id :string, cb :any, listener :any) {
        try {
            this.window['googletag'].cmd.push(() => {
                let googletag = this.window['googletag'];
                googletag.display(id);

                let slot = this.slots[id];
                slot.__extListenter = listener;
                cb(slot);
            });
        } catch (e) { }
    }

    refresh (slot :any) {
        window['googletag'].pubads().refresh([slot]);
    }

    unload (slot :any) {
        window['googletag'].pubads().clear([slot]);
    }
}
