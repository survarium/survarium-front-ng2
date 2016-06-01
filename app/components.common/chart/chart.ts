import { Component, Input, ElementRef, OnInit, OnDestroy, OnChanges, EventEmitter, SimpleChange } from '@angular/core'

declare var Chart :any;

@Component({
    selector: 'chart',
    inputs: ['data', 'type', 'options'],
    template: `<canvas style="width: 100%; height: 400px;" (click)="click($event)" (mousemove)="hover($event)"></canvas>`,
    styles: [require('./chart.styl')]
})

export class ChartComponent implements OnInit, OnDestroy, OnChanges {
    private chart :any = null;
    private chartClick :EventEmitter<any> = new EventEmitter();
    private chartHover :EventEmitter<any> = new EventEmitter();

    private _data :any;
    @Input('data') set data (val) {
        if (!val || this._data === val) {
            return;
        }

        this._data = val;
        this.chartUpdate();
    };
    get data () { return this._data }

    @Input('type') private chartType :string = 'line';

    private _options :any;
    @Input('options') set options (val) {
        if (!val || this._options === val) {
            return;
        }

        this._options = val;
        this.chartUpdate();
    };
    get options () { return this._options; }

    constructor (private element :ElementRef) { }

    public click(event) {
        let atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
        let activePoints = atEvent.call(this.chart, event);
        if (activePoints.length > 0) {
            let activeLabel = activePoints[0].label;
            this.chartClick.emit({ activePoints: activePoints, activeLabel: activeLabel });
        }
    }

    public hover(event) {
        let atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
        let activePoints = atEvent.call(this.chart, event);
        if (activePoints.length > 0) {
            let activeLabel = activePoints[0].label;
            let activePoint = activePoints[0].value;
            this.chartHover.emit({ activePoints: activePoints, activePoint: activePoint, activeLabel: activeLabel });
        }
    }

    private updater;
    private chartUpdate () {
        if (!this.chart) {
            return;
        }

        clearTimeout(this.updater);

        this.updater = setTimeout(() => {
            this.chart.data.datasets = this.data.datasets;
            this.chart.data.labels   = this.data.labels;
            this.chart.update();
        }, 100);
    }

    ngOnInit () {
        this.chart = new Chart(this.element.nativeElement.children[0], {
            type: this.chartType,
            data: this.data,
            options: this.options
        });
    }

    ngOnDestroy () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }

    ngOnChanges (changes :{ data ?:SimpleChange, options ?:SimpleChange }) {
        if (changes.data && changes.data.currentValue) {
            this.data = changes.data.currentValue;
        }
    }
}

export default ChartComponent
