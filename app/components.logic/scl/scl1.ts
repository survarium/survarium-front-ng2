import { Component, Inject } from '@angular/core'
import TitleService from '../../services/title'
import {I18N, i18n} from '../../services/i18n'
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'scl1',
    template: require('./scl.html'),
    styles: [require('./scl.styl')]
})

export class Scl1 {

    private iframeSrc;

    constructor (private title :TitleService,
                 private _domSanitize :DomSanitizer,
                 private i18n :I18N) {
    }

    ngOnInit () {
        this.iframeSrc = this._domSanitize.bypassSecurityTrustResourceUrl(
            `https://pi4.freeboxos.fr:8443/scl?season=1&utm_source=svpro&utm_lang=${this.i18n.lang.lang}`
        );

        this.title.setRendered();
    }
}
