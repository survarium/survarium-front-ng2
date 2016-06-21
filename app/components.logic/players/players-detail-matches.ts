import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import DataGrid from '../../components.common/data-grid/data-grid'
import DateTime from '../../components.common/datetime/datetime'
import Match from '../../components.common/match/match'
import Map from '../../components.common/map/map'
import Mode from '../../components.common/mode/mode'
import { PlayersService } from '../../services/api'
import { i18n } from '../../services/i18n'

@Component({
    selector: 'players-detail-matches',
    directives: [DataGrid],
    inputs: ['nickname'],
    template: require('./players-detail-matches.html')
})

export class PlayersDetailMatches {
    @Input() nickname :string;

    private apiLang = i18n.apiLang;

    private columns :any[] = [
        { title: i18n.get('date'), width: 125, component: DateTime, inputs: { date: `date`, slim: { useValue: true } }, sort: { date: { } }, classes: 'nowrap' },
        { title: i18n.get('match'), component: Match, inputs: { id: `match.id` }, sort: { date: { value: -1 } } },
        { title: i18n.get('map'), component: Map, inputs: { name: `map.lang.${this.apiLang}.name` }, width: 100 },
        { title: i18n.get('mode'), component: Mode, inputs: { name: `map.lang.${this.apiLang}.mode` }, width: 100 },
        { title: i18n.get('level'), field: `level`, classes: 'center', width: 80, sort: { level: {} } },
        { title: i18n.get('win'), field: `victory`, render: function (value) {
            return value ? i18n.get('win') : i18n.get('loose');
        }, classes: 'center', sort: { victory: {  } } },
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

    constructor (private _playerService :PlayersService) {
        this.stream = this.stream.bind(this);
    }
}

export default PlayersDetailMatches
