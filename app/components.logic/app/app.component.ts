import { Component, ViewEncapsulation } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import { PlayersComponent } from '../players/players.component'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'survarium-stats',
    directives: [
        ROUTER_DIRECTIVES
    ],
    pipes: [I18NPipe],
    styles: [`
        survarium-stats {
            font-smoothing: antialiased;
            position: relative;
            display: block;
        }

        survarium-stats, a, a:visited {
            color: rgba(245, 245, 245, 0.65);
        }`,
        require('./app.css')
    ],
    encapsulation: ViewEncapsulation.None,
    template: `
        <nav class="panes__tabs">
            <a class="panes__tab" [routerLink]="['PlayersList']"><span class="panes__tab_link">{{'players' | i18n}}</span></a>
        </nav>
        <router-outlet class="panes__body"></router-outlet>
    `
})

@RouteConfig([
    { path: '/players/...', name: 'PlayersList', component: PlayersComponent, useAsDefault: true }
])

export class App {

}
