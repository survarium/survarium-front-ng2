import { Component, Inject } from 'angular2/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, AsyncRoute } from 'angular2/router'
import Store from '../../services/store'
import I18NPipe from '../../pipes/i18n'
import { ClansList } from './clans-list'
import { ClansDetail } from './clans-detail'

@Component({
    selector: 'clans',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    pipes: [I18NPipe],
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: `<nav>
      <!--<a [routerLink]="['./PlayersSearch']" class="nav-link">{{'clans:search' | i18n}}</a>-->
      <a [routerLink]="['./ClansList']" class="nav-link">{{'clans.list' | i18n}}</a>
      <a *ngFor="#clan of clans" [routerLink]="['./ClansDetail', { abbr: clan }]" class="nav-link">{{clan}}</a>
    </nav>
    <router-outlet></router-outlet>`,
})


@RouteConfig([
    //{ path: '/search', name: 'PlayersSearch', component: PlayersSearchComponent, useAsDefault: true },
    { path: '/', component: ClansList, name: 'ClansList', useAsDefault: true },
    { path: '/:abbr', component: ClansDetail, name: 'ClansDetail' }/*
    new AsyncRoute({ path: '/', loader: () => require('es6-promise!./clans-list')('ClansList'), name: 'ClansList', useAsDefault: true }),
    new AsyncRoute({ path: '/:abbr', loader: () => require('es6-promise!./clans-detail')('ClansDetail'), name: 'ClansDetail' })*/
])

export class Clans {
    get clans() {
        return this._store.clans.items;
    }

    constructor (private _store :Store) { }
}
