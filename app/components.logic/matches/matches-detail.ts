import { Component, Inject, OnInit } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { RouteParams } from 'angular2/router'
import { PlayersService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'
import { I18N } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'matches-detail',
    directives: [NgIf],
    pipes: [I18NPipe],
    template: `Matches-detail`,
    styles: []
})

export class MatchesDetail implements OnInit {
    private match :number;
    private data  :any = {};
    private error :any;

    constructor(private _routeParams :RouteParams,
                private _playerService :PlayersService,
                private _title :TitleService,
                private _store :Store) { }

    ngOnInit() {
        let match = Number(this._routeParams.get('match'));
        if (isNaN(match)) {
            return;
        }
        this.match = match;
        /*this._playerService
            .fetch(this.match)
            .subscribe(data => {
                this.data = data;
                this._title.setTitle(this.data.nickname);
                this._store.players.add(this.data.nickname);
            }, err => {
                this.error = JSON.stringify(err, null, 4);
            });*/
    }
}
