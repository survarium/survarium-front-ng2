import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core'
import { DataGridFiltersNumber } from './data-grid-filters-number';

@Component({
    selector: '[filters]',
    directives: [DataGridFiltersNumber],
    template: require('./data-grid-filters.html'),
    styles: [require('./data-grid-filters.styl')]
})

export class DataGridFilters implements OnInit {
    filters :any[] = [];

    @Input('filters') set function (columns) {
        this.filters = columns.map(column => {
            column.filter.title = column.title;
            return column.filter;
        });
    }

    @Output('onFilter') event :EventEmitter<any> = new EventEmitter();

    private get unused () {
        return this.filters.filter(filter => {
            return !filter.value;
        });
    }

    private get used () {
        return this.filters.filter(filter => {
            return filter.value;
        });
    }

    private trigger() {
        this.event.emit(this.used.map(function (filter) {
            return { field: filter.field, value: filter.value };
        }));
    }

    private _selectedFilter :any = this.unused[0];
    get selectedFilter () {
        console.log('get filter', this._selectedFilter);
        return this._selectedFilter;
    }
    set selectedFilter (event) {
        console.log('set filter', event);
        this._selectedFilter = event;
    }

    ngOnInit () {
        this.trigger();
    }
}

export default DataGridFilters
