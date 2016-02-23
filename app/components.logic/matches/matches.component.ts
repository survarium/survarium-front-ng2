import { Component, Inject } from 'angular2/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES } from 'angular2/router'
import { MatchesListComponent } from './matches-list.component';
import { MatchesListCWComponent } from './matches-list-cw.component';
import { MatchesDetailComponent } from './matches-detail.component';
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
    { path: '/list', name: 'MatchesList', component: MatchesListComponent, useAsDefault: true },
    { path: '/cw', name: 'MatchesCWList', component: MatchesListCWComponent },
    { path: '/:match', name: 'MatchesDetail', component: MatchesDetailComponent }
])

export class MatchesComponent {
    constructor (private _store :Store) { }
}
