import { Component } from '@angular/core'
import Store from '../../services/store'

@Component({
    selector: 'matches',
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: require('./matches.html')
})

export class Matches {
    get matches() {
        return this._store.matches.items;
    }

    constructor (private _store :Store) { }
}
