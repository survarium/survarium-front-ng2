import { Component, OnInit, OnDestroy } from '@angular/core'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { MatchesService } from '../../services/api'
import { Nickname } from '../../components.common/nickname/nickname'
import Store from '../../services/store'
import TitleService from '../../services/title'
import { TrackService } from '../../services/track'
import { i18n } from '../../services/i18n'
import { MapsService } from '../../services/maps'
import { duration } from '../../utils/duration'
import { NumberTransform } from '../../utils/number'

@Component({
    selector: 'matches-detail',
    template: require('./matches-detail.html'),
    styles: [require('./matches-detail.styl')]
})

export class MatchesDetail implements OnInit, OnDestroy {
    private match :number;
    private data  :any;
    private error :any;
    private stats :any[];

    private apiLang = i18n.apiLang;
    private apiDefaultLang = i18n.apiDefaultLang;

    replay :SafeUrl;
    private setReplay() {
        const { id } = this.data;

        return this.replay = this._domSanitize.bypassSecurityTrustUrl(`http://survarium.com/replay?id=${id}`);
    }
    private trackDownloadReplay() {
        this._trackService.track({
            ya: { goal: 'match.replay', options: { match: this.data.id } },
            ga: { category: 'Match', action: 'download replay', label : `match:${this.data.id}`,}
        });
    }

    duration :string;
    private setDuration() {
        return this.duration = duration(this.data.duration);
    }

    private winner :string;
    private totalELO :number[];

    setWinnerByData () {
        let data = this.data;
        let winner;

        if (data.clans && data.clans.length) {
            data.clans.forEach((clandata) => {
                if (clandata.win) {
                    winner = clandata.clan.abbr;
                }
            })
        }

        if (winner) {
            this.winner = winner;
        }
    }

    setWinnerByStats () {
        if (this.winner) {
            return;
        }

        for (let i = 0, stat; i < this.stats.length; i++) {
            stat = this.stats[i];
            if (stat.victory) {
                if (stat.team === 0) {
                    this.winner = 'A';
                } else if (stat.team === 1) {
                    this.winner = 'B';
                }
                break;
            }
        }
    }

    private setTotalELO () {
        let elos = [0, 0];

        this.stats.forEach(stat => elos[stat.team] += stat.elo);
        this.totalELO = elos;
    }

    private set _stats (val) {
        this.stats = val;
        this.setWinnerByStats();
        this.setTotalELO();
    }

    private stream (options ?:any) :Observable<any> {
        return this
            ._matchesService
            .stats(this.match, options)
            .map((data) => {
                return {
                    data: this._stats = data
                };
            });
    }

    group = {
        by: 'team',
        title: (num) => {
            return i18n.get('teamgroup', { tag: (num === '0' ? 'A' : 'B') + ' (' + i18n.get('elo') + ' ' + NumberTransform(this.totalELO[num]) + ')' });
        }
    };


    score :string;
    private setScore() {
        return this.score = this.data.score.join(':');
    }

    server :string;
    private setServer() {
        if(this.data.replay.includes('node-1')) {
            return this.server = 'EU';
        } else if(this.data.replay.includes('node-4')) {
            return this.server = 'RU';
        } else if(this.data.replay.includes('node-6')) {
            return this.server = 'NA';
        } else if(this.data.replay.includes('node-21')) {
            return this.server = 'SEA';
        } else if(this.data.replay.includes('node-19')) {
            return this.server = 'SA';
        } else {
            return this.server = '-';
        }
    }

    mapImage :any;
    private setMap(data) {
        this.mapImage = this._mapsService.image(data.map, data.place, data.weather);
    }

    private _columns :any[];
    private get columns() :any[] {
        return this._columns || (this._columns = [
            {
                title: '№',
                number: true,
                width: 80
            },
            {
                title: i18n.get('player'),
                component: Nickname,
                inputs: { nickname: 'player.nickname', clan: 'player.clan_meta', banned: 'player.banned' },
                width: 250,
                classes: 'nowrap'
            },
            { title: i18n.get('lvl'), field: `player.progress.level`, classes: 'center', width: 80 },
            {
                title: i18n.get('elo'),
                field: `elo`,
                classes: 'center',
                width: 100
            },
            { title: i18n.get('score'), field: `score`, classes: 'center', width: 80, sort: { score: { value: -1 } } },
            { title: i18n.get('kills'), field: `kills`, classes: 'center', sort: { kills: {} } },
            { title: i18n.get('dies'), field: `dies`, classes: 'center', width: 80, sort: { dies: {} } },
            { title: i18n.get('kd'), field: `kd`, classes: 'center nowrap', width: 80, sort: { kd: {} } },
            { title: i18n.get('headshots'), field: `headshots`, classes: 'center', sort: { headshots: {} } },
            { title: i18n.get('grenadeKills'), field: `grenadeKills`, classes: 'center', sort: { grenadeKills: {} } },
            { title: i18n.get('meleeKills'), field: `meleeKills`, classes: 'center', sort: { meleeKills: {} } },
            { title: i18n.get('artefactKills'), field: `artefactKills`, classes: 'center', width: 120, sort: { artefactKills: {} } },
            { title: i18n.get('artefactUses'), field: `artefactUses`, classes: 'center', width: 120, sort: { artefactUses: {} } },
            { title: i18n.get('pointCaptures'), field: `pointCaptures`, classes: 'center', sort: { pointCaptures: {} } },
            { title: i18n.get('boxesBringed'), field: `boxesBringed`, classes: 'center', sort: { boxesBringed: {} } }
        ]);
    }

    constructor(private route :ActivatedRoute,
                private _matchesService :MatchesService,
                private _title :TitleService,
                private _store :Store,
                private _mapsService: MapsService,
                private _domSanitize :DomSanitizer,
                private _trackService :TrackService
    ) {}

    private dataSubscriber :any;

    private getMatch(match) {
        this.cleanup();

        if (isNaN(match)) {
            return;
        }

        this.match = match;
        this.stream = this.stream.bind(this);

        this.dataSubscriber = this._matchesService
            .fetch(this.match)
            .subscribe(data => {
                this.setMap(data);

                if (data.map) {
                    let map = data.map.lang[this.apiDefaultLang];

                    data.map = {
                        name: i18n.get(`maps.${map.name.toLowerCase()}`),
                        weather: i18n.get(`weather.${map.weather}`),
                        mode: i18n.get(`modes.${map.mode.toLowerCase()}`)
                    };
                } else {
                    data.map = {
                        name: i18n.get(`maps.${data.place.title.toLowerCase()}`),
                        weather: i18n.get(`weather.${data.weather.title}`),
                        mode: i18n.get(`modes.${data.mode.title}`)
                    };
                }

                this.data = data;

                this.setWinnerByData();
                this.setScore();
                this.setServer();
                this.setReplay();
                this.setDuration();

                this._title.setTitle(i18n.get('matches.match.docTitle', { id: this.data.id }));
                this._title.setDescription(i18n.get('matches.match.docDescription', { id: this.data.id }));
                this._title.setRendered();
                this._store.matches.add(this.data.id);
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
        this.routerSubscriber = this.route.params.map(params => Number(params['match'])).subscribe(match => {
            this.getMatch(match);
        });
    }

    ngOnDestroy () {
        this.routerSubscriber.unsubscribe();
        this.cleanup();
    }
}
