import { Component, Inject } from 'angular2/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, AsyncRoute } from 'angular2/router'
import Store from '../../services/store'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'matches',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    pipes: [I18NPipe],
    styles: [
        `
        .nav-link { display: inline-block; padding: .5em; }
        `
    ],
    template: `
     <nav>
      <a [routerLink]="['./MatchesList']" class="nav-link">{{'matches.list' | i18n}}</a>
      <a [routerLink]="['./MatchesCWList']" class="nav-link">{{'matches.cw.title' | i18n}}</a>
    </nav>
    <router-outlet></router-outlet>`,
})

@RouteConfig([
    new AsyncRoute({ path: '/list', name: 'MatchesList', loader: () => require('es6-promise!./matches-list')('MatchesList'), useAsDefault: true }),
    new AsyncRoute({ path: '/clanwars', name: 'MatchesCWList', loader: () => require('es6-promise!./matches-list-cw')('MatchesListCW') }),
    new AsyncRoute({ path: '/:match', name: 'MatchesDetail', loader: () => require('es6-promise!./matches-detail')('MatchesDetail') })
])

export class Matches {
    constructor (private _store :Store) { }
}
