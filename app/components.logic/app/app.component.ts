import { Component, ViewEncapsulation } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import { PlayersComponent } from '../players/players.component'
import { MatchesComponent } from '../matches/matches.component'
import { ClansComponent } from '../clans/clans.component'
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
            <a class="panes__tab" [routerLink]="['MatchesList']"><span class="panes__tab_link">{{'matches.list' | i18n}}</span></a>
            <a class="panes__tab" [routerLink]="['ClansList']"><span class="panes__tab_link">{{'clans.list' | i18n}}</span></a>
        </nav>
        <router-outlet class="panes__body"></router-outlet>
    `
})

@RouteConfig([
    { path: '/players/...', name: 'PlayersList', component: PlayersComponent, useAsDefault: true },
    { path: '/matches/...', name: 'MatchesList', component: MatchesComponent },
    { path: '/clans/...', name: 'ClansList', component: ClansComponent }
])

export class App {

}
