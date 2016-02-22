import { Component, Inject } from 'angular2/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES } from 'angular2/router'
import { PlayersSearchComponent } from './players-search.component';
import { PlayersListComponent } from './players-list.component';
import { PlayersDetailComponent } from './players-detail.component';
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
      <a [routerLink]="['./PlayersSearch']" class="nav-link">{{'players:search' | i18n}}</a>
      <a [routerLink]="['./PlayersList']" class="nav-link">{{'players:list' | i18n}}</a>
      <a *ngFor="#player of players" [routerLink]="['./PlayersDetail', { nickname: player }]" class="nav-link">{{player}}</a>
    </nav>
    <router-outlet></router-outlet>`,
})

@RouteConfig([
    { path: '/search', name: 'PlayersSearch', component: PlayersSearchComponent, useAsDefault: true },
    { path: '/', name: 'PlayersList', component: PlayersListComponent },
    { path: '/:nickname', name: 'PlayersDetail', component: PlayersDetailComponent }
])

export class PlayersComponent {
    get players() {
        return this._store.players.items;
    }

    constructor (private _store :Store) { }
}
