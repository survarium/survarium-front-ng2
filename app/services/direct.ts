import { Injectable, Inject } from '@angular/core'

@Injectable()
export class DirectService {

    // FIXME: CLIENT-SIDE ONLY

    private _direct :any;
    get direct() {
        return this._direct || (this._direct = this.window['direct']);
    }

    private defaultWidth = 600;
    private defaultHeight = 100;

    constructor(@Inject('window') private window) {}
    add(id :number, target :string, width ?:number, height ?:number) {
        width = width || this.defaultWidth;
        height = height || this.defaultHeight;

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
                height: height,
                width: width
            });
        } catch (e) { }
    }
}

export default DirectService
