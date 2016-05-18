import { Component } from '@angular/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, AsyncRoute } from '@angular/router-deprecated'
import Store from '../../services/store'
import I18NPipe from '../../pipes/i18n'
import { ClansDetail } from './clans-detail'

@Component({
    selector: 'clans',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    pipes: [I18NPipe],
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: require('./clans.html')
})

@RouteConfig([
    new AsyncRoute({ path: '/search', loader: () => require('es6-promise!./clans-search')('ClansSearch'), name: 'ClansSearch', useAsDefault: true }),
    new AsyncRoute({ path: '/', loader: () => require('es6-promise!./clans-list')('ClansList'), name: 'ClansList' }),
    { path: '/:abbr', component: ClansDetail, name: 'ClansDetail' }
])

export class Clans {
    get clans() {
        return this._store.clans.items;
    }

    constructor (private _store :Store) { }
}
