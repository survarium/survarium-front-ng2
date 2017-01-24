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
        let width = this.view.element.nativeElement.offsetWidth;

        if (!this.fullMode) {
            start = this.level - 2;

            if (start < 0) {
                start = 0;
            }

            let right = width < 400 ? 10 : 20;

            data = data.slice(start, this.level + right);
        }

        let pos = this.level - start;
        let exp = this.exp;

        let playerPos = [];
        playerPos[pos] = exp;

        let nearest = data.slice().map(limit => exp > limit ? limit : exp);
        let labelLimit = width < 400 ? 50 : width < 600 ? 25 : 10;

        let labels = this.fullMode ?
            data.map((val, i) => {
                let label = start + i + 1;

                return (label === 1 || !(label % labelLimit)) ? label : '  ';
            }) :
            data.map((val, i) => start + i + 1);

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
                    data: nearest,
                    label: 'Player level',
                    borderColor: Colors['transparent'],
                    borderWidth: 3,
                    backgroundColor: Colors['sun-flower'].soft
                },
                {
                    data: data,
                    label: 'Exp',
                    borderColor: Colors['turquoise'].color,
                    borderWidth: 1,
                    backgroundColor: Colors['turquoise'].backgroundColor,
                }
            ],
            labels: labels
        };
    }

    private toggleMode()  {
        this.fullMode = !this.fullMode;
        this.setData();
    }
}

export default PlayersDetailLeveling
