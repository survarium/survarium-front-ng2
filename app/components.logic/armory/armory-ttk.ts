import { NgModule, Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser'
import { TitleService } from '../../services/title'
import { I18N } from '../../services/i18n'
import { SharedModule } from '../../shared'

@Component({
    selector: 'armory-ttk',
    styles: [require('./armory-ttk.styl')],
    template: require('./armory-ttk.html')
})

export class ArmoryTTK implements OnInit {
    private iframeSrc;

    constructor (private title :TitleService,
                 private _domSanitize :DomSanitizer,
                 private i18n :I18N) {
    }

    ngOnInit () {
        this.iframeSrc = this._domSanitize.bypassSecurityTrustResourceUrl(
            `https://pi4.freeboxos.fr/survarium/true/true?utm_source=svpro&utm_lang=${this.i18n.lang.lang}`
        );

        this.title.setRendered();
    }
}

@NgModule({
    imports: [SharedModule],
    declarations: [ArmoryTTK]
})

export class ArmoryTTKModule {}
