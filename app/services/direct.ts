import { Injectable, Inject } from '@angular/core'

@Injectable()
export class DirectService {

    // FIXME: CLIENT-SIDE ONLY

    private defaultWidth = 600;
    private defaultHeight = 100;

    constructor(@Inject('window') private window) {}
    add(id :number, target :string, width ?:number, height ?:number) {
        width = width || this.defaultWidth;
        height = height || this.defaultHeight;

        let params = {
            ad_format: 'direct',
            type: 'adaptive',
            limit: 9,
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
        };

        let load = () => {
            try {
                this.window['Ya']['Direct'].insertInto(id, target, params);
            } catch (e) { console.error('Direct', e); }
        };

        if (this.window['Ya'] && this.window['Ya']['Direct']) {
            load();

            return;
        }

        (this.window['yandex_context_callbacks'] || (this.window['yandex_context_callbacks'] = [])).push(load);
    }
}

export default DirectService
