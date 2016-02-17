import { Component, ViewEncapsulation } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import { PlayersComponent } from '../players/players.component'

@Component({
    selector: 'survarium-stats',
    directives: [
        ROUTER_DIRECTIVES
    ],
    styles: [
        /* global non-incapsulated styles */
        `
        survarium-stats {
          font-smoothing: antialiased;
          position: relative;
          display: block;
        }

        survarium-stats, a, a:visited {
            color: rgba(245, 245, 245, 0.65);
        }
        `,
        `
        .def-list {
          display: inline-block;
          margin: 1em auto 1em 0;
        }

        .def-list__title {
            background: rgba(245, 245, 245, 0.1);
            color: #f5f5f5;
            line-height: 3em;
            padding-left: 1.3em;
            font-size: 1.2em;
            border-radius: 1px;
            margin-bottom: 1px;
            text-transform: uppercase;
            font-weight: 700;
        }

        .def-list__values {
            position: relative;
            background: rgba(245, 245, 245, 0.05);
            margin-top: 1px;
            padding-left: 1.3em;
            border-radius: 3px;
        }

        .def-list:nth-of-type(1n + 1) {
            margin-right: 1em;
        }

        .def-list:last-of-type {
            margin-right: .5em;
        }

        .def-list__term {
            text-transform: uppercase;
        }

        .def-list__desc {
            margin-left: 0;
        }

        .def-list__desc::before {
              content: '';
              display: block;
              border-top: 1px solid rgba(245, 245, 245, .2);
              margin: .2em 0;
        }
        `
    ],
    encapsulation: ViewEncapsulation.None,
    template: `
        <nav>
            <a [routerLink]="['PlayersList']">Players</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

@RouteConfig([
    { path: '/players/...', name: 'PlayersList', component: PlayersComponent, useAsDefault: true }
])

export class App {

}
