import { Component, ViewEncapsulation } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import { Players } from '../players/players'
import { Matches } from '../matches/matches'
import { Clans } from '../clans/clans'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'survarium-stats',
    directives: [
        ROUTER_DIRECTIVES
    ],
    pipes: [I18NPipe],
    styles: [require('./app.styl')],
    encapsulation: ViewEncapsulation.None,
    template: require('./app.html')
})

@RouteConfig([
    { path: '/players/...', name: 'PlayersList', component: Players, useAsDefault: true },
    { path: '/matches/...', name: 'MatchesList', component: Matches },
    { path: '/clans/...', name: 'ClansList', component: Clans }
])

export class App {

}
