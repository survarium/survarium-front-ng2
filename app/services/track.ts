import { Injectable, Inject } from '@angular/core'
import { Location } from '@angular/common'

@Injectable()
export class TrackService {

    // FIXME: CLIENT-SIDE ONLY

    private host :string;
    private _ga :any;
    private _metrika :any;

    get metrika() {
        return this._metrika || (this._metrika = this.window['metrika']);
    }
    get ga() {
        return this._ga || (this._ga = this.window['ga']);
    }

    constructor(private location :Location, @Inject('window') private window) {
        let winLocation :any = window.location;
        this.host = 'https://' + winLocation.host;

        this.metrika;
        this.ga;
    }

    visit (params :{ title :string }) {
        setTimeout(() => {
            let page  = this.location.path();
            let title = params.title;

            try {
                let ga, metrika;

                if (ga = this.ga) {
                    ga('set', 'page', page);
                    ga('send', {
                        hitType: 'pageview',
                        page   : page,
                        title  : title
                    });
                }

                if (metrika = this.metrika) {
                    metrika.hit(page, {
                        title: title
                    })
                }

            } catch (e) {
                console.log('visit error', e);
            }
        }, 0);
    }

    track (params :{ ya ?:{ goal :string, options :any }, ga ?:{ category :string, action :string, label :string }}) {
        try {
            let ga, metrika;

            if (params.ga && (ga = this.ga)) {
                ga('send', {
                    hitType: 'event',
                    eventCategory: params.ga.category,
                    eventAction: params.ga.action,
                    eventLabel: params.ga.label
                });
            }

            if (params.ya && (metrika = this.metrika)) {
                metrika.reachGoal(params.ya.goal, params.ya.options);
            }
        } catch (e) {
            console.log('track error', e);
        }
    }
}

export default TrackService
