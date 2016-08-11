import { Component, Input, OnInit, ViewContainerRef } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { Colors } from '../../components.common/colors'
import { NumberPipe } from '../../pipes/number'
import { ChartComponent } from '../../components.common/chart/chart'

const experience :any[] = require('./players-detail-leveling.json');

@Component({
    selector: 'players-detail-leveling',
    directives: [ChartComponent],
    pipes:   [I18NPipe, NumberPipe],
    template: require('./players-detail-leveling.html'),
    styles: [require('./players-detail-leveling.styl')]
})

export class PlayersDetailLeveling implements OnInit {
    @Input() exp :number;
    @Input() level :number;

    constructor (private view :ViewContainerRef) { }

    private type = 'bar';
    private experience = experience;

    private options = {
        maintainAspectRatio: false,
        responsive: true,
        responsiveAnimationDuration: 150,
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false,
                    zeroLineWidth: 0
                },
                ticks: {
                    fontColor: Colors['gray-4'].color
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }]
        },
        legend: {
            display: false
        },
        onClick: this.toggleMode.bind(this)
    };

    private data :any;
    private fullMode :boolean = false;

    private setData() {
        let start = 0;
        let data = experience;

        if (!this.fullMode) {
            start = this.level - 2;
            if (start < 0) {
                start = 0;
            }

            let width = this.view.element.nativeElement.offsetWidth;
            let right = width < 400 ? 10 : 20;
            data = data.slice(start, this.level + right);
        }

        let playerPos = [];
        playerPos[this.level - start] = this.exp;

        this.data = {
            datasets: [
                {
                    data: playerPos,
                    label: 'Player level',
                    borderColor: Colors['transparent'],
                    borderWidth: 3,
                    backgroundColor: Colors['sun-flower'].color
                },
                {
                    data: data,
                    label: 'Exp',
                    borderColor: Colors['turquoise'].color,
                    borderWidth: 1,
                    backgroundColor: Colors['turquoise'].backgroundColor,
                }
            ],
            labels: data.map((val, i) => start + i + 1)
        };
    }

    private toggleMode()  {
        this.fullMode = !this.fullMode;
        this.setData();
    }

    ngOnInit () {
        if (this.level >= 100) {
            return;
        }

        this.setData();
    }
}

export default PlayersDetailLeveling
