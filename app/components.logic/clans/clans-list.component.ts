import { Component, Inject, ViewQuery, QueryList, ElementRef } from 'angular2/core'
import { Router } from 'angular2/router'
import { Observable } from 'rxjs/Observable'
import { ClansService } from '../../services/api'
import TitleService from '../../services/title'
import Clan from '../../components.common/clan/clan'
import AvgScore from '../../components.common/avg-score/avg-score'
import KD from '../../components.common/kd/kd'
import WinRate from '../../components.common/winrate/winrate'
import DataGrid from '../../components.common/data-grid/data-grid'
import { I18N, I18NPipe } from '../../services/i18n'
import {readdirSync} from "fs";

@Component({
    directives: [DataGrid],
    pipes: [I18NPipe],
    template: require('./clans-list.html'),
    selector: 'clans-list',
    styles: [`data-grid {margin: 2em auto;}`, require('./clans-list.css')]
})

export class ClansListComponent {
    data :any[];

    private columns :any[] = [];
    private showCW  :boolean = true;

    private stream (options ?:any)  {
        options = options || {};
        options.publicStats = !this.showCW;
        var request = this._clansService.list(options);
        if (options.publicStats) {
            return request.map((response) => {
                response.data = response.data.map((item :any) => {
                    item.total = item.totalPublic;
                    return item;
                });
                return response;
            });
        }
        return request;
    }

    private grid: DataGrid;

    private changeMode () {
        this.showCW = !this.showCW;
        this.grid && this.grid.load({ skip: 0 });
    }

    constructor(private _clansService :ClansService,
                private _title :TitleService,
                private i18n :I18N,
                @ViewQuery(DataGrid, { descendants: false }) private elList: QueryList<DataGrid>) {

        this.stream = this.stream.bind(this);

        elList.changes.subscribe(() => this.grid = elList.first);

        this._title.setTitle(i18n.get('clans.list'));

        this.columns = [
            {
                title: i18n.get('clans.one'),
                component: Clan,
                inputs: { abbr: 'abbr', name: 'name' },
                width: 110
            }, {
                title: i18n.get('elo'),
                field: 'elo',
                name: 'elo',
                width: 70
            }, {
                title: i18n.get('level'),
                field: 'level',
                name: 'exp',
                width: 80
            }, {
                title: i18n.get('avgScore'),
                component: AvgScore,
                inputs: { matches: 'total.matches', score: 'total.score' },
                name: 'scoreAvg',
                width: 90
            }, {
                title: i18n.get('kills'),
                field: 'total.kills',
                name: 'kill',
                width: 90
            }, {
                title: i18n.get('dies'),
                field: 'total.dies',
                name: 'die',
                width: 90
            }, {
                title: i18n.get('kd'),
                component: KD,
                inputs: { kills: 'total.kills', dies: 'total.dies' },
                name: 'kd',
                width: 60
            }, {
                title: i18n.get('wins'),
                field: 'total.victories',
                name: 'win',
                width: 70
            }, {
                title: i18n.get('matches.list'),
                field: 'total.matches',
                name: 'match',
                width: 70
            }, {
                title: i18n.get('winrate'),
                component: WinRate,
                inputs: { matches: 'total.matches', victories: 'total.victories' },
                width: 90
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
    }
}
