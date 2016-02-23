import { Component, Inject, OnInit } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { RouteParams } from 'angular2/router'
import { ClansService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'
import { I18N, I18NPipe } from '../../services/i18n'

@Component({
    selector: 'clanss-detail',
    directives: [NgIf],
    pipes: [I18NPipe],
    template: `
        <div *ngIf="!show">{{'loading' | i18n}}</div>
        <pre *ngIf="error">{{error}}</pre>
        <div *ngIf="show">
            CLAN INFO
        </div>
    `,
    styles: []
})

export class ClansDetailComponent implements OnInit {
    private name  :string;
    private data  :any = {};
    private error :any;

    private show :boolean = false;

    constructor(private _routeParams:RouteParams,
                private _clansService:ClansService,
                private _title:TitleService,
                private _store:Store) { }

    ngOnInit() {
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
