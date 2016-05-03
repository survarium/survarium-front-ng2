import { Component, Inject, OnInit, ViewEncapsulation } from 'angular2/core'
import { NgForm, FORM_DIRECTIVES } from 'angular2/common'
import { Router } from 'angular2/router'
import { Storage } from '../../utils/storage'
import { TitleService } from '../../services/title'
import { I18N } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    providers  : [],
    directives : [NgForm, FORM_DIRECTIVES],
    pipes: [I18NPipe],
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

    private onSubmit(form) {
        this.showClan(form.abbr);
    }

    showClan(abbr) {
        if (!abbr) {
            return;
        }
        abbr = abbr.trim();
        Storage.setItem('clan:find', abbr);
        this._router.navigate(['ClansDetail', { abbr: abbr }]);
    }
}

export default ClansSearch
