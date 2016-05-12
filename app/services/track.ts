import { Injectable, Inject } from '@angular/core'
import { Location } from '@angular/common'

declare var ga :any;
declare var metrika :any;

@Injectable()
export class TrackService {

    // FIXME: CLIENT-SIDE ONLY

    private host :string;
    constructor(private location :Location, @Inject('window') private window) {
        let winLocation :any = window.location;
        this.host = winLocation.protocol + '//' + winLocation.host;
    }

    visit (params :{ title :string }) {
        setTimeout(() => {
            let page  = this.location.path();
            let title = params.title;

            try {
                typeof ga !== 'undefined' && ga('set', 'page', page);
                typeof ga !== 'undefined' && ga('send', {
                    hitType: 'pageview',
                    page   : page,
                    title  : title
                });
                typeof metrika !== 'undefined' && metrika.hit(page, {
                    title: title
                });
            } catch (e) {
                console.log('visit error', e);
            }
        }, 0);
    }

    track (params :{ ya ?:{ goal :string, options :any }, ga ?:{ category :string, action :string, label :string }}) {
        try {
            typeof metrika !== 'undefined' && params.ya && metrika.reachGoal(params.ya.goal, params.ya.options);
            typeof ga !== 'undefined' && params.ga && ga('send', {
                hitType: 'event',
                eventCategory: params.ga.category,
                eventAction: params.ga.action,
                eventLabel: params.ga.label
            });
        } catch (e) {
            console.log('track error', e);
        }
    }
}

export default TrackService
