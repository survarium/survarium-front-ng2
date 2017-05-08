import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { MatchesService } from '../../services/api'
import TitleService from '../../services/title'
import DateTime from '../../components.common/datetime/datetime'
import Match from '../../components.common/match/match'
import Map from '../../components.common/map/map'
import Mode from '../../components.common/mode/mode'
import Clan from '../../components.common/clan/clan'
import { i18n } from '../../services/i18n'

@Component({
    template: `<data-grid [stream]="stream" [streamOnSuccess]="streamOnSuccess" [columns]="columns"></data-grid>`,
    selector: 'matches-list-cw',
    styles: []
})

export class MatchesListCW {
    private data :any[];

    private apiLang = i18n.apiDefaultLang;

    private columns = [
        { title: i18n.get('date'), width: 125, component: DateTime, inputs: { date: `date`, slim: { useValue: true } }, sort: { 'id': { } } },
        { title: i18n.get('match'), width: 90, component: Match, inputs: { id: `id` }, sort: { 'id': { value: -1 } } },
        { title: i18n.get('map'), component: Map, inputs: { name: [`place.title`, `map.lang.${this.apiLang}.name`] } },
        { title: i18n.get('mode'), component: Mode, width: 90, inputs: { name: [`mode.title`, `map.lang.${this.apiLang}.mode`] } },
        { title: i18n.get('level'), field: 'level', width: 80, classes: 'center', sort: { 'level': { } } },
        { title: i18n.get('matches.cw.clan1.score'), field: `score.0`, width: 80, classes: 'center' },
        { title: i18n.get('matches.cw.clan1.title'), classes: 'center nowrap', component: Clan, inputs: { classes: { useValue: null }, abbr: `clans.0.clan.abbr`, name: `clans.0.clan.name`, win: `clans.0.win` } },
        { title: i18n.get('matches.cw.clan2.title'), classes: 'center nowrap', component: Clan, inputs: { classes: { useValue: null }, abbr: `clans.1.clan.abbr`, name: `clans.1.clan.name`, win: `clans.1.win` } },
        { title: i18n.get('matches.cw.clan2.score'), field: `score.1`, width: 80, classes: 'center' }
    ];

    private stream (options ?:any) :Observable<any> {
        options = options || {};
        options.cw = true;

        return this
            ._matchesService
            .list(options);
    };

    private streamOnSuccess () {
        this._title.setRendered();
    }

    constructor(private _matchesService :MatchesService,
                private _title :TitleService) {

        this._title.setTitle(i18n.get('matches.cw.title'));
        this._title.setDescription(i18n.get('matches.cw.docDescription'));

        this.stream = this.stream.bind(this);
        this.streamOnSuccess = this.streamOnSuccess.bind(this);
    }
}
