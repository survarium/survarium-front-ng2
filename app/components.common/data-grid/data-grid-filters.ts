import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Storage } from '../../utils/storage'

@Component({
    selector: '[filters]',
    template: require('./data-grid-filters.html'),
    styles: [require('./data-grid-filters.styl')],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.data-grid-filters]': 'true'
    }
})

export class DataGridFilters implements OnInit {
    filters :any[] = [];
    name :string;
    saved :any;

    @Input('name') set _name (name) {
        this.name = name;
        this.saved = JSON.parse(Storage.getItem(this.name));
    };

    @Input('filters') set _setFilters (columns) {
        let saved = this.saved && this.saved.filters;

        this.filters = columns.map(column => {
            if (!column.filter.field) {
                column.filter.field = column.field;
            }

            let savedValue = saved && saved[column.filter.field];
            if ([null, undefined].indexOf(savedValue) === -1) {
                column.filter.value = savedValue;
            }

            column.filter.title = column.title;
            return column.filter;
        });

        this.updateDefaultOption();
    }

    @Output('onFilter') event :EventEmitter<any> = new EventEmitter();

    private get unused () {
        return this.filters.filter(filter => {
            return !filter.value;
        });
    }

    filterToAdd ?:any;

    private updateDefaultOption () {
        this.filterToAdd = this.unused.length && this.unused[0].field;
    }

    private set unused (val) {}

    private get used () {
        return this.filters.filter(filter => {
            return filter.value;
        });
    }

    private set used (val) {}

    private trigger() {
        let storeFilters = {};
        let storedFilters = 0;
        let used = [];

        this.filters.forEach((filter) => {
            if ([undefined, null].indexOf(filter.value) === -1) {
                storeFilters[filter.field] = filter.value;
                storedFilters++;
            }

            if (filter.value) {
                used.push({ field: filter.field, value: filter.value });
            }
        });

        this.event.emit(used);

        let saved = this.saved || {};
        saved.filters = storeFilters;

        if (this.name && storedFilters) {
            Storage.setItem(this.name, JSON.stringify(saved));
        }
    }

    private addFilter(byField :string) {
        if (!byField) {
            return;
        }

        byField = byField.replace(/^\d+\:\s/, '');

        let filter = this.unused.filter(unused => { return unused.field === byField })[0];

        if (!filter) {
            return;
        }

        filter.value = {};

        this.updateDefaultOption();
    }

    private onDelete() {
        this.updateDefaultOption();
    }

    ngOnInit () {
        this.trigger();
    }

    constructor () {
        this.onDelete = this.onDelete.bind(this);
    }
}

export default DataGridFilters
