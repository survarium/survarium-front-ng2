import { Component, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { TitleService } from '../../services/title'
import { Storage } from '../../utils/storage'
import { I18N } from '../../services/i18n'

@Component({
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
        _title.setDescription(i18n.get('matches.search.docDescription'));
    }

    showMatch(id) {
        if (!id && !/^\d+$/.test(id)) {
            return;
        }
        id = id.trim();
        Storage.setItem('match:find', id);
        this._router.navigate(['/matches', { match: id }]);
    }
}

export default MatchesSearch
