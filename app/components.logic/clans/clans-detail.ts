import { Component, Inject } from 'angular2/core'
import { RouteParams } from 'angular2/router'
import { ClansService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'
import { I18N } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'
import Counts from './clans-detail-counts'
import Players from './clans-detail-players'

@Component({
    selector: 'clans-detail',
    pipes: [I18NPipe],
    directives: [Counts, Players],
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

    constructor(private _routeParams:RouteParams,
                private _clansService:ClansService,
                private _title:TitleService,
                private _store:Store) {

        this.name = this._routeParams.get('abbr').trim();

        this._clansService
            .fetch(this.name)
            .subscribe(data => {
                this.data = data;
                this.show = true;
                this._title.setTitle(this.data.abbr);
                this._store.clans.add(this.data.abbr);
            }, err => {
                this.error = JSON.stringify(err, null, 4);
            });
    }
}
