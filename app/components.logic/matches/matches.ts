import { Component } from '@angular/core'
//import { RouteConfig, AsyncRoute } from '@angular/router-deprecated'
import Store from '../../services/store'
import { MatchesDetail } from './matches-detail'

@Component({
    selector: 'matches',
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: require('./matches.html')
})

/*@RouteConfig([
    new AsyncRoute({ path: '/search', name: 'MatchesSearch', loader: () => require('es6-promise!./matches-search')('MatchesSearch'), useAsDefault: true }),
    new AsyncRoute({ path: '/list', name: 'MatchesList', loader: () => require('es6-promise!./matches-list')('MatchesList') }),
    new AsyncRoute({ path: '/clanwars', name: 'MatchesCWList', loader: () => require('es6-promise!./matches-list-cw')('MatchesListCW') }),
    { path: '/:match', name: 'MatchesDetail', component: MatchesDetail }
])*/

export class Matches {
    get matches() {
        return this._store.matches.items;
    }

    constructor (private _store :Store) { }
}
