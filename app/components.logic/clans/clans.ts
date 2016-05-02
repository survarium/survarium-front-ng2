import { Component } from 'angular2/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, AsyncRoute } from 'angular2/router'
import Store from '../../services/store'
import I18NPipe from '../../pipes/i18n'

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
    new AsyncRoute({ path: '/:abbr', loader: () => require('es6-promise!./clans-detail')('ClansDetail'), name: 'ClansDetail' })
])

export class Clans {
    get clans() {
        return this._store.clans.items;
    }

    constructor (private _store :Store) { }
}
