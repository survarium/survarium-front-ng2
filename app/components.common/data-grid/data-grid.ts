import { Component, Input, OnChanges } from 'angular2/core'
import Cell from './data-grid-cell'
import CellTitle from './data-grid-cell-title'
import Pagination from './data-grid-pagination'
import Loading from './data-grid-loading'
import { Observable } from 'rxjs/Observable'

interface Column {
    title :string,
    width ?:number,
    sort ?:{
        _default ?:number,
        value ?:number
    },
    number ?:boolean,
    component ?:any,
    inputs ?:any,
    field ?:string
}

@Component({
    selector: 'data-grid',
    directives: [Cell, CellTitle, Pagination, Loading],
    inputs: ['data', 'columns', 'stream'],
    template: require('./data-grid.html'),
    styles: [require('./data-grid.css')]
})

export class DataGrid implements OnChanges {
    @Input() data    :any[] = [];
    private columns  :Column[] = [];
    @Input('columns') set _columns (columns :Column[]) {
        this.columns = columns;
        this.columns.forEach((column) => {
            if (!column.sort) {
                return;
            }
            let sort = Object.keys(column.sort);
            if (column.sort[sort[0]].value === 0) {
                return;
            }
            this.sort = column;
        })
    };

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

    private _sort :any;
    private _sortChange (fromZero ?:boolean) {
        Object.keys(this._sort.sort).forEach((key) => {
            let sort = this._sort.sort[key];
            this._sort.sort[key].value = fromZero ?
                !sort.value ? sort._default || -1 : sort.value :
                sort.value === 1 ? -1 : 1;
        });
    }

    set sort (value) {
        if (this._sort && this._sort === value) {
            this._sortChange();
        } else {
            this._sort = value;
            this._sortChange(true);
        }

        this.load();
    }

    get sort () {
        let _sort = this._sort;

        if (!_sort) {
            return null;
        }

        return Object.keys(_sort.sort).reduce((result, key) => {
            result[key] = _sort.sort[key].value;
            return result;
        }, {});
    }

    paginate (skip :number) {
        this.load({ skip: skip });
    }

    public load (options ?:any) {
        if (!this.streamTrigger) {
            return;
        }

        options = options || {};
        this.loading = true;
        this.streamTrigger({
            skip: options.skip !== undefined ? options.skip : this.skip,
            sort: this.sort
        });
    }

    ngOnChanges (changes) { }

    headerClick (params, event) {
        if (params.column.sort === undefined) {
            return;
        }
        this.sort = params.column;
    }

    cellClick (event) {
        console.log('cellClick', arguments);
    }
}

export default DataGrid
