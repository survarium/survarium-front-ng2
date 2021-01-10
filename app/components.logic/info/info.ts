import { Component } from '@angular/core'

@Component({
    selector: 'info',
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: `<nav>
      <a routerLink="messages" class="nav-link" routerLinkActive="router-link-active">{{'info.messages.title' | i18n}}</a>
      <a routerLink="about" class="nav-link" routerLinkActive="router-link-active">{{'about.title' | i18n}}</a>
    </nav>
    <router-outlet></router-outlet>`,
})

export class Info {}
