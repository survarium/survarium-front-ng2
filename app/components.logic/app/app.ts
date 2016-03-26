import { Component, ViewEncapsulation, Inject } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES, AsyncRoute } from 'angular2/router'
import { Home } from '../home/home'
import { Players } from '../players/players'
import { Matches } from '../matches/matches'
import { Clans } from '../clans/clans'
import { Streams } from '../streams/streams'
import { Info } from '../info/info'
import { Error404 } from '../errors/404'
import { LangSwitcher } from '../../components.common/lang-switcher/lang-switcher'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'survarium-stats',
    directives: [
        ROUTER_DIRECTIVES,
        LangSwitcher
    ],
    pipes: [I18NPipe],
    styles: [require('./app.styl')],
    encapsulation: ViewEncapsulation.None,
    template: require('./app.html')
})

@RouteConfig([
    new AsyncRoute({ path: '/', loader: () => require('es6-promise!../home/home')('Home'), name: 'Home', useAsDefault: true }),
    { path: '/players/...', name: 'Players', component: Players },
    { path: '/matches/...', name: 'Matches', component: Matches },
    { path: '/clans/...', name: 'Clans', component: Clans },
    { path: '/streams/...', name: 'Streams', component: Streams },
    { path: '/info/...', name: 'Info', component: Info },
    { path: '/**', name: 'Error-404', component: Error404 }
])

export class App {
    constructor (@Inject('CONFIG') private config) {}
}
