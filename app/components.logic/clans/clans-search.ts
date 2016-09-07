import { NgModule, Component, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { Storage } from '../../utils/storage'
import { TitleService } from '../../services/title'
import { I18N } from '../../services/i18n'

@NgModule({
    declarations: [ClansSearch],
    bootstrap: [ClansSearch]
})

export class ClansSearchModule {}

@Component({
    styles: [require('./clans-search.styl')],
    template: require('./clans-search.html'),
    selector: 'clans-search',
    encapsulation: ViewEncapsulation.None
})

export class ClansSearch {
    value = Storage.getItem('clan:find');

    constructor(private _router :Router,
                private _title :TitleService,
                private i18n :I18N
    ) {
        _title.setTitle(i18n.get('clans.search.docTitle'));
        _title.setDescription(i18n.get('clans.search.docDescription'));
    }

    showClan(abbr) {
        if (!abbr) {
            return;
        }
        abbr = abbr.trim();
        Storage.setItem('clan:find', abbr);
        this._router.navigate(['/clans', { abbr: abbr }]);
    }
}

export default ClansSearch
