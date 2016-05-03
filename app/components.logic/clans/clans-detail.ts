import { Component } from 'angular2/core'
import { RouteParams } from 'angular2/router'
import { ClansService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'
import { i18n } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'
import Counts from './clans-detail-counts'
import Players from './clans-detail-players'
import Matches from './clans-detail-matches'
import Clanwars from './clans-detail-clanwars'

@Component({
    selector: 'clans-detail',
    pipes: [I18NPipe],
    directives: [Counts, Players, Matches, Clanwars],
    template: require('./clans-detail.html'),
    styles: [require('./clans-detail.styl')]
})

export class ClansDetail {
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

    private jsonLD :string;

    private setJsonLD(data :any) {
        return this.jsonLD = `<script type="application/ld+json">
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
            </script>`;
    }

    constructor(private _routeParams:RouteParams,
                private _clansService:ClansService,
                private _title:TitleService,
                private _store:Store) {

        this.name = this._routeParams.get('abbr').trim();

        this._clansService
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
}
