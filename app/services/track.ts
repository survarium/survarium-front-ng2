import { Injectable } from 'angular2/core'
import { Location } from 'angular2/router'

declare var ga :any;
declare var metrika :any;

@Injectable()
export class TrackService {

    // FIXME: CLIENT-SIDE ONLY

    private host :string;
    constructor(private location :Location, private window :Window) {
        let winLocation :any = window.location;
        this.host = winLocation.protocol + '//' + winLocation.host;
    }

    visit (params :{ title :string }) {
        setTimeout(() => {
            let path  = this.location.path();
            let page  = this.host + path;
            let title = params.title;

            try {
                ga && ga('set', 'page', page);
                ga && ga('send', {
                    hitType: 'pageview',
                    page   : page,
                    title  : title
                });
                metrika && metrika.hit(page, {
                    title: title
                });
            } catch (e) {
                console.log('track error', e);
            }
        }, 0);
    }

}

export default TrackService
