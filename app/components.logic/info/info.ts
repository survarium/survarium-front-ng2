import { Component, Inject } from 'angular2/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, AsyncRoute } from 'angular2/router'
import Store from '../../services/store'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'info',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    pipes: [I18NPipe],
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: `<nav>
      <a [routerLink]="['./DevMessages']" class="nav-link">{{'info.messages.title' | i18n}}</a>
    </nav>
    <router-outlet></router-outlet>`,
})

@RouteConfig([
    new AsyncRoute({ path: '/messages', loader: () => require('es6-promise!./dev-messages')('DevMessages'), name: 'DevMessages', useAsDefault: true })
])

export class Info {
}
