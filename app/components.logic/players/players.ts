import { Component } from '@angular/core'
import Store from '../../services/store'

@Component({
    selector: 'players',
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: require('./players.html'),
})

export class Players {
    get players() {
        return this._store.players.items;
    }

    constructor (private _store :Store) { }
}
