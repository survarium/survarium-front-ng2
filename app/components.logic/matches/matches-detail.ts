import { Component, Inject } from 'angular2/core'
import { RouteParams } from 'angular2/router'
import { Observable } from 'rxjs/Observable'
import { MatchesService } from '../../services/api'
import DataGrid from '../../components.common/data-grid/data-grid'
import { Nickname } from '../../components.common/nickname/nickname'
import { Clan } from '../../components.common/clan/clan'
import Store from '../../services/store'
import TitleService from '../../services/title'
import { i18n } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'
import { DateTimePipe } from '../../pipes/datetime'
import { duration } from '../../utils/duration'

@Component({
    selector: 'matches-detail',
    directives: [DataGrid, Clan],
    pipes: [I18NPipe, DateTimePipe],
    template: require('./matches-detail.html'),
    styles: [require('./matches-detail.styl')]
})

export class MatchesDetail {
    private match :number;
    private data  :any;
    private error :any;
    private stats :any[];

    private apiLang = i18n.apiLang;

    private get replay () {
        // FIXME: CLIENT-SIDE ONLY
        return `http://${decodeURIComponent(this.data.replay)}`;
    }

    private get duration () {
        return duration(this.data.duration);
    }

    private set _stats (val) {
        this.stats = val;
    }

    private get winner () {
        let data = this.data;
        let winner;

        if (data.clans && data.clans.length) {
            data.clans.forEach((clandata) => {
                if (clandata.win) {
                    winner = clandata.clan.abbr;
                }
            })
        } else if (this.stats) {
            let stat = this.stats[0];
            if (stat.team === 0 && stat.victory) {
                winner = 'A';
            } else {
                winner = 'B';
            }
        }

        return winner;
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

    private get group () {
        return {
            by: 'team',
            title: (num) => {
                return i18n.get('teamgroup', { tag: num === '0' ? 'A' : 'B' })
            }
        }
    }

    private get score () {
        return this.data.score.join(':');
    }

    private columns :any[] = [
        {
            title: '№',
            number: true,
            width: 80
        },
        {
            title: i18n.get('player'),
            component: Nickname,
            inputs: { nickname: 'player.nickname', clan: 'player.clan_meta' },
            width: 250
        },
        { title: i18n.get('score'), field: `score`, classes: 'center', width: 80, sort: { score: { value: -1 } } },
        { title: i18n.get('kills'), field: `kills`, classes: 'center', sort: { kills: {} } },
        { title: i18n.get('dies'), field: `dies`, classes: 'center', width: 80, sort: { dies: {} } },
        { title: i18n.get('kd'), field: `kd`, classes: 'center', width: 80, sort: { kd: {} } },
        { title: i18n.get('headshots'), field: `headshots`, classes: 'center', sort: { headshots: {} } },
        { title: i18n.get('grenadeKills'), field: `grenadeKills`, classes: 'center', sort: { grenadeKills: {} } },
        { title: i18n.get('meleeKills'), field: `meleeKills`, classes: 'center', sort: { meleeKills: {} } },
        { title: i18n.get('artefactKills'), field: `artefactKills`, classes: 'center', width: 120, sort: { artefactKills: {} } },
        { title: i18n.get('artefactUses'), field: `artefactUses`, classes: 'center', width: 120, sort: { artefactUses: {} } },
        { title: i18n.get('pointCaptures'), field: `pointCaptures`, classes: 'center', sort: { pointCaptures: {} } },
        { title: i18n.get('boxesBringed'), field: `boxesBringed`, classes: 'center', sort: { boxesBringed: {} } }
    ];

    constructor(private _routeParams :RouteParams,
                private _matchesService :MatchesService,
                private _title :TitleService,
                private _store :Store) {

        let match = Number(this._routeParams.get('match'));
        if (isNaN(match)) {
            return;
        }

        this.stream = this.stream.bind(this);

        this.match = match;

        this._matchesService
            .fetch(this.match)
            .subscribe(data => {
                data.map = data.map.lang[this.apiLang];

                this.data = data;

                this._title.setTitle(i18n.get('matches.match.docTitle', { id: this.data.id }));
                this._store.matches.add(this.data.id);
            }, err => {
                this.error = JSON.stringify(err, null, 4);
            });
    }
}
