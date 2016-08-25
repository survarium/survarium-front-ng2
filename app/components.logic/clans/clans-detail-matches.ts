import { Component, Input } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { i18n } from '../../services/i18n'
import { ClansService } from '../../services/api'
import { Nickname } from '../../components.common/nickname/nickname'
import { Map } from '../../components.common/map/map'
import { Mode } from '../../components.common/mode/mode'
import { Match } from '../../components.common/match/match'
import { DateTime } from '../../components.common/datetime/datetime'
import DataGrid from '../../components.common/data-grid/data-grid'

@Component({
    directives: [DataGrid],
    selector: 'clans-detail-matches',
    pipes: [I18NPipe],
    template: `<h3>{{'clans.publicMatches' | i18n}}</h3><data-grid [stream]="stream" [columns]="columns" [name]="'clan-matches'" [limits]="limits"></data-grid>`
})
export class ClansDetailMatches {
    @Input() clan :any;
    apiLang = i18n.apiLang;

    private limits = [15, 30, 50];

    private stream (options ?:any) {
        return this
            ._clansService
            .matches(this.clan.abbr, options);
    };

    private columns = [
        { title: i18n.get('date'), width: 125, component: DateTime, inputs: { date: `date`, slim: { useValue: true } }, sort: { 'date': {  } }, classes: 'nowrap' },
        { title: i18n.get('match'), component: Match, width: 90, inputs: { id: `match.id` }, sort: { 'date': { value: -1 } } },
        { title: i18n.get('map'), component: Map, inputs: { name: `map.lang.${this.apiLang}.name` } },
        { title: i18n.get('mode'), component: Mode, inputs: { name: `map.lang.${this.apiLang}.mode` } },
        { title: i18n.get('win'), field: `victory`, render: function (value) {
            return value ? i18n.get('win') : i18n.get('loose');
        }, classes: 'center', sort: { victory: {  } } },
        { title: i18n.get('level'), field: 'level', width: 80, classes: 'center', sort: { 'level': { } } },
        {
            title: i18n.get('player'),
            component: Nickname,
            inputs: { nickname: 'player.nickname' },
            width: 180,
            classes: 'nowrap'
        }, {
            title: i18n.get('score'),
            field: 'score',
            width: 80,
            classes: 'center',
            sort: { 'score': { } }
        }, {
            title: i18n.get('kills'),
            field: 'kills',
            width: 90,
            classes: 'center',
            sort: { 'kills': { } }
        }, {
            title: i18n.get('dies'),
            field: 'dies',
            width: 90,
            classes: 'center',
            sort: { 'dies': { } }
        }, {
            title: i18n.get('kd'),
            field: 'kd',
            width: 70,
            classes: 'center nowrap',
            sort: { 'kd': { } }
        }, {
            title: i18n.get('headshots'),
            field: 'headshots',
            classes: 'center',
            sort: { 'headshots': { } }
        }, {
            title: i18n.get('grenadeKills'),
            field: 'grenadeKills',
            classes: 'center',
            sort: { 'grenadeKills': { } }
        }, {
            title: i18n.get('meleeKills'),
            field: 'meleeKills',
            classes: 'center',
            sort: { 'meleeKills': { } }
        }, {
            title: i18n.get('artefactKills'),
            field: 'artefactKills',
            width: 120,
            classes: 'center',
            sort: { 'artefactKills': { } }
        }, {
            title: i18n.get('artefactUses'),
            field: 'artefactUses',
            width: 120,
            classes: 'center',
            sort: { 'artefactUses': { } }
        }, {
            title: i18n.get('pointCaptures'),
            field: 'pointCaptures',
            classes: 'center',
            sort: { 'pointCaptures': { } }
        }, {
            title: i18n.get('boxesBringed'),
            field: 'boxesBringed',
            classes: 'center',
            sort: { 'boxesBringed': { } }
        }
    ];

    constructor (private _clansService :ClansService) {
        this.stream = this.stream.bind(this);
    }
}

export default ClansDetailMatches
