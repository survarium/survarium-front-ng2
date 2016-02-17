import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import { PlayersComponent } from '../players/players.component'

@Component({
    selector: 'survarium-stats',
    directives: [
        ROUTER_DIRECTIVES
    ],
    template: `
        <nav>
            <a [routerLink]="['PlayersList']">Players</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

@RouteConfig([
    { path: '/players/...', name: 'PlayersList', component: PlayersComponent, useAsDefault: true }
])

export class App {

}
