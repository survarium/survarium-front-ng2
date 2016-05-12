import { Component, Inject } from '@angular/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, AsyncRoute } from '@angular/router-deprecated'
import Store from '../../services/store'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'info',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    pipes: [I18NPipe],
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: `<nav>
      <a [routerLink]="['./DevMessages']" class="nav-link">{{'info.messages.title' | i18n}}</a>
      <a [routerLink]="['./About']" class="nav-link">{{'about.title' | i18n}}</a>
    </nav>
    <router-outlet></router-outlet>`,
})

@RouteConfig([
    new AsyncRoute({ path: '/messages', loader: () => require('es6-promise!./dev-messages')('DevMessages'), name: 'DevMessages', useAsDefault: true }),
    new AsyncRoute({ path: '/about', loader: () => require('es6-promise!./about')('About'), name: 'About' })
])

export class Info {
}
