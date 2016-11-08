import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'data-grid-filters-select',
    template: require('./data-grid-filters-select.html'),
    styles: [require('./data-grid-filters-select.styl')],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DataGridFiltersSelect {
    constructor () {}
    _filter :any;

    _eq: any;
    get eq () {
        return this._eq;
    }
    set eq (val) {
        if (val === undefined) {
            this._eq = undefined;
        } else {
            this._eq = val;
        }
        this._filter.value = this.condition;
    };

    @Input('filter') set filter (val) {
        this._filter = val;
        let initial = val.value;
        if (initial && initial.$eq !== undefined) {
            this.eq = initial.$eq;
        } else {
            this.eq = val.values[0].value;
        }
    };

    @Input('onDelete') private onDelete :Function;

    del (filter) {
        this._filter.value = false;
        this.onDelete();
    }

    get condition () {
        let result :any = {};

        if (this._eq !== undefined) {
            result.$eq = this._eq;
        }

        return result;
    }

    set condition (val) {}
}

export default DataGridFiltersSelect
