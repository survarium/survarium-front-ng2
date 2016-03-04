import { Component, Inject, OnInit } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { RouteParams } from 'angular2/router'
import { PlayersService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'
import Counts from './players-detail-counts'
import Matches from './players-detail-matches'
import Nickname from '../../components.common/nickname/nickname'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'players-detail',
    directives: [NgIf, Counts, Nickname, Matches],
    pipes: [I18NPipe],
    template: require('./players-detail.html'),
    styles: [require('./players-detail.styl')]
})

export class PlayersDetail implements OnInit {
    private name  :string;
    private data  :any = {};
    private error :any;

    private show :boolean = false;
    private lang :string = 'english';
    private matches :any[] = [];

    constructor(private _routeParams :RouteParams,
                private _playerService :PlayersService,
                private _title :TitleService,
                private _store :Store) { }

    ngOnInit() {
        this.name = this._routeParams.get('nickname').trim();
        this._playerService
            .fetch(this.name)
            .subscribe(data => {
                this.data = data;
                this.matches = data.stats;
                this.show = true;
                this._title.setTitle(this.data.nickname);
                this._store.players.add(this.data.nickname);
            }, err => {
                this.error = JSON.stringify(err, null, 4);
            });
    }
}
