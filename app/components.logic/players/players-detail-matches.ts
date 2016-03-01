import { Component, Input, Optional } from 'angular2/core'
import DataGrid from '../../components.common/data-grid/data-grid'
import DateTime from '../../components.common/datetime/datetime'
import Match from '../../components.common/match/match'
import Map from '../../components.common/map/map'
import Mode from '../../components.common/mode/mode'
import { I18N } from '../../services/i18n'

@Component({
    selector: 'players-detail-matches',
    directives: [DataGrid],
    inputs: ['data', 'lang'],
    template: require('./players-detail-matches.html')
})

export class PlayersDetailMatches {
    @Input() data :any = [];
    @Input() @Optional() lang :string = 'english';

    private columns :any[] = [];

    constructor (private i18n :I18N) {
        let apiLang = i18n.apiLang;

        this.columns = [
            { title: i18n.get('date'), width: 110, component: DateTime, inputs: { date: `date`, slim: { useValue: true } } },
            { title: i18n.get('match'), component: Match, inputs: { id: `match.id` } },
            { title: i18n.get('map'), component: Map, inputs: { name: `map.lang.${apiLang}.name` }, width: 100 },
            { title: i18n.get('mode'), component: Mode, inputs: { name: `map.lang.${apiLang}.mode` }, width: 100 },
            { title: i18n.get('level'), field: `match.level`, classes: 'center', width: 80 },
            { title: i18n.get('win'), field: `victory`, render: function (value) {
                return value ? i18n.get('win') : i18n.get('loose');
            }, classes: 'center' },
            { title: i18n.get('kills'), field: `kills`, classes: 'center' },
            { title: i18n.get('dies'), field: `dies`, classes: 'center', width: 80 },
            { title: i18n.get('kd'), field: `kd`, classes: 'center', width: 80 },
            { title: i18n.get('score'), field: `score`, classes: 'center', width: 80 },
            { title: i18n.get('headshots'), field: `headshots`, classes: 'center' },
            { title: i18n.get('grenadeKills'), field: `grenadeKills`, classes: 'center' },
            { title: i18n.get('meleeKills'), field: `meleeKills`, classes: 'center' },
            { title: i18n.get('artefactKills'), field: `artefactKills`, classes: 'center', width: 120 },
            { title: i18n.get('artefactUses'), field: `artefactUses`, classes: 'center', width: 120 },
            { title: i18n.get('pointCaptures'), field: `pointCaptures`, classes: 'center' },
            { title: i18n.get('boxesBringed'), field: `boxesBringed`, classes: 'center' }
        ]
    }

    testNew() {
        this.data = this.data.slice(5, 13);
    }

    testClear() {
        this.data = [];
    }

    testUpdate() {
        this.data[2].map.lang[this.lang].name = 'FOOBAR';
        this.data[7].match.id = 99999;
        this.columns[1].width = 200;
    }

}

export default PlayersDetailMatches
