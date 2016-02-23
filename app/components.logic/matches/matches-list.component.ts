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
import { I18N, I18NPipe } from '../../services/i18n'

@Component({
    directives: [DataGrid],
    pipes: [I18NPipe],
    template: `<div *ngIf="!data">{{'loading' | i18n}}</div><data-grid *ngIf="data" [data]="data" [columns]="columns"></data-grid>`,
    selector: 'matches-list',
    styles: []
})

export class MatchesListComponent {
    private data :any[];

    private columns :any[] = [];

    constructor(private _router :Router,
                private _matchesService :MatchesService,
                private _title :TitleService,
                private i18n :I18N) {
        this._title.setTitle(i18n.get('matches.list'));

        let apiLang = i18n.apiLang;

        this.columns = [
            { title: i18n.get('date'), width: 170, component: DateTime, inputs: { date: `date` } },
            { title: i18n.get('match'), component: Match, inputs: { id: `id` } },
            { title: i18n.get('map'), component: Map, inputs: { name: `map.lang.${apiLang}.name` } },
            { title: i18n.get('mode'), component: Mode, inputs: { name: `map.lang.${apiLang}.mode` } },
            { title: i18n.get('level'), field: 'level', width: 80, classes: 'center' }
        ];

        this._matchesService.list().subscribe((data :any[]) => {
            console.log(data);
            return this.data = data;
        }, (err) => {
            console.error(err);
        });
    }
}
