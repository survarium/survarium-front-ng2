import { Component, Input, OnChanges } from 'angular2/core'
import Cell from './data-grid-cell'
import CellTitle from './data-grid-cell-title'
import Pagination from './data-grid-pagination'
import Loading from './data-grid-loading'
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'data-grid',
    directives: [Cell, CellTitle, Pagination, Loading],
    inputs: ['data', 'columns', 'stream'],
    template: require('./data-grid.html'),
    styles: [require('./data-grid.css')]
})

export class DataGrid implements OnChanges {
    @Input() data    :any[] = [];
    @Input('columns') columns :any[] = [];

    @Input('columnHeadHeight') columnHeadHeight :number = 50;
    @Input('columnHeight') columnHeight :number = 30;
    @Input('colWidth') defaultColumnWidth :number = 100;
    @Input('colClasses') defaultColumnClasses :string = '';

    private stream;
    private streamTrigger :(options ?:any) => void;
    private total :number;
    private limit :number;
    private skip  :number;
    private loading :boolean;

    @Input('stream') set _stream (handler :any) {
        this.stream = Observable.create((observer) => this.streamTrigger = (options) => observer.next(options));
        this.stream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((options :any) => { return handler(options) })
            .map((result) => {
                this.data = result.data;
                this.total = result.total;
                this.skip = result.skip;
                this.limit = result.limit;
            })
            .subscribe(() => {
                this.loading = false;
            });

        this.load();
    }

    get width () :number {
        return this.columns.reduce((width, column) => {
            return width + (column.width || this.defaultColumnWidth);
        }, 0);
    };

    paginate (skip :number) {
        this.load({ skip: skip });
    }

    public load (options ?:any) {
        options = options || {};
        this.loading = true;
        this.streamTrigger({
            skip: options.skip !== undefined ? options.skip : this.skip
        });
    }

    ngOnChanges (changes) { }

    headerClick (event) {
        console.log('headerClick', arguments);
    }

    cellClick (event) {
        console.log('cellClick', arguments);
    }
}

export default DataGrid
