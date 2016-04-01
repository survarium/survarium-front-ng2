import { Injectable, Inject } from 'angular2/core'
import { Location } from 'angular2/router'

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
                console.log('track error', e);
            }
        }, 0);
    }

}

export default TrackService
