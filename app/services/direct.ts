import { Injectable, Inject } from '@angular/core'

@Injectable()
export class DirectService {

    // FIXME: CLIENT-SIDE ONLY

    private _direct :any;
    get direct() {
        return this._direct || (this._direct = this.window['direct']);
    }

    constructor(@Inject('window') private window) {}
    add(id :number, target :string, w :number = 600, h :number = 100) {
        try {
            return this.direct.insertInto(id, target, {
                ad_format: 'direct',
                type: 'adaptive',
                limit: 4,
                links_underline: true,
                site_bg_color: '192028',
                title_color: 'FFCE1F',
                url_color: 'CCCCCC',
                text_color: 'CCCCCC',
                hover_color: 'FFCE1F',
                favicon: true,
                no_sitelinks: true,
                height: h,
                width: w
            });
        } catch (e) { }
    }
}

export default DirectService
