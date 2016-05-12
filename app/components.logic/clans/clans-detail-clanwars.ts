import { Component, Input } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { i18n } from '../../services/i18n'
import { ClansService } from '../../services/api'
import { Nickname } from '../../components.common/nickname/nickname'
import { Map } from '../../components.common/map/map'
import { Mode } from '../../components.common/mode/mode'
import { Match } from '../../components.common/match/match'
import { DateTime } from '../../components.common/datetime/datetime'
import Clan from '../../components.common/clan/clan'
import DataGrid from '../../components.common/data-grid/data-grid'

@Component({
    directives: [DataGrid],
    selector: 'clans-detail-clanwars',
    pipes: [I18NPipe],
    inputs: ['clan'],
    template: `<h3>{{'clans.clanwars' | i18n}}</h3><data-grid [stream]="stream" [columns]="columns"></data-grid>`
})
export class ClansDetailClanwars {
    @Input() clan :any;
    apiLang = i18n.apiLang;

    private stream (options ?:any) {
        let abbr = this.clan.abbr;
        return this
            ._clansService
            .clanwars(abbr, options)
            .do(data => {
                data.data.forEach((elem :any) => {
                    elem.clans.forEach((clan) => {
                        if (clan.clan.abbr === abbr) {
                            elem.self = clan;
                            elem.victory = clan.win;
                        } else {
                            elem.opponent = clan;
                        }
                    });
                });
                return data;
            });
    };

    private columns = [
        { title: i18n.get('date'), width: 125, component: DateTime, inputs: { date: `date`, slim: { useValue: true } }, sort: { 'date': {  } } },
        { title: i18n.get('match'), component: Match, width: 90, inputs: { id: `id` }, sort: { 'id': { value: -1 } } },
        { title: i18n.get('win'), field: `victory`, render: function (value) {
            return value ? i18n.get('win') : i18n.get('loose');
        }, classes: 'center' },
        { title: i18n.get('opponent'), classes: 'center', component: Clan, inputs: { classes: { useValue: null }, abbr: `opponent.clan.abbr`, name: `opponent.clan.name` } },
        { title: i18n.get('map'), component: Map, inputs: { name: `map.lang.${this.apiLang}.name` } },
        { title: i18n.get('mode'), component: Mode, inputs: { name: `map.lang.${this.apiLang}.mode` } },
        { title: i18n.get('level'), field: 'level', width: 80, classes: 'center', sort: { 'level': { } } }
    ];

    constructor (private _clansService :ClansService) {
        this.stream = this.stream.bind(this);
    }
}

export default ClansDetailClanwars
