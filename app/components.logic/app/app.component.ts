import { Component, ViewEncapsulation, Inject, ViewContainerRef } from '@angular/core'
//import { RouteConfig, AsyncRoute } from '@angular/router-deprecated'
/*import { Home } from '../home/home'
import { Players } from '../players/players'
import { Matches } from '../matches/matches'
import { Clans } from '../clans/clans'
import { Streams } from '../streams/streams'
import { Info } from '../info/info'*/
import { Error404 } from '../errors/404'

@Component({
    selector: 'survarium-stats',
    styles: [require('./app.styl')],
    encapsulation: ViewEncapsulation.None,
    template: require('./app.html')
})

/*@RouteConfig([
    new AsyncRoute({ path: '/', loader: () => require('es6-promise!../home/home')('Home'), name: 'Home', useAsDefault: true }),
    /!*{ path: '/players/...', name: 'Players', component: Players },
    { path: '/matches/...', name: 'Matches', component: Matches },
    { path: '/clans/...', name: 'Clans', component: Clans },
    { path: '/streams/...', name: 'Streams', component: Streams },
    { path: '/info/...', name: 'Info', component: Info },*!/
    new AsyncRoute({ path: '/players/...', name: 'Players', loader: () => require('es6-promise!../players/players')('Players') }),
    new AsyncRoute({ path: '/matches/...', name: 'Matches', loader: () => require('es6-promise!../matches/matches')('Matches') }),
    //new AsyncRoute({ path: '/clans/...',   name: 'Clans',   loader: () => require('es6-promise!../clans/clans')('Clans') }),
    new AsyncRoute({ path: '/streams/...', name: 'Streams', loader: () => require('es6-promise!../streams/streams')('Streams') }),
    new AsyncRoute({ path: '/info/...',    name: 'Info',    loader: () => require('es6-promise!../info/info')('Info') }),
    new AsyncRoute({ path: '/armory/...',  name: 'Armory',  loader: () => require('es6-promise!../armory/armory')('Armory') }),
    { path: '/!**', name: 'Error-404', component: Error404 }
])*/

export class App {
    constructor (@Inject('CONFIG') private config, public viewRef :ViewContainerRef) {}
}
