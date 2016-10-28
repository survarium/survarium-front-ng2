import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { MatchesService } from '../../services/api'
import TitleService from '../../services/title'
import DateTime from '../../components.common/datetime/datetime'
import Match from '../../components.common/match/match'
import Map from '../../components.common/map/map'
import Mode from '../../components.common/mode/mode'
import { MatchType } from '../../components.common/match-type/match-type'
import { i18n } from '../../services/i18n'

@Component({
    template: `<data-grid [stream]="stream" [columns]="columns" [name]="matches-list-global"></data-grid>`,
    selector: 'matches-list',
    styles: []
})

export class MatchesList {
    private data :any[];

    private apiLang = i18n.apiLang;

    private columns = [
        {
            title: i18n.get('date'), width: 125, component: DateTime, inputs: { date: `date`, slim: { useValue: true } }, sort: { 'id': {  } },
            filter: { field: 'date', type: 'date' }
        },
        {
            title: i18n.get('match'), component: Match, width: 90, inputs: { id: `id` }, sort: { 'id': { value: -1 } }, classes: 'blockLink',
            filter: { field: 'id', type: 'number' }
        },
        { title: i18n.get('map'), component: Map, inputs: { name: `map.lang.${this.apiLang}.name` } },
        { title: i18n.get('mode'), component: Mode, inputs: { name: `map.lang.${this.apiLang}.mode` } },
        {
            title: i18n.get('level'), field: 'level', width: 80, classes: 'center', sort: { 'level': { } },
            filter: { field: 'level', type: 'number', min: 0, max: 100 }
        },
        {
            title: i18n.get('type'),
            field: 'rating_match',
            component: MatchType,
            inputs: { type: `rating_match` },
            width: 80,
            classes: 'center',
            sort: { 'rating_match': { } }
        }
    ];

    private stream (options ?:any) :Observable<any> {
        return this
            ._matchesService
            .list(options);
    };

    constructor(private _matchesService :MatchesService,
                private _title :TitleService) {

        this._title.setTitle(i18n.get('matches.list'));
        this._title.setDescription(i18n.get('matches.docDescription'));

        this.stream = this.stream.bind(this);
    }
}
