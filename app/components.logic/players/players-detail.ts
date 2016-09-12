import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { PlayersService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'

import { i18n } from '../../services/i18n'

@Component({
    selector: 'players-detail',
    template: require('./players-detail.html'),
    styles: [require('./players-detail.styl')]
})

export class PlayersDetail implements OnInit, OnDestroy {
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

    constructor(private route :ActivatedRoute,
                private _playerService :PlayersService,
                private _title :TitleService,
                private _store :Store,
                private _sanitizer :DomSanitizer) {
    }

    private dataSubscriber :any;
    private advType :number = 1;

    private getPlayer (nickname :string) {
        this.cleanup();
        this.advType = Math.round(Math.random() + .3);

        this.name = nickname;

        this.dataSubscriber = this._playerService
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

    private cleanup () {
        this.error = null;

        if (this.dataSubscriber) {
            this.dataSubscriber.unsubscribe();
        }
    }

    private routerSubscriber :any;

    ngOnInit () {
        this.routerSubscriber = this.route.params.map(params => params['nickname'].trim())
            .subscribe(this.getPlayer.bind(this));
    }

    ngOnDestroy () {
        this.routerSubscriber.unsubscribe();
        this.cleanup();
    }
}
