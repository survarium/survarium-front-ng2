import { Component, Input, ViewContainerRef } from '@angular/core'
import { Colors } from '../../components.common/colors'

const experience :any[] = require('./players-detail-leveling.json');

@Component({
    selector: 'players-detail-leveling',
    template: require('./players-detail-leveling.html'),
    styles: [require('./players-detail-leveling.styl')]
})

export class PlayersDetailLeveling {
    private _exp :number;
    @Input() set exp (val :number) {
        this._exp = val;
        this.init();
    };
    get exp () { return this._exp; }

    private _level :number;
    @Input() set level (val :number) {
        this._level = val;
        this.init();
    };
    get level () { return this._level; }

    private initer :any;

    private _init () {
        if (this.level >= 100) {
            this.data = null;
            return;
        }

        this.setData();
    }

    private init () {
        clearTimeout(this.initer);
        this.initer = setTimeout(this._init.bind(this), 10);
    }

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
}

export default PlayersDetailLeveling
