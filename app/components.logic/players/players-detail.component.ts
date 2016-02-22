import { Component, Inject, OnInit } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { RouteParams } from 'angular2/router'
import { PlayersService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'
import Counts from './players-detail-counts.component'
import Matches from './players-detail-matches.component'
import Nickname from '../../components.common/nickname/nickname'
import { I18N, I18NPipe } from '../../services/i18n'

@Component({
    selector: 'players-detail',
    directives: [NgIf, Counts, Nickname, Matches],
    pipes: [I18NPipe],
    template: `
        <div *ngIf="!show">{{'loading' | i18n}}</div>
        <pre *ngIf="error">{{error}}</pre>
        <div *ngIf="show">
            <nickname [nickname]="data.nickname" [clan]="data.clan"></nickname>
            <players-detail-counts [data]="data"></players-detail-counts>
            <players-detail-matches [data]="matches" [lang]="lang"></players-detail-matches>
        </div>
    `,
    styles: [`
        nickname {
            font-size: 2em;
            font-weight: 700;
        }

        nickname .name {
            color: #ffce1f;
            text-decoration: none;
        }

        players-detail-matches {
            margin: 2em auto;
        }
    `]
})

export class PlayersDetailComponent implements OnInit {
    private name  :string;
    private data  :any = {};
    private error :any;

    private show :boolean = false;
    private lang :string = 'english';
    private matches :any[] = [];

    constructor(private _routeParams:RouteParams,
                private _playerService:PlayersService,
                private _title:TitleService,
                private _store:Store) { }

    ngOnInit() {
        this.name = this._routeParams.get('nickname').trim();
        this._playerService
            .fetch(this.name)
            .subscribe(data => {
                this.data = data;
                this.matches = data.stats;
                this.show = true;
                this._title.setTitle(this.data.nickname);
                this._store.players.add(this.data.nickname);
            }, err => {
                this.error = JSON.stringify(err, null, 4);
            });
    }
}
