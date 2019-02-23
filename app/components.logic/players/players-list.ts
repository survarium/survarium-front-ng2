import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { PlayersService } from '../../services/api'
import { Modes } from '../../services/api'
import TitleService from '../../services/title'
import Nickname from '../../components.common/nickname/nickname'
import Percent from '../../components.common/percent/percent'
import { Elapsed } from '../../components.common/elapsed/elapsed'
import { I18N } from '../../services/i18n'
import { PlayersList as PlayersListTyping } from '../../typings/players-list'

@Component({
    template: `<data-grid [stream]="stream" [streamOnSuccess]="streamOnSuccess" [columns]="columns" [name]="'players-list-global'"></data-grid>`,
    selector: 'players-list',
    styles: []
})

export class PlayersList {
    data :any[];
    modes = Modes;

    private columns :any[] = [];

    private stream (options ?:any) :Observable<PlayersListTyping> {
        return this
            ._playerService
            .list(options)
            .map((result :PlayersListTyping) => {
                result.data = result.data.map((elem :any) => {
                    elem.clan = elem.clan_meta;
                    return elem;
                });
                return result;
            }, (error) => {});
    };

    private streamOnSuccess () {
        this._title.setRendered();
    }

    constructor(private _playerService :PlayersService,
                private _title :TitleService,
                private i18n :I18N) {

        this._title.setTitle(i18n.get('players.docTitle'));
        this._title.setDescription(i18n.get('players.docDescription'));

        this.stream = this.stream.bind(this);
        this.streamOnSuccess = this.streamOnSuccess.bind(this);

        this.columns = [].concat([
            {
                title: '№',
                number: true,
                width: 80
            },
            {
                title: i18n.get('player'),
                component: Nickname,
                inputs: { nickname: 'nickname', clan: 'clan', banned: 'banned' },
                width: 250,
                sort: { 'nickname': { default: 1 } },
                classes: 'nowrap'
            }, {
                title: i18n.get('level'),
                field: 'progress.level',
                width: 90,
                sort: { 'progress.experience': { value: -1 } },
                classes: 'center',
                filter: { field: 'progress.level', type: 'number', min: 0, max: 100, value: { $gte: 10 } }
            }, {
                title: i18n.get('avgScore'),
                field: 'total.scoreAvg',
                name: 'scoreAvg',
                width: 80,
                sort: { 'total.scoreAvg': { } },
                classes: 'center',
                filter: { type: 'number' }
            }, {
                title: i18n.get('kills'),
                field: 'total.kills',
                width: 90,
                sort: { 'total.kills': { } },
                classes: 'center',
                filter: { type: 'number' }
            }, {
                title: i18n.get('dies'),
                field: 'total.dies',
                width: 90,
                sort: { 'total.dies': { } },
                classes: 'center',
                filter: { type: 'number' }
            }, {
                title: i18n.get('kd'),
                field: 'total.kd',
                width: 70,
                sort: { 'total.kd': { } },
                classes: 'center nowrap',
                filter: { type: 'number' }
            }, {
                title: i18n.get('wins'),
                field: 'total.victories',
                width: 80,
                sort: { 'total.victories': { } },
                classes: 'center',
                filter: { type: 'number' }
            }, {
                title: i18n.get('matches.list'),
                field: 'total.matches',
                width: 80,
                sort: { 'total.matches': { } },
                classes: 'center',
                filter: { field: 'total.matches', type: 'number', value: { $gte: 100 } }
            }, {
                title: i18n.get('winrate'),
                component: Percent,
                inputs: { number: 'total.winRate' },
                sort: { 'total.winRate': { } },
                classes: 'center',
                filter: { field: 'total.winRate', type: 'number', max: 100 }
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
                classes: 'center',
                filter: { type: 'number' }
            }, {
                title: i18n.get('grenadeKills'),
                field: 'total.grenadeKills',
                sort: { 'total.grenadeKills': { } },
                classes: 'center',
                filter: { type: 'number' }
            }, {
                title: i18n.get('meleeKills'),
                field: 'total.meleeKills',
                sort: { 'total.meleeKills': { } },
                classes: 'center',
                filter: { type: 'number' }
            }, {
                title: i18n.get('artefactKills'),
                field: 'total.artefactKills',
                width: 120,
                sort: { 'total.artefactKills': { } },
                classes: 'center',
                filter: { type: 'number' }
            }, {
                title: i18n.get('artefactUses'),
                field: 'total.artefactUses',
                width: 120,
                sort: { 'total.artefactUses': { } },
                classes: 'center',
                filter: { type: 'number' }
            }, {
                title: i18n.get('pointCaptures'),
                field: 'total.pointCaptures',
                sort: { 'total.pointCaptures': { } },
                classes: 'center',
                filter: { type: 'number' }
            }, {
                title: i18n.get('boxesBringed'),
                field: 'total.boxesBringed',
                sort: { 'total.boxesBringed': { } },
                classes: 'center',
                filter: { type: 'number' }
            },
            {
                title: 'ELO Random',
                field: 'progress.elo-random',
                sort: { 'progress.elo-random': { } },
                classes: 'center',
                width: 90,
                filter: { field: 'progress.elo-random', type: 'number', min: 0, max: 2000 }
            }, {
                title: 'ELO Rating',
                field: 'progress.elo-rating',
                sort: { 'progress.elo-rating': { } },
                classes: 'center',
                width: 90,
                filter: { field: 'progress.elo-rating', type: 'number', min: 0, max: 2000 }
            }
        ]);
    }
}
