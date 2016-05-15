import { Component, Input } from '@angular/core'
import Cell from './data-grid-cell'
import CellTitle from './data-grid-cell-title'
import Pagination from './data-grid-pagination'
import Counters from './data-grid-counters'
import Loading from './data-grid-loading'
import Filters from './data-grid-filters'
import { Observable } from 'rxjs/Observable'

interface Column {
    title :string,
    width ?:number,
    sort ?:{
        default ?:number,
        value ?:number
    },
    number ?:boolean,
    component ?:any,
    inputs ?:any,
    field ?:string,
    filter ?:any
}

@Component({
    selector: 'data-grid',
    directives: [Cell, CellTitle, Pagination, Loading, Counters, Filters],
    inputs: ['data', 'columns', 'stream', 'group', 'name'],
    template: require('./data-grid.html'),
    styles: [require('./data-grid.styl')],
    host: {
        //'(window:resize)': 'onResize($event)'
    }
})

export class DataGrid {
    @Input('data') set _data (value :any[]) {
        if (!this.group) {
            this.data = value;
        } else {
            let groupBy = this.group.by;
            let groupTitle = this.group.title;
            let grouped = {};

            value.forEach((row) => {
                (grouped[row[groupBy]] || (grouped[row[groupBy]] = [])).push(row);
            });

            this.data = Object.keys(grouped).reduce((result, group) => {
                result.push({ __group: group, content: groupTitle(group) });
                grouped[group] = grouped[group].map((elem :any, index) => {
                    elem.__index = index;
                    return elem;
                });
                return result.concat(grouped[group]);
            }, []);
        }
    };

    @Input('name') private _name = Math.random() * 1e5 >>> 0;
    private get name () {
        return 'DG-' + this._name;
    }

    private data :any[];

    private columnsCount :number;
    private columns  :Column[] = [];
    private _columnSort (column) {
        if (!column.sort) {
            return;
        }
        let sort = Object.keys(column.sort);
        if (!column.sort[sort[0]].value) {
            return;
        }
        this.sort = column;
    }
    private filters = [];
    @Input('columns') set _columns (columns :Column[]) {
        let filters = [];
        this.columns = columns;
        this.columns.forEach((column) => {
            this._columnSort(column);
            if (column.filter) {
                filters.push(column);
            }
        });
        this.columnsCount = this.columns.length;
        this.filters = filters;
    };

    @Input('columnHeadHeight') columnHeadHeight :number = 50;
    @Input('columnHeight') columnHeight :number = 30;
    @Input('colWidth') defaultColumnWidth :number = 100;
    @Input('group') group :any;

    private stream;
    private streamTrigger :(options ?:any) => void;
    private total :number;
    private filtered :number;
    private limit :number;
    private skip  :number;
    private loading :boolean;

    @Input('stream') set _stream (handler :any) {
        this.stream = Observable.create((observer) => this.streamTrigger = (options) => observer.next(options));
        this.stream
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap((options :any) => { return handler(options) })
            .map((result) => {
                this._data    = result.data;
                this.total    = result.total;
                this.filtered = result.filtered !== undefined ? result.filtered : result.total;
                this.skip     = result.skip || 0;
                this.limit    = result.limit;
            })
            .subscribe(() => {
                this.loading = false;
            }, (err) => {});

        this.load();
    }

    get width () :number {
        return this.columns.reduce((width, column) => {
            return width + (column.width || this.defaultColumnWidth);
        }, 0);
    };

    private currentSort :{ column ?:any, dir ?:number } = {};

    private _sortChange (fromZero ?:boolean) {
        let dir;
        let column = this.currentSort.column;

        Object.keys(column.sort).forEach((key) => {
            let sort = column.sort[key];
            let sortDir = fromZero ?
                !sort.value ? sort.default || -1 : sort.value :
                sort.value === 1 ? -1 : 1;

            column.sort[key].value = sortDir;
            if (!dir) {
                dir = sortDir;
            }
        });

        this.currentSort = { column, dir };
    }

    set sort (value) {
        if (this.currentSort.column === value) {
            this._sortChange();
        } else {
            this.currentSort.column = value;
            this._sortChange(true);
        }

        this.load();
    }

    get sort () {
        let _sort = this.currentSort.column;

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

    _filter = undefined;
    filter (conditions) {
        if (this._filter === conditions) {
            return;
        }

        if (!conditions || !conditions.length) {
            this._filter = undefined;
        } else {
            this._filter = conditions;
        }

        this.skip = 0;

        this.load();
    }

    public load (options ?:any) {
        if (!this.streamTrigger) {
            return;
        }

        options = options || {};
        this.loading = true;
        this.streamTrigger({
            skip: options.skip !== undefined ? options.skip : this.skip,
            sort: this.sort,
            filter: this._filter
        });
    }

    rowIndex (row, index) {
        return row.__index !== undefined ? row.__index : index;
    }

    private onResize (event) {
        //console.log(event.target.innerWidth);
    }

    headerClick (params, event) {
        if (params.column.sort === undefined) {
            return;
        }
        this.sort = params.column;
    }

    cellClick (event) {
        //console.log('cellClick', arguments);
    }
}

export default DataGrid
