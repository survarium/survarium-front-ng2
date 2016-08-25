import { Component, Input } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { i18n } from '../../services/i18n'
import { ClansService } from '../../services/api'
import { Nickname } from '../../components.common/nickname/nickname'
import { Percent } from '../../components.common/percent/percent'
import { Role } from '../../components.common/role/role'
import { DateTime } from '../../components.common/datetime/datetime'
import { Elapsed } from '../../components.common/elapsed/elapsed'
import DataGrid from '../../components.common/data-grid/data-grid'

@Component({
    directives: [DataGrid],
    selector: 'clans-detail-players',
    pipes: [I18NPipe],
    template: `<h3>{{'members' | i18n}}</h3><data-grid [stream]="stream" [columns]="columns" [name]="'clan-players'" [limits]="limits"></data-grid>`
})
export class ClansDetailPlayers {
    @Input() clan :any;

    private limits = [15, 30, 50];

    private stream (options ?:any) {
        return this
            ._clansService
            .players(this.clan.abbr, options);
    };

    private columns = [
        {
            title: i18n.get('role'),
            component: Role,
            inputs: { role: 'role' },
            sort: { role: { value: -1 } },
            width: 120,
            classes: 'nowrap'
        },
        {
            title: i18n.get('player'),
            component: Nickname,
            inputs: { nickname: 'nickname', banned: 'banned' },
            width: 220,
            sort: { 'nickname': { default: 1 } },
            classes: 'nowrap'
        }, {
            title: i18n.get('level'),
            field: 'progress.level',
            width: 90,
            sort: { 'progress.experience': { } },
            classes: 'center'
        }, {
            title: i18n.get('elo'),
            field: 'progress.elo',
            width: 70,
            sort: { 'progress.elo': { } },
            classes: 'center'
        }, {
            title: i18n.get('avgScore'),
            field: 'total.scoreAvg',
            name: 'scoreAvg',
            width: 80,
            sort: { 'total.scoreAvg': { } },
            classes: 'center'
        }, {
            title: i18n.get('lastUpdate'),
            width: 125,
            component: DateTime,
            inputs: { date: `updatedAt`, slim: { useValue: true } },
            sort: { 'updatedAt': {  } },
            classes: 'nowrap'
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
            width: 70,
            sort: { 'total.kd': { } },
            classes: 'center nowrap'
        }, {
            title: i18n.get('wins'),
            field: 'total.victories',
            width: 80,
            sort: { 'total.victories': { } },
            classes: 'center'
        }, {
            title: i18n.get('matches.list'),
            field: 'total.matches',
            width: 80,
            sort: { 'total.matches': { } },
            classes: 'center'
        }, {
            title: i18n.get('winrate'),
            component: Percent,
            inputs: { number: 'total.winRate' },
            sort: { 'total.winRate': { } },
            classes: 'center'
        }, {
            title: i18n.get('time'),
            component: Elapsed,
            inputs: { value: 'wasted' },
            sort: { 'wasted': { } },
            classes: 'nowrap'
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

    constructor (private _clansService :ClansService) {
        this.stream = this.stream.bind(this);
    }
}

export default ClansDetailPlayers
