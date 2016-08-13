import { Component } from '@angular/core'
import { RouteParams } from '@angular/router-deprecated'
import { DomSanitizationService, SafeHtml } from '@angular/platform-browser'
import { PlayersService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'
import Counts from './players-detail-counts'
import Matches from './players-detail-matches'
import History from './players-detail-history'
import Leveling from './players-detail-leveling'
import Skills from './players-detail-skills'
import Ammunition from './players-detail-ammunition'
import Nickname from '../../components.common/nickname/nickname'
import Badges from '../../components.common/badges/badges'
import { AlsoKnown } from '../../components.common/also-known/also-known'
import { I18NPipe } from '../../pipes/i18n'
import { i18n } from '../../services/i18n'
import { DFP } from '../../components.common/dfp/dfp'

@Component({
    selector: 'players-detail',
    directives: [Counts, Nickname, Matches, Badges, History, AlsoKnown, Leveling, Skills, Ammunition, DFP],
    pipes: [I18NPipe],
    template: require('./players-detail.html'),
    styles: [require('./players-detail.styl')]
})

export class PlayersDetail {
    private name  :string;
    private data  :any = {};
    private error :any;

    private show :boolean = false;
    private jsonLD :SafeHtml;

    private setJsonLD(data :any) {
        return this.jsonLD = this._sanitizer.bypassSecurityTrustHtml(`<script type="application/ld+json">
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
            </script>`);
    }

    constructor(private _routeParams :RouteParams,
                private _playerService :PlayersService,
                private _title :TitleService,
                private _store :Store,
                private _sanitizer :DomSanitizationService) {

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
                this._title.setDescription(i18n.get('players.docDescriptionOne', { nickname: this.data.nickname }));
                this._store.players.add(this.data.nickname);
            }, err => {
                this.error = JSON.stringify(err, null, 4);
            });
    }
}
