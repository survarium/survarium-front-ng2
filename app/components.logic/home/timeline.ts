import { Component, Inject } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { MatchesService } from '../../services/api'
import { i18n } from '../../services/i18n'
import { Colors } from '../../components.common/colors'
import { NumberTransform } from '../../utils/number'
import { TrackService } from '../../services/track'

@Component({
    selector: 'timeline',
    template: require('./timeline.html'),
    styles: [require('./timeline.styl')]
})

export class Timeline {
    private styleLevels = {
        1:  Colors['white'],
        2:  Colors['gray-1'],
        3:  Colors['gray-2'],
        4:  Colors['gray-3'],
        5:  Colors['gray-4'],
        6:  Colors['gray-5'],
        7:  Colors['gray-6'],
        8:  Colors['gray-7'],
        9:  Colors['gray-8'],
        10: Colors['dark-unica-1']
    };

    private options = {
        responsive: true,
        responsiveAnimationDuration: 150,
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                gridLines: {
                    zeroLineColor: Colors['gray-4'].pointBackgroundColor,
                    color: Colors['gray-4'].backgroundColor
                },
                ticks: {
                    fontColor: Colors['gray-4'].color
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
        legend: {
            labels: {
                fontColor: Colors['gray-4'].color,
                fontSize: 14,
                padding: 15
            }
        },
        tooltips: {
            custom: tooltip => {
                if (!tooltip) {
                    return;
                }

                if (tooltip.body && tooltip.body.length && tooltip.body[0].replace) {
                    tooltip.body[0] = tooltip.body[0].replace(/: [\d\s]+:/, ':');
                }
            }
        }
    };

    private formatDate (date) {
        var hour = date.getHours();
        var minute = date.getMinutes();
        return (hour < 10 ? '0' : '') + hour + ':' +
            (minute < 10 ? '0' : '') + minute;
    }

    private data :any;
    private total :number;
    private set timeline (val) {
        var datasets = [];

        var start = new Date();
        start.setHours(start.getHours() - 23, start.getMinutes(), 0);

        var labels  = [];
        var mapping = [];
        var hours   = [];
        var total   = 0;

        for (let i = 0; i < 24; i++) {
            i && start.setHours(start.getHours() + 1);
            labels.push(this.formatDate(start));
            mapping.push(0);
            hours.push(start.getHours());
        }

        var data = mapping.slice();

        val.forEach(dataHour => {
            let date = new Date(dataHour.hours[0].date);
            data[hours.indexOf(date.getHours())] = dataHour.hours[0].total;
            total += dataHour.hours[0].total;
        });

        //var label = `${i18n.get('Matches')} ${dataset.level}: ${NumberTransform(dataset.total)}`;
        var label = this.typesI18N[this.type];

        datasets.push({
            label: label,
            data: data,
            backgroundColor:  this.styleLevels[4].backgroundColor,
            borderColor: this.styleLevels[4].borderColor,
            borderWidth: 1.5,
            pointBackgroundColor: this.styleLevels[4].pointBackgroundColor,
            pointBorderColor: this.styleLevels[4].pointBorderColor,
            pointHoverBackgroundColor: this.styleLevels[4].pointHoverBackgroundColor,
            pointHoverBorderColor: this.styleLevels[4].pointHoverBorderColor
        });

        this.data = {
            labels: labels,
            datasets: datasets
        };

        this.total = total;
    };

    private isMobile = false;
    private height = 'auto';
    //private height = '400px';


    private types = ['all', 'rating', 'random', 'pve'];
    private typesI18N = [i18n.get('all'), i18n.get('matches.rating'), i18n.get('matches.random'), i18n.get('modes.pve')];
    private type = 0;

    private switch () {
        this.type = this.types.length <= this.type + 1 ? 0 : this.type + 1;

        let type = this.types[this.type];

        this.trackService.track({
            ya: { goal:'timeline.switch', options: { type } },
            ga: { category: 'Timeline', action: 'switch type', label : type }
        });

        this.load();
    }

    private stream;
    private streamTrigger :(options ?:any) => void;

    constructor (private matchesService :MatchesService,
                 @Inject('window') private window,
                 @Inject('CONFIG') private config,
                 private trackService :TrackService) {
        if (config.isMobile || window.outerWidth < 500) {
            this.isMobile = true;

            this.options.maintainAspectRatio = false;
            this.height = '600px';
        } else {
            this.height = '700px';
            this.options.maintainAspectRatio = false;
        }

        this.stream = Observable.create((observer) => this.streamTrigger = (options) => observer.next(options));
        this.stream
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap((options :any) => { return matchesService.timeline(options) })
            .subscribe(data => {
                this.timeline = data;
            }, (err) => {});

        this.load();
    }

    public load () {
        if (!this.streamTrigger) {
            return;
        }

        this.streamTrigger({
            type: this.types[this.type]
        });
    }
}
