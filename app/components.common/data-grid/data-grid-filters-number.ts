import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'

@Component({
    selector: 'data-grid-filters-number',
    template: require('./data-grid-filters-number.html'),
    styles: [require('./data-grid-filters-number.styl')],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DataGridFiltersNumber {
    constructor (private changeDetector :ChangeDetectorRef) {}
    _filter :any;
    type = 'from-to';
    typeChange = function (val) {
        let target = val.target;
        setTimeout(() => { // avoid dehydration on focused input[(ngModel)]
            this.type = target.value === 'from-to' && target.checked ? 'from-to' : 'equal';
            this._filter.value = this.condition;
            this.changeDetector.markForCheck();
            this.changeDetector.detectChanges();
        }, 0);
    };

    _from :number;
    get from () {
        return this._from;
    }
    set from (val) {
        let _val = Number(val);
        if (val === undefined || isNaN(_val)) {
            this._from = undefined;
        } else {
            this._from = _val;
        }
        this._filter.value = this.condition;
    };

    _to :number;
    get to () {
        return this._to;
    }
    set to (val) {
        let _val = Number(val);
        if (val === undefined || isNaN(_val)) {
            this._to = undefined;
        } else {
            this._to = _val;
        }
        this._filter.value = this.condition;
    };

    _eq: number;
    get eq () {
        return this._eq;
    }
    set eq (val) {
        let _val = Number(val);
        if (val === undefined || isNaN(_val)) {
            this._eq = undefined;
        } else {
            this._eq = _val;
        }
        this._filter.value = this.condition;
    };

    @Input('filter') set filter (val) {
        this._filter = val;
        let initial = val.value;
        if (initial) {
            if (initial.$eq !== undefined) {
                this.type = 'equal';
                this.eq = initial.$eq;
            } else if (initial.$gte !== undefined || initial.$lte !== undefined) {
                this.from = initial.$gte;
                this.to = initial.$lte;
            }
        }
    };

    del (filter) {
        this._filter.value = false;
    }

    get min () {
        return this._filter && this._filter.min || 0;
    }

    set min (val) {}

    get max () {
        return this._filter && this._filter.max || 1e6;
    }

    set max (val) {}

    get condition () {
        let result :any = {};
        if (this.type === 'from-to') {
            if (this._from !== undefined) {
                (result || (result = {})).$gte = this._from;
            }
            if (this._to !== undefined) {
                (result || (result = {})).$lte = this._to;
            }
        } else if (this._eq !== undefined) {
            (result || (result = {})).$eq = this._eq;
        }
        return result;
    }

    set condition (val) {}
}

export default DataGridFiltersNumber
