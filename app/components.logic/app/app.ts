import { Component, ViewEncapsulation } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import { Players } from '../players/players'
import { Matches } from '../matches/matches'
import { Clans } from '../clans/clans'
import { Streams } from '../streams/streams'
import { Info } from '../info/info'
import { LangSwitcher } from '../../components.common/lang-switcher/lang-switcher'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'home',
    template: `Home`
})

export class Home {}

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
    //{ path: '/', name: 'Home', component: Home/*, useAsDefault: true*/ },
    { path: '/players/...', name: 'Players', component: Players, useAsDefault: true },
    { path: '/matches/...', name: 'Matches', component: Matches },
    { path: '/clans/...', name: 'Clans', component: Clans },
    { path: '/streams/...', name: 'Streams', component: Streams },
    { path: '/info/...', name: 'Info', component: Info }
])

export class App {}
