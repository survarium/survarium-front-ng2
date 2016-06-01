import { Component } from '@angular/core'
import { ChartComponent } from '../../components.common/chart/chart'
import { MatchesService } from '../../services/api'
import { i18n } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'
import { Colors } from '../../components.common/colors'
import { NumberTransform } from '../../utils/number'

@Component({
    selector: 'timeline',
    directives: [ChartComponent],
    pipes: [I18NPipe, NumberPipe],
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

                if (tooltip.body && tooltip.body.length) {
                    tooltip.body[0] = tooltip.body[0].replace(/: \d+:/, ':');
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
        var end = new Date();
        start.setHours(start.getHours() - 23, 0, 0);

        var labels  = [];
        var mapping = [];
        var hours   = [];
        var total   = 0;

        for (let i = 0; i < 23; i++) {
            i && start.setHours(start.getHours() + 1);
            labels.push(this.formatDate(start));
            mapping.push(0);
            hours.push(start.getHours());
        }

        labels.push(this.formatDate(end));
        mapping.push(0);
        hours.push(end.getHours());

        val
            .sort((a, b) => {
                return a.level - b.level;
            })
            .forEach((dataset, j) => {
                var data = mapping.slice();

                dataset.hours.forEach((hour) => {
                    let date = new Date(hour.date);
                    data[hours.indexOf(date.getHours())] = hour.total;
                });

                var label = `${i18n.get('lvl')} ${dataset.level}: ${NumberTransform(dataset.total)}`;

                datasets.push({
                    label: label,
                    data: data,
                    backgroundColor:  this.styleLevels[dataset.level].backgroundColor,
                    borderColor: this.styleLevels[dataset.level].borderColor,
                    borderWidth: 1.5,
                    pointBackgroundColor: this.styleLevels[dataset.level].pointBackgroundColor,
                    pointBorderColor: this.styleLevels[dataset.level].pointBorderColor,
                    pointHoverBackgroundColor: this.styleLevels[dataset.level].pointHoverBackgroundColor,
                    pointHoverBorderColor: this.styleLevels[dataset.level].pointHoverBorderColor
                });

                total += dataset.total;
            });

        this.data = {
            labels: labels,
            datasets: datasets
        };

        this.total = total;
    };

    constructor (private matchesService :MatchesService) {
        matchesService
            .timeline()
            .subscribe(data => {
                this.timeline = data;
            }, err => {

            });
    }

}
