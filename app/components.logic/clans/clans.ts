import { Component } from '@angular/core'
import Store from '../../services/store'

@Component({
    selector: 'clans',
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: require('./clans.html')
})

export class Clans {
    get clans() {
        return this._store.clans.items;
    }

    constructor (private _store :Store) { }
}
