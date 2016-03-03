import { Component, Inject } from 'angular2/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, AsyncRoute } from 'angular2/router'
import Store from '../../services/store'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'players',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    pipes: [I18NPipe],
    styles: [
        `
        .nav-link { display: inline-block; padding: .5em; }
        `
    ],
    template: `
     <nav>
      <a [routerLink]="['./PlayersSearch']" class="nav-link">{{'players.search.title' | i18n}}</a>
      <a [routerLink]="['./PlayersList']" class="nav-link">{{'players.list' | i18n}}</a>
      <a *ngFor="#player of players" [routerLink]="['./PlayersDetail', { nickname: player }]" class="nav-link">{{player}}</a>
    </nav>
    <router-outlet></router-outlet>`,
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
