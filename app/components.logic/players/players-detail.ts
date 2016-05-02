import { Component } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { RouteParams } from 'angular2/router'
import { PlayersService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'
import Counts from './players-detail-counts'
import Matches from './players-detail-matches'
import Nickname from '../../components.common/nickname/nickname'
import Badges from '../../components.common/badges/badges'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'players-detail',
    directives: [NgIf, Counts, Nickname, Matches, Badges],
    pipes: [I18NPipe],
    template: require('./players-detail.html'),
    styles: [require('./players-detail.styl')]
})

export class PlayersDetail {
    private name  :string;
    private data  :any = {};
    private error :any;

    private show :boolean = false;
    private jsonLD :string;

    private setJsonLD(data :any) {
        return this.jsonLD = `<script type="application/ld+json">
            {
              "@context": "http://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://survarium.pro/players",
                  "name": "Players"
                }
              },{
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://survarium.pro/players/${data.nickname}",
                  "name": "${(data.clan ? '[' + data.clan.abbr + '] ' : '') + data.nickname}"
                }
              }]
            }
            </script>`;
    }

    constructor(private _routeParams :RouteParams,
                private _playerService :PlayersService,
                private _title :TitleService,
                private _store :Store) {

        this.name = this._routeParams.get('nickname').trim();

        this._playerService
            .fetch(this.name)
            .subscribe(data => {
                this.data = data;

                if (this.data.clan_meta) {
                    this.data.clan = this.data.clan_meta;
                }

                this.setJsonLD(this.data);
                this.show = true;

                this._title.setTitle(this.data.nickname);
                this._store.players.add(this.data.nickname);
            }, err => {
                this.error = JSON.stringify(err, null, 4);
            });
    }
}
