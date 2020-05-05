import { Component, Input } from '@angular/core'
import { GameService } from '../../services/api'
import { i18n } from '../../services/i18n'
import { Colors } from '../../components.common/colors'

@Component({
    selector: 'faction-challenge',
    template: require('./faction-challenge.html'),
    styles: [require('./faction-challenge.styl')]
})

export class FactionChallenge {
    private _data :any = null;
    options :any = {
        scales: {
            xAxes: [{
                gridLines: {
                    color: Colors['gray-4'].backgroundColor
                },
                ticks: {
                    fontColor: Colors['gray-4'].color
                }
            }],
            yAxes: [{
                gridLines: {
                    color: Colors['gray-4'].backgroundColor
                },
                ticks: {
                    fontColor: Colors['gray-4'].color,
                    beginAtZero: true
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
        responsive: true,
        responsiveAnimationDuration: 150,
        maintainAspectRatio: true
    };
    type = 'horizontalBar';

    get data () {
        return this._data;
    }

    private colors = {
        scavengers: {
            background: 'rgba(255, 206, 86, 0.2)',
            border: 'rgba(255, 206, 86, 1)'
        },
        blackMarket: {
            background: 'rgba(255, 99, 132, 0.2)',
            border: 'rgba(255,99,132,1)'
        },
        renaissance: {
            background: 'rgba(54, 162, 235, 0.2)',
            border: 'rgba(54, 162, 235, 1)'
        },
        edge: {
            background: 'rgba(75, 192, 192, 0.2)',
            border: 'rgba(75, 192, 192, 1)'
        }
    };

    set data (data) {
        const { colors } = this;
        const labels = [];
        const dataRows = [];
        const backgroundColor = [];
        const borderColor = [];

        const sorted = Object.keys(data).map(faction => ({
            name: i18n.get(`factions.${faction}`),
            faction,
            val: data[faction],
            colors: {
                bg: '',
                border: ''
            }
        })).sort((a, b) => {
            return a.val - b.val;
        });

        sorted.forEach(({ name, val, faction }) => {
            labels.push(name);
            dataRows.push(val);
            backgroundColor.push(colors[faction].background);
            borderColor.push(colors[faction].border);
        });

        this._data = {
            labels: sorted.map(rate => rate.name),
            datasets: [{
                label: i18n.get('rating'),
                data: dataRows,
                backgroundColor,
                borderColor,
                borderWidth: 1
            }]
        };
    }

    @Input('till') private till :string;
    @Input('from') private from :string;

    constructor(private gameService: GameService) {}

    ngOnInit () {
        if (new Date() > new Date(this.till)) {
            return;
        }

        if (new Date() < new Date(this.from)) {
            return;
        }

        this.gameService.factionChallenge()
            .subscribe((data :any) => this.data = data);
    }
}
