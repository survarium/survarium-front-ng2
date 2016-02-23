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
import { I18N, I18NPipe } from '../../services/i18n'

@Component({
    directives: [DataGrid],
    pipes: [I18NPipe],
    template: `<div *ngIf="!data">{{'loading' | i18n}}</div><data-grid *ngIf="data" [data]="data" [columns]="columns"></data-grid>`,
    selector: 'matches-list-cw',
    styles: []
})

export class MatchesListCWComponent {
    private data :any[];

    private columns :any[] = [];

    constructor(private _router :Router,
                private _matchesService :MatchesService,
                private _title :TitleService,
                private i18n :I18N) {
        this._title.setTitle(i18n.get('matches.cw.title'));

        let apiLang = i18n.apiLang;

        this.columns = [
            { title: i18n.get('date'), width: 170, component: DateTime, inputs: { date: `date` } },
            { title: i18n.get('match'), component: Match, inputs: { id: `id` } },
            { title: i18n.get('map'), component: Map, inputs: { name: `map.lang.${apiLang}.name` } },
            { title: i18n.get('mode'), component: Mode, inputs: { name: `map.lang.${apiLang}.mode` } },
            { title: i18n.get('level'), field: 'level', width: 80, classes: 'center' },
            { title: i18n.get('matches.cw.clan1.score'), field: `score.0` },
            { title: i18n.get('matches.cw.clan1.title'), component: Clan, inputs: { classes: { useValue: null }, data: `clans.0.clan`, win: `clans.0.win` } },
            { title: i18n.get('matches.cw.clan2.title'), component: Clan, inputs: { classes: { useValue: null }, data: `clans.1.clan`, win: `clans.1.win` } },
            { title: i18n.get('matches.cw.clan2.score'), field: `score.1` }
        ];

        this._matchesService.list({ cw: true }).subscribe((data :any[]) => {
            console.log(data);
            return this.data = data;
        }, (err) => {
            console.error(err);
        });
    }
}
