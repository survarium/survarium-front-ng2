import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { ClansService } from '../../services/api'
import TitleService from '../../services/title'
import Clan from '../../components.common/clan/clan'
import Percent from '../../components.common/percent/percent'
import DataGrid from '../../components.common/data-grid/data-grid'
import { I18N } from '../../services/i18n'

@Component({
    selector: 'clans-list',
    template: require('./clans-list.html'),
    styles: [require('./clans-list.styl')]
})

export class ClansList implements AfterViewInit {
    data :any[];

    private columns :any[] = [];
    private showCW  :boolean = false;
    private get modeText () {
        return this._sanitizer.bypassSecurityTrustHtml(this.i18n.get(this.showCW ? 'clans.listCWDescription' : 'clans.listDescription'));
    }

    private streamOnSuccess () {
        this._title.setRendered();
    }

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

    @ViewChildren(DataGrid) private elList :QueryList<DataGrid>;

    constructor(private _clansService :ClansService,
                private _title :TitleService,
                private i18n :I18N,
                private _sanitizer :DomSanitizer) {

        this.stream = this.stream.bind(this);
        this.streamOnSuccess = this.streamOnSuccess.bind(this);

        this._title.setTitle(i18n.get('clans.docTitle'));
        this._title.setDescription(i18n.get('clans.docDescription'));

        this.columns = [
            {
                title: '№',
                number: true,
                width: 70
            },
            {
                title: i18n.get('clans.one'),
                component: Clan,
                inputs: { abbr: 'abbr', name: 'name', nowrap: { useValue: true} },
                width: 110,
                sort: { 'abbr': { default: 1 } },
                classes: 'blockLink'
            }, {
                title: i18n.get('elo'),
                field: 'elo',
                width: 70,
                sort: { 'elo': { value: -1 } },
                classes: 'center'
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
                sort: { 'total.scoreAvg': { } },
                classes: 'center'
            }, {
                title: i18n.get('kills'),
                field: 'total.kills',
                width: 90,
                sort: { 'total.kills': { } },
                classes: 'center'
            }, {
                title: i18n.get('dies'),
                field: 'total.dies',
                width: 90,
                sort: { 'total.dies': { } },
                classes: 'center'
            }, {
                title: i18n.get('kd'),
                field: 'total.kd',
                width: 60,
                sort: { 'total.kd': { } },
                classes: 'nowrap center'
            }, {
                title: i18n.get('wins'),
                field: 'total.victories',
                width: 70,
                sort: { 'total.victories': { } },
                classes: 'center'
            }, {
                title: i18n.get('matches.list'),
                field: 'total.matches',
                width: 70,
                sort: { 'total.matches': { } },
                classes: 'center'
            }, {
                title: i18n.get('winrate'),
                component: Percent,
                inputs: { number: 'total.winRate' },
                width: 90,
                sort: { 'total.winRate': { } },
                classes: 'center'
            }, {
                title: i18n.get('headshots'),
                field: 'total.headshots',
                sort: { 'total.headshots': { } },
                classes: 'center'
            }, {
                title: i18n.get('grenadeKills'),
                field: 'total.grenadeKills',
                sort: { 'total.grenadeKills': { } },
                classes: 'center'
            }, {
                title: i18n.get('meleeKills'),
                field: 'total.meleeKills',
                sort: { 'total.meleeKills': { } },
                classes: 'center'
            }, {
                title: i18n.get('artefactKills'),
                field: 'total.artefactKills',
                width: 120,
                sort: { 'total.artefactKills': { } },
                classes: 'center'
            }, {
                title: i18n.get('artefactUses'),
                field: 'total.artefactUses',
                width: 120,
                sort: { 'total.artefactUses': { } },
                classes: 'center'
            }, {
                title: i18n.get('pointCaptures'),
                field: 'total.pointCaptures',
                sort: { 'total.pointCaptures': { } },
                classes: 'center'
            }, {
                title: i18n.get('boxesBringed'),
                field: 'total.boxesBringed',
                sort: { 'total.boxesBringed': { } },
                classes: 'center'
            }
        ];
    }

    ngAfterViewInit() {
        this.grid = this.elList.first;
    }
}
