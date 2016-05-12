import { Component } from '@angular/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, AsyncRoute } from '@angular/router-deprecated'
import Store from '../../services/store'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'players',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    pipes: [I18NPipe],
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: require('./players.html'),
})

@RouteConfig([
    new AsyncRoute({ path: '/search', loader: () => require('es6-promise!./players-search')('PlayersSearch'), name: 'PlayersSearch', useAsDefault: true }),
    new AsyncRoute({ path: '/', loader: () => require('es6-promise!./players-list')('PlayersList'), name: 'PlayersList' }),
    new AsyncRoute({ path: '/:nickname', loader: () => require('es6-promise!./players-detail')('PlayersDetail'), name: 'PlayersDetail' })
])

export class Players {
    get players() {
        return this._store.players.items;
    }

    constructor (private _store :Store) { }
}
