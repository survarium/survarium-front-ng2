import { Component, Input, Inject } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { PlayersService } from '../../services/api'
import { Storage } from '../../utils/storage'
import { kdRatio } from '../../utils/kd'
import { i18n } from '../../services/i18n'
import { Colors } from '../../components.common/colors'

@Component({
    selector: 'players-detail-history',
    styles:  [require('./players-detail-history.styl')],
    template: require('./players-detail-history.html')
})

export class PlayersDetailHistory {
    private ranges = ['day', 'week', 'month'];
    private currentRange = Storage.getItem('player:range') || this.ranges[0];
    private setRange(range) {
        if (!range || this.currentRange === range || !~this.ranges.indexOf(range)) {
            return;
        }

        Storage.setItem('player:range', range);
        this.currentRange = range;
        this.load();
    }

    private groups  = ['avg', 'sum'];
    private currentGroup = Storage.getItem('player:group') || this.groups[0];
    private setGroup(group) {
        if (!group || this.currentGroup === group || !~this.groups.indexOf(group)) {
            return;
        }

        Storage.setItem('player:group', group);
        this.currentGroup = group;
        this.load();
    }

    private _nickname :string;
    @Input() set nickname (val :string) {
        this._data = null;
        this._nickname = val;
        this.load();
    };

    get nickname () {
        return this._nickname;
    }

    private options = {
        responsive: true,
        responsiveAnimationDuration: 150,
        maintainAspectRatio: true,
        legend: {
            labels: {
                fontColor: Colors['gray-4'].color
            },
            onClick: function (event, legendItem) {
                var index = legendItem.datasetIndex;
                var ci = this['chart'];
                var meta = ci.getDatasetMeta(index);
                meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
                var key = `player.history.${legendItem.text}.hidden`;
                meta.hidden ? Storage.setItem(key, meta.hidden) : Storage.removeItem(key);
                ci.update();
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    zeroLineColor: Colors['gray-4'].pointBackgroundColor,
                    color: Colors['gray-4'].backgroundColor
                },
                ticks: {
                    fontColor: Colors['gray-4'].color,
                    callback: function(value) {
                        value = value.split('T');
                        return value.length > 1 ? value[1].slice(0, 5) : value[0].replace(/-/g, '.');
                    }
                }
            }],
            yAxes: [{
                gridLines: {
                    zeroLineColor: Colors['gray-4'].pointBackgroundColor,
                    color: Colors['gray-4'].backgroundColor
                },
                ticks: {
                    fontColor: Colors['gray-4'].color
                }
            }]
        },
    };

    private makeDataSet (i18nKey, colorName) {
        let color = Colors[colorName];
        let label = i18n.get(i18nKey);

        return {
            data: [],
            label,
            backgroundColor:  color.backgroundColor,
            borderColor: color.borderColor,
            borderWidth: 2,
            hidden: !!Storage.getItem(`player.history.${label}.hidden`),
            pointBackgroundColor: color.pointBackgroundColor,
            pointBorderColor: color.pointBorderColor,
            pointHoverBackgroundColor: color.pointHoverBackgroundColor,
            pointHoverBorderColor: color.pointHoverBorderColor
        }
    }

    private raw :any;
    private _data :any;
    private set data (val)  {
        this.raw = val;

        let level = this.makeDataSet('level', 'belize-hole');
        let matches = this.makeDataSet('players.history.matches', 'asbestos');
        let kills = this.makeDataSet('kills', 'green-tea');
        let dies = this.makeDataSet('dies', 'pomegranate');
        let kd = this.makeDataSet('kd', 'carrot');
        let score = this.makeDataSet('score', 'emerald');
        let victories = this.makeDataSet('wins', 'sun-flower');
        let place = this.makeDataSet('place', 'orange');
        let winRate = this.makeDataSet('winrate', 'clouds');
        let headshots = this.makeDataSet('headshots', 'wisteria');
        let grenadeKills = this.makeDataSet('grenadeKills', 'peter-river');
        let meleeKills = this.makeDataSet('meleeKills', 'dark-unica-1');

        let datasets = [level, matches, kills, dies, kd, score, victories, place, winRate, headshots, grenadeKills, meleeKills];
        let labels = [];

        val.forEach(item => {
            labels.push(item.date);
            level.data.push(Math.round(item.level));
            matches.data.push(Math.round(item.matches));
            kills.data.push(Math.round(item.kills));
            dies.data.push(Math.round(item.dies));
            kd.data.push(+kdRatio(item.kills, item.dies));
            winRate.data.push(+kdRatio(item.victories, item.matches) * 100);
            score.data.push(Math.round(item.score));
            victories.data.push(Math.round(item.victories));
            place.data.push(Math.round(item.place));
            headshots.data.push(Math.round(item.headshots));
            grenadeKills.data.push(Math.round(item.grenadeKills));
            meleeKills.data.push(Math.round(item.meleeKills));
        });

        this._data = {
            datasets,
            labels
        };
    };
    private get data () {
        return this._data;
    }

    private stream;
    private streamTrigger :(options ?:any) => void;

    private isMobile = false;
    private height = 'auto';

    private dataSubscriber :any;

    constructor (private _playerService :PlayersService, @Inject('window') private window, @Inject('CONFIG') private config) {
        if (config.isMobile || window.outerWidth < 500) {
            this.isMobile = true;

            this.options.maintainAspectRatio = false;
            this.height = '500px';
        }

        this.stream = Observable.create((observer) => this.streamTrigger = (options) => observer.next(options));
        this.dataSubscriber = this.stream
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap((options :any) => _playerService.history(this.nickname, options))
            .subscribe(data => this.data = data, err => {});
    }

    ngOnDestroy () {
        this.dataSubscriber && this.dataSubscriber.unsubscribe();
    }

    public load () {
        if (!this.streamTrigger) {
            return;
        }

        this.streamTrigger({
            range: this.currentRange,
            group: this.currentGroup
        });
    }
}

export default PlayersDetailHistory
