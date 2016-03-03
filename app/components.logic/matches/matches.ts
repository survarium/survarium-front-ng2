import { Component, Inject } from 'angular2/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, AsyncRoute } from 'angular2/router'
import Store from '../../services/store'
import I18NPipe from '../../pipes/i18n'
//import { MatchesList } from './matches-list'
//import { MatchesListCW } from './matches-list-cw'
//import { MatchesDetail } from './matches-detail'

@Component({
    selector: 'matches',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    pipes: [I18NPipe],
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: `<nav>
      <a [routerLink]="['./MatchesList']" class="nav-link">{{'matches.list' | i18n}}</a>
      <a [routerLink]="['./MatchesCWList']" class="nav-link">{{'matches.cw.title' | i18n}}</a>
    </nav>
    <router-outlet></router-outlet>`,
})

@RouteConfig([
    /*{ path: '/', name: 'MatchesList', component: MatchesList, useAsDefault: true },
    { path: '../clanwars', name: 'MatchesCWList', component: MatchesListCW },
    { path: '/:match', name: 'MatchesDetail', component: MatchesDetail }*/
    new AsyncRoute({ path: '/list', name: 'MatchesList', loader: () => require('es6-promise!./matches-list')('MatchesList'), useAsDefault: true }),
    new AsyncRoute({ path: '../clanwars', name: 'MatchesCWList', loader: () => require('es6-promise!./matches-list-cw')('MatchesListCW') }),
    new AsyncRoute({ path: '/:match', name: 'MatchesDetail', loader: () => require('es6-promise!./matches-detail')('MatchesDetail') })
])

export class Matches {
    constructor (private _store :Store) { }
}
