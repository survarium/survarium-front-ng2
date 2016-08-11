import { Component, Input } from '@angular/core'

@Component({
    selector: 'data-grid-filters-number',
    template: require('./data-grid-filters-number.html'),
    styles: [require('./data-grid-filters-number.styl')]
})

export class DataGridFiltersNumber {
    filter :any;
    type = 'from-to';
    typeChange = function (val) {
        let target = val.target;
        setTimeout(() => { // avoid dehydration on focused input[(ngModel)]
            this.type = target.value === 'from-to' && target.checked ? 'from-to' : 'equal';
            this.filter.value = this.condition;
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
        this.filter.value = this.condition;
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
        this.filter.value = this.condition;
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
        this.filter.value = this.condition;
    };

    @Input('filter') set inputFilter (val) {
        this.filter = val;
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
        this.filter.value = false;
    }

    get min () {
        return this.filter && this.filter.min || 0;
    }

    get max () {
        return this.filter && this.filter.max || 1e6;
    }

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
}

export default DataGridFiltersNumber
