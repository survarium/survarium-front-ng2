import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import DateTime from '../../components.common/datetime/datetime'
import Match from '../../components.common/match/match'
import Map from '../../components.common/map/map'
import Mode from '../../components.common/mode/mode'
import { MatchType } from '../../components.common/match-type/match-type'
import { PlayersService } from '../../services/api'
import { i18n } from '../../services/i18n'

@Component({
    selector: 'players-detail-matches',
    template: require('./players-detail-matches.html')
})

export class PlayersDetailMatches {
    private _nickname :string;

    @Input('nickname') set nickname (val :string) {
        this._nickname = val;
        this.stream = this.stream.bind(this);
    };

    get nickname () {
        return this._nickname;
    }

    private apiLang = i18n.apiLang;
    private apiDefaultLang = i18n.apiDefaultLang;

    private columns :any[] = [
        { title: i18n.get('date'), width: 125, component: DateTime, inputs: { date: `date` }, sort: { date: { } }, classes: 'nowrap' },
        { title: i18n.get('match'), component: Match, inputs: { id: `match.id` }, sort: { date: { value: -1 } } },
        {
            title: i18n.get('type'),
            field: 'rating_match',
            component: MatchType,
            inputs: { type: `rating_match`, mode: `mode` },
            width: 80,
            classes: 'center',
            sort: { 'rating_match': { } }
        },
        { title: i18n.get('map'), component: Map, inputs: { name: [`battlefield.title`, `map.lang.${this.apiDefaultLang}.name`] }, width: 100 },
        { title: i18n.get('mode'), component: Mode, inputs: { name: [`mode.title`, `map.lang.${this.apiDefaultLang}.mode`] }, width: 100 },
        { title: i18n.get('level'), field: `level`, classes: 'center', width: 80, sort: { level: {} } },
        { title: i18n.get('win'), field: `victory`, render: function (value) {
            return value ? i18n.get('win') : i18n.get('loose');
        }, classes: 'center', sort: { victory: {  } } },
        { title: i18n.get('place'), field: `place`, classes: 'center' },
        { title: i18n.get('kills'), field: `kills`, classes: 'center', sort: { kills: {} } },
        { title: i18n.get('dies'), field: `dies`, classes: 'center', width: 80, sort: { dies: {} } },
        { title: i18n.get('kd'), field: `kd`, classes: 'center nowrap', width: 80, sort: { kd: {} } },
        { title: i18n.get('score'), field: `score`, classes: 'center', width: 80, sort: { score: {} } },
        { title: i18n.get('headshots'), field: `headshots`, classes: 'center', sort: { headshots: {} } },
        { title: i18n.get('grenadeKills'), field: `grenadeKills`, classes: 'center', sort: { grenadeKills: {} } },
        { title: i18n.get('meleeKills'), field: `meleeKills`, classes: 'center', sort: { meleeKills: {} } },
        { title: i18n.get('artefactKills'), field: `artefactKills`, classes: 'center', width: 120, sort: { artefactKills: {} } },
        { title: i18n.get('artefactUses'), field: `artefactUses`, classes: 'center', width: 120, sort: { artefactUses: {} } },
        { title: i18n.get('pointCaptures'), field: `pointCaptures`, classes: 'center', sort: { pointCaptures: {} } },
        { title: i18n.get('boxesBringed'), field: `boxesBringed`, classes: 'center', sort: { boxesBringed: {} } }
    ];

    private limits = [15, 30, 50];

    private stream (options ?:any) :Observable<any> {
        return this
            ._playerService
            .stats(this.nickname, options);
    };

    constructor (private _playerService :PlayersService) {}
}

export default PlayersDetailMatches
