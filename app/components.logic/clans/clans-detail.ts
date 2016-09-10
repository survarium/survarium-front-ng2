import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { ClansService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'
import { i18n } from '../../services/i18n'

@Component({
    selector: 'clans-detail',
    template: require('./clans-detail.html'),
    styles: [require('./clans-detail.styl')]
})

export class ClansDetail implements OnInit, OnDestroy {
    private name  :string;
    private data  :any = {};
    private error :any;

    private show :boolean = false;

    private isPublic = true;

    private get nav () {
        return this.data.total && this.data.total.matches;
    };

    private get total () {
        if (!this.data) {
            return;
        }
        return this.isPublic ? this.data.totalPublic : this.data.total;
    };

    setPublic () {
        this.isPublic = true;
    }

    setCW () {
        this.isPublic = false;
    }

    private jsonLD :SafeHtml;

    private setJsonLD(data :any) {
        return this.jsonLD = this._sanitizer.bypassSecurityTrustHtml(`<script type="application/ld+json">
            {
              "@context": "http://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://survarium.pro/clans",
                  "name": "Clans"
                }
              },{
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://survarium.pro/clans/${data.abbr}",
                  "name": ${data.abbr}
                }
              }]
            }
            </script>`);
    }

    constructor(private route :ActivatedRoute,
                private _clansService :ClansService,
                private _title :TitleService,
                private _store :Store,
                private _sanitizer :DomSanitizer) {
    }

    private dataSubscriber :any;

    private getClan (abbr :string) {
        this.cleanup();

        this.name = abbr;

        this.dataSubscriber = this._clansService
            .fetch(this.name)
            .subscribe(data => {
                this.data = data;
                this.setJsonLD(this.data);
                this.show = true;
                this._title.setTitle(this.data.abbr);
                this._title.setDescription(i18n.get('clans.docDescriptionOne').replace(`{{abbr}}`, this.data.abbr));
                this._store.clans.add(this.data.abbr);
            }, err => {
                this.error = JSON.stringify(err, null, 4);
            });
    }

    private cleanup () {
        this.show = false;
        this.error = null;
        this.isPublic = true;

        if (this.dataSubscriber) {
            this.dataSubscriber.unsubscribe();
        }
    }

    private routerSubscriber :any;

    ngOnInit () {
        this.routerSubscriber = this.route.params.map(params => params['abbr'].trim())
            .subscribe(this.getClan.bind(this));
    }

    ngOnDestroy () {
        this.routerSubscriber.unsubscribe();
        this.cleanup();
    }
}
