import { Component, Inject } from 'angular2/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES } from 'angular2/router'
import { PlayersListComponent } from './players-list.component';
import { PlayersDetailComponent } from './players-detail.component';
import Store from '../../services/store'

@Component({
    selector: 'players',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    styles: [
        `
        .nav-link { display: inline-block; padding: .5em; }
        `
    ],
    template: `
     <nav>
      <a [routerLink]="['./PlayersList']" class="nav-link">List</a>
      <a *ngFor="#player of players" [routerLink]="['./PlayersDetail', { nickname: player }]" class="nav-link">{{player}}</a>
    </nav>
    <router-outlet></router-outlet>`,
})

@RouteConfig([
    { path: '/', name: 'PlayersList', component: PlayersListComponent, useAsDefault: true },
    { path: '/:nickname', name: 'PlayersDetail', component: PlayersDetailComponent }
])

export class PlayersComponent {
    get players() {
        return this._store.players.items;
    }

    constructor(private _store:Store) { }
}
