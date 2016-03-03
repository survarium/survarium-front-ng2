import { Component, Inject, ViewQuery, QueryList, ElementRef } from 'angular2/core'
import { Router } from 'angular2/router'
import { Observable } from 'rxjs/Observable'
import { ClansService } from '../../services/api'
import TitleService from '../../services/title'
import Clan from '../../components.common/clan/clan'
import Percent from '../../components.common/percent/percent'
import KD from '../../components.common/kd/kd'
import WinRate from '../../components.common/winrate/winrate'
import DataGrid from '../../components.common/data-grid/data-grid'
import { I18N } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    directives: [DataGrid],
    pipes: [I18NPipe],
    template: require('./clans-list.html'),
    selector: 'clans-list',
    styles: [require('./clans-list.styl')]
})

export class ClansList {
    data :any[];

    private columns :any[] = [];
    private showCW  :boolean = false;

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

        this._title.setTitle(i18n.get('clans.docTitle'));

        this.columns = [
            {
                title: '№',
                number: true,
                width: 70
            },
            {
                title: i18n.get('clans.one'),
                component: Clan,
                inputs: { abbr: 'abbr', name: 'name' },
                width: 110,
                sort: { 'abbr': { _default: 1 } }
            }, {
                title: i18n.get('elo'),
                field: 'elo',
                width: 70,
                sort: { 'elo': { value: -1 } }
            }, {
                title: i18n.get('level'),
                field: 'level',
                width: 80,
                sort: { 'elo': { } },
                classes: 'center'
            }, {
                title: i18n.get('avgScore'),
                field: 'total.scoreAvg',
                width: 90,
                sort: { 'total.scoreAvg': { } }
            }, {
                title: i18n.get('kills'),
                field: 'total.kills',
                width: 90,
                sort: { 'total.kills': { } }
            }, {
                title: i18n.get('dies'),
                field: 'total.dies',
                width: 90,
                sort: { 'total.dies': { } }
            }, {
                title: i18n.get('kd'),
                field: 'total.kd',
                width: 60,
                sort: { 'total.kd': { } }
            }, {
                title: i18n.get('wins'),
                field: 'total.victories',
                width: 70,
                sort: { 'total.victories': { } }
            }, {
                title: i18n.get('matches.list'),
                field: 'total.matches',
                width: 70,
                sort: { 'total.matches': { } }
            }, {
                title: i18n.get('winrate'),
                component: Percent,
                inputs: { number: 'total.winRate' },
                width: 90,
                sort: { 'total.winRate': { } }
            }, {
                title: i18n.get('headshots'),
                field: 'total.headshots',
                sort: { 'total.headshots': { } }
            }, {
                title: i18n.get('grenadeKills'),
                field: 'total.grenadeKills',
                sort: { 'total.grenadeKills': { } }
            }, {
                title: i18n.get('meleeKills'),
                field: 'total.meleeKills',
                sort: { 'total.meleeKills': { } }
            }, {
                title: i18n.get('artefactKills'),
                field: 'total.artefactKills',
                width: 120,
                sort: { 'total.artefactKills': { } }
            }, {
                title: i18n.get('artefactUses'),
                field: 'total.artefactUses',
                width: 120,
                sort: { 'total.artefactUses': { } }
            }, {
                title: i18n.get('pointCaptures'),
                field: 'total.pointCaptures',
                sort: { 'total.pointCaptures': { } }
            }, {
                title: i18n.get('boxesBringed'),
                field: 'total.boxesBringed',
                sort: { 'total.boxesBringed': { } }
            }
        ];
    }
}
