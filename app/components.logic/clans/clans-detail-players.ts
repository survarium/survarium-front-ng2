import { Component, Input } from 'angular2/core'
import { I18NPipe } from '../../pipes/i18n'
import { i18n } from '../../services/i18n'
import { ClansService } from '../../services/api'
import { Nickname } from '../../components.common/nickname/nickname'
import { Percent } from '../../components.common/percent/percent'
import { Role } from '../../components.common/role/role'
import DataGrid from '../../components.common/data-grid/data-grid'

@Component({
    directives: [DataGrid],
    selector: 'clans-detail-players',
    pipes: [I18NPipe],
    inputs: ['clan'],
    template: `<h3>{{'members' | i18n}}</h3><data-grid [stream]="stream" [columns]="columns"></data-grid>`
})
export class ClansDetailPlayers {
    @Input() clan :any;

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
            width: 120
        },
        {
            title: i18n.get('player'),
            component: Nickname,
            inputs: { nickname: 'nickname' },
            width: 220,
            sort: { 'nickname': { _default: 1 } }
        }, {
            title: i18n.get('level'),
            field: 'progress.level',
            width: 90,
            sort: { 'progress.experience': { } }
        }, {
            title: i18n.get('elo'),
            field: 'progress.elo',
            width: 70,
            sort: { 'progress.elo': { } },
        }, {
            title: i18n.get('avgScore'),
            field: 'total.scoreAvg',
            name: 'scoreAvg',
            width: 80,
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
            width: 70,
            sort: { 'total.kd': { } }
        }, {
            title: i18n.get('wins'),
            field: 'total.victories',
            width: 80,
            sort: { 'total.victories': { } }
        }, {
            title: i18n.get('matches.list'),
            field: 'total.matches',
            width: 80,
            sort: { 'total.matches': { } }
        }, {
            title: i18n.get('winrate'),
            component: Percent,
            inputs: { number: 'total.winRate' },
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

    constructor (private _clansService :ClansService) {
        this.stream = this.stream.bind(this);
    }
}

export default ClansDetailPlayers
