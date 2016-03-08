import { Component, Inject, OnInit, ViewEncapsulation } from 'angular2/core'
import { NgForm, FORM_DIRECTIVES } from 'angular2/common'
import { Router } from 'angular2/router'
import { TitleService } from '../../services/title'
import { Storage } from '../../utils/storage'
import { I18N } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    providers  : [],
    directives : [NgForm, FORM_DIRECTIVES],
    pipes: [I18NPipe],
    styles: [require('./matches-search.styl')],
    template: require('./matches-search.html'),
    selector: 'matches-search',
    encapsulation: ViewEncapsulation.None
})

export class MatchesSearch {
    value = Storage.getItem('match:find');

    constructor(private _router :Router,
                private _title :TitleService,
                private i18n :I18N
    ) {
        _title.setTitle(i18n.get('matches.search.docTitle'));
    }

    private onSubmit(form) {
        this.showMatch(form.id);
    }

    showMatch(id) {
        if (!id && !/^\d+$/.test(id)) {
            return;
        }
        id = id.trim();
        Storage.setItem('match:find', id);
        this._router.navigate(['MatchesDetail', { match: id }]);
    }
}

export default MatchesSearch
