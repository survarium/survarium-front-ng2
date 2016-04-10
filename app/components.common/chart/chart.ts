import { Component, Input, ElementRef, OnInit, OnDestroy, EventEmitter, NgZone } from 'angular2/core'

declare var Chart :any;

@Component({
    selector: 'chart',
    inputs: [],
    template: `<canvas style="width: 100%; height: 400px;" (click)="click($event)" (mousemove)="hover($event)"></canvas>`,
    styles: [require('./chart.styl')]
})

export class ChartComponent implements OnInit, OnDestroy {
    private chart :any = null;
    private chartClick :EventEmitter<any> = new EventEmitter();
    private chartHover :EventEmitter<any> = new EventEmitter();

    @Input() private data :any;
    @Input('type') private chartType :string = 'Line';
    @Input('options') private options;

    constructor (private element :ElementRef, private zone :NgZone) {}

    public click(event) {
        let atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
        let activePoints = atEvent.call(this.chart, event);
        if (activePoints.length > 0) {
            let activeLabel = activePoints[0].label;
            this.chartClick.emit({activePoints: activePoints, activeLabel: activeLabel});
        }
    }

    public hover(event) {
        let atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
        let activePoints = atEvent.call(this.chart, event);
        if (activePoints.length > 0) {
            let activeLabel = activePoints[0].label;
            let activePoint = activePoints[0].value;
            this.chartHover.emit({activePoints: activePoints, activePoint: activePoint, activeLabel: activeLabel});
        }
    }

    ngOnInit () {
        this.chart = new Chart(this.element.nativeElement.children[0].getContext('2d'))[this.chartType](this.data, this.options);
    }

    ngOnDestroy () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}

export default ChartComponent
