import { Component, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'

const DATA :any = require('./pve.json');

@Component({
    selector: 'pve',
    template: require('./pve.html'),
    styles: [require('./pve.styl')]
})

export class Pve implements OnDestroy {
    private missions = DATA;
    private links :string[];
    private routeSubscriptions;

    constructor (private router :Router, private activatedRoute :ActivatedRoute) {
        this.links = Object.keys(this.missions);

        this.routeSubscriptions = this.router.events.filter(e => e instanceof NavigationEnd).subscribe((e :NavigationEnd) => {
            if (e.url.match(/pve(\/)?$/)) {
                this.redirectToPage();
            }
        });
    }

    redirectToPage() {
        this.router.navigate([this.links[0]], { relativeTo: this.activatedRoute });
    }

    ngOnDestroy () {
        this.routeSubscriptions.unsubscribe();
    }
}
