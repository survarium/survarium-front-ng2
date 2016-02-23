import { Component, Inject } from 'angular2/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES } from 'angular2/router'
import { ClansListComponent } from './clans-list.component'
import { ClansDetailComponent } from './clans-detail.component'
import Store from '../../services/store'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'clans',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    pipes: [I18NPipe],
    styles: [
        `
        .nav-link { display: inline-block; padding: .5em; }
        `
    ],
    template: `
     <nav>
      <!--<a [routerLink]="['./PlayersSearch']" class="nav-link">{{'clans:search' | i18n}}</a>-->
      <a [routerLink]="['./ClansList']" class="nav-link">{{'clans.list' | i18n}}</a>
      <a *ngFor="#clan of clans" [routerLink]="['./ClansDetail', { abbr: clan }]" class="nav-link">{{clan}}</a>
    </nav>
    <router-outlet></router-outlet>`,
})

@RouteConfig([
    //{ path: '/search', name: 'PlayersSearch', component: PlayersSearchComponent, useAsDefault: true },
    { path: '/', name: 'ClansList', component: ClansListComponent, useAsDefault: true },
    { path: '/:abbr', name: 'ClansDetail', component: ClansDetailComponent }
])

export class ClansComponent {
    get clans() {
        return this._store.clans.items;
    }

    constructor (private _store :Store) { }
}
