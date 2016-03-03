import { Component, Inject } from 'angular2/core'
import { Router } from 'angular2/router'
import { Observable } from 'rxjs/Observable'
import { PlayersService } from '../../services/api'
import TitleService from '../../services/title'
import Nickname from '../../components.common/nickname/nickname'
import Percent from '../../components.common/percent/percent'
import DataGrid from '../../components.common/data-grid/data-grid'
import { I18N } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'
import { PlayersList as PlayersListTyping } from '../../typings/players-list'

@Component({
    directives: [DataGrid],
    pipes: [I18NPipe],
    template: `<data-grid [stream]="stream" [columns]="columns"></data-grid>`,
    selector: 'players-list',
    styles: []
})

export class PlayersList {
    data:any[];

    private columns:any[] = [];

    private stream (options ?:any) :Observable<PlayersListTyping> {
        return this
            ._playerService
            .list(options)
            .map((result :PlayersListTyping) => {
                result.data = result.data.map((elem) => {
                    elem.clan = elem.clan_meta;
                    return elem;
                });
                return result;
            });
    };

    constructor(private _playerService :PlayersService,
                private _title :TitleService,
                private i18n :I18N) {
        this._title.setTitle(i18n.get('players.docTitle'));

        this.stream = this.stream.bind(this);

        this.columns = [
            {
                title: '№',
                number: true,
                width: 80
            },
            {
                title: i18n.get('player'),
                component: Nickname,
                inputs: { nickname: 'nickname', clan: 'clan' },
                width: 250,
                sort: { 'nickname': { _default: 1 } }
            }, {
                title: i18n.get('level'),
                field: 'progress.level',
                width: 90,
                sort: { 'progress.experience': { value: -1 } }
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
    }
}
