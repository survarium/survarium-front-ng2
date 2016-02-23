import { Component, Inject } from 'angular2/core'
import { Router } from 'angular2/router'
import { Observable } from 'rxjs/Observable'
import { PlayersService } from '../../services/api'
import TitleService from '../../services/title'
import Nickname from '../../components.common/nickname/nickname'
import Percent from '../../components.common/percent/percent'
import DataGrid from '../../components.common/data-grid/data-grid'
import { I18N, I18NPipe } from '../../services/i18n'

@Component({
    directives: [DataGrid],
    pipes: [I18NPipe],
    template: `<div *ngIf="!data">{{'loading' | i18n}}</div><data-grid *ngIf="data" [data]="data" [columns]="columns"></data-grid>`,
    selector: 'players-list',
    styles: [`
        data-grid {
            margin: 2em auto;
        }
    `]
})

export class PlayersListComponent {
    data:any[];

    private columns:any[] = [];

    constructor(private _router:Router,
                private _playerService:PlayersService,
                private _title:TitleService,
                private i18n:I18N) {
        this._title.setTitle(i18n.get('players:list'));

        this.columns = [
            {
                title: i18n.get('player'),
                component: Nickname,
                inputs: {nickname: 'nickname', clan: 'clan'},
                width: 200
            }, {
                title: i18n.get('level'),
                field: 'progress.level',
                name: 'exp'
            }, {
                title: i18n.get('avgScore'),
                field: 'total.scoreAvg',
                name: 'scoreAvg'
            }, {
                title: i18n.get('kills'),
                field: 'total.kills',
                name: 'kill'
            }, {
                title: i18n.get('dies'),
                field: 'total.dies',
                name: 'die'
            }, {
                title: i18n.get('kd'),
                field: 'total.kd',
                name: 'kd'
            }, {
                title: i18n.get('wins'),
                field: 'total.victories',
                name: 'win'
            }, {
                title: i18n.get('matches.list'),
                field: 'total.matches',
                name: 'match'
            }, {
                title: i18n.get('winrate'),
                component: Percent,
                inputs: {number: 'total.winRate'}
            }, {
                title: i18n.get('headshots'),
                name: 'hs',
                field: 'total.headshots'
            }, {
                title: i18n.get('grenadeKills'),
                name: 'gk',
                field: 'total.grenadeKills'
            }, {
                title: i18n.get('meleeKills'),
                name: 'mk',
                field: 'total.meleeKills'
            }, {
                title: i18n.get('artefactKills'),
                name: 'ak',
                field: 'total.artefactKills',
                width: 120
            }, {
                title: i18n.get('artefactUses'),
                name: 'au',
                field: 'total.artefactUses',
                width: 120
            }, {
                title: i18n.get('pointCaptures'),
                field: 'total.pointCaptures'
            }, {
                title: i18n.get('boxesBringed'),
                name: 'box',
                field: 'total.boxesBringed'
            }
        ];

        this._playerService.list().subscribe((data:{ data: any[], total :number }) => {
            console.log(data);
            return this.data = data.data;
        }, (err) => {
            console.error(err);
        });
    }
}
