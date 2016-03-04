import { Component, Inject } from 'angular2/core'
import { Router } from 'angular2/router'
import { Observable } from 'rxjs/Observable'
import { MatchesService } from '../../services/api'
import TitleService from '../../services/title'
import DataGrid from '../../components.common/data-grid/data-grid'
import DateTime from '../../components.common/datetime/datetime'
import Match from '../../components.common/match/match'
import Map from '../../components.common/map/map'
import Mode from '../../components.common/mode/mode'
import Clan from '../../components.common/clan/clan'
import { I18N } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    directives: [DataGrid],
    pipes: [I18NPipe],
    template: `<div *ngIf="!data">{{'loading' | i18n}}</div><data-grid *ngIf="data" [data]="data" [columns]="columns"></data-grid>`,
    selector: 'matches-list-cw',
    styles: []
})

export class MatchesListCW {
    private data :any[];

    private columns :any[] = [];

    constructor(private _router :Router,
                private _matchesService :MatchesService,
                private _title :TitleService,
                private i18n :I18N) {
        this._title.setTitle(i18n.get('matches.cw.title'));

        let apiLang = i18n.apiLang;

        this.columns = [
            { title: i18n.get('date'), width: 110, component: DateTime, inputs: { date: `date`, slim: { useValue: true } } },
            { title: i18n.get('match'), width: 90, component: Match, inputs: { id: `id` } },
            { title: i18n.get('map'), component: Map, inputs: { name: `map.lang.${apiLang}.name` } },
            { title: i18n.get('mode'), component: Mode, width: 90, inputs: { name: `map.lang.${apiLang}.mode` } },
            { title: i18n.get('level'), field: 'level', width: 80, classes: 'center' },
            { title: i18n.get('matches.cw.clan1.score'), field: `score.0`, width: 80, classes: 'center' },
            { title: i18n.get('matches.cw.clan1.title'), classes: 'center', component: Clan, inputs: { classes: { useValue: null }, abbr: `clans.0.clan.abbr`, name: `clans.0.clan.name`, win: `clans.0.win` } },
            { title: i18n.get('matches.cw.clan2.title'), classes: 'center', component: Clan, inputs: { classes: { useValue: null }, abbr: `clans.1.clan.abbr`, name: `clans.1.clan.name`, win: `clans.1.win` } },
            { title: i18n.get('matches.cw.clan2.score'), field: `score.1`, width: 80, classes: 'center' }
        ];

        this._matchesService.list({ cw: true }).subscribe((data :any[]) => {
            return this.data = data;
        }, (err) => {});
    }
}
