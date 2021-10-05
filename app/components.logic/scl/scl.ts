import { Component } from '@angular/core'

@Component({
    selector: 'scl',
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: `<nav>
      <a routerLink="scl2" class="nav-link" routerLinkActive="router-link-active">{{'scl.scl2.title' | i18n}}</a>
      <a routerLink="scl1" class="nav-link" routerLinkActive="router-link-active">{{'scl.scl1.title' | i18n}}</a>
      <a class="nav-link" target="_blank" href="https://{{'scl.discord.url' | i18n}}">
            <span>{{'scl.discord.text' | i18n}}</span>
      </a>
    </nav>
    <router-outlet></router-outlet>`,
})

export class Scl {}
