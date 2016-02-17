import { Component, Inject, OnInit } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { RouteParams } from 'angular2/router'
import { PlayersService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'
import Counts from './players-detail-counts.component'

@Component({
    selector: 'players-detail',
    directives: [NgIf, Counts],
    providers: [],
    template: `
        <div *ngIf="!show">Loading...</div>
        <pre *ngIf="error">{{error}}</pre>
        <div *ngIf="show">
            <h1>
                <a *ngIf="data.clan" class="player__clan" title="{{data.clan.name}}">[{{data.clan.abbr}}]</a>
                {{data.nickname}}
            </h1>
            <players-detail-counts [data]="data"></players-detail-counts>
        </div>
    `
})

export class PlayersDetailComponent implements OnInit {
    private name  :string;
    private data  :any = {};
    private error :any;

    private show :boolean = false;
    private columnDefs :any[];

    constructor(private _routeParams:RouteParams,
                private _playerService:PlayersService,
                private _title:TitleService,
                private _store:Store) { }

    ngOnInit():any {
        this.name = this._routeParams.get('nickname').trim();
        this._playerService.fetch(this.name)
            .subscribe(data => {
                this.data = data;
                this.show = true;
                this._title.setTitle(this.data.nickname);
                this._store.players.add(this.data.nickname);
            }, err => {
                this.error = JSON.stringify(err, null, 4);
            });

        let lang = 'english';

        this.columnDefs = [
            {headerName: "Date", field: "date"},
            {headerName: "Map", field: `map.lang.${lang}.name`},
            {headerName: "Mode", field: `map.lang.${lang}.mode`},
            {headerName: "Level", field: "match.level"},
            {headerName: "Win", field: "victory"},
            {headerName: "Kills", field: "kills"},
            {headerName: "Dies", field: "dies"},
            {headerName: "KD", field: "kd", width: 100},
            {headerName: "Score", field: "score", width: 100},
            {headerName: "Headshots", field: "headshots", width: 100},
            {headerName: "GrenadeKills", field: "grenadeKills", width: 100},
            {headerName: "MeleeKills", field: "meleeKills", width: 100},
            {headerName: "ArtefactKills", field: "artefactKills", width: 100},
            {headerName: "ArtefactUses", field: "artefactUses", width: 100},
            {headerName: "PointCaptures", field: "pointCaptures", width: 100},
            {headerName: "BoxesBringed", field: "boxesBringed", width: 100}
        ];
    }
}
