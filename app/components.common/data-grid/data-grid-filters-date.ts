import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'

@Component({
    selector: 'data-grid-filters-date',
    template: require('./data-grid-filters-date.html'),
    styles: [require('./data-grid-filters-date.styl')],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DataGridFiltersDate {
    tzOffset :number = (new Date()).getTimezoneOffset();

    constructor (private changeDetector :ChangeDetectorRef) {}

    filter :any;
    type = 'from-to';
    typeChange = function (val) {
        let target = val.target;
        setTimeout(() => { // avoid dehydration on focused input[(ngModel)]
            this.type = target.value === 'from-to' && target.checked ? 'from-to' : 'equal';
            this.filter.value = this.condition;
        }, 0);
    };

    _from :string;
    get from () {
        let val;

        if (this._from) {
            val = new Date(this._from);
            val.setMinutes(val.getMinutes() - this.tzOffset);
        }

        return val && val.toISOString().slice(0, 16);
    }
    set from (val) {
        let _val = new Date(val);
        if (val === undefined || isNaN(_val.getTime())) {
            this._from = undefined;
        } else {
            _val.setMinutes(_val.getMinutes() + this.tzOffset);
            this._from = _val.toISOString();
        }
        this.filter.value = this.condition;
    };

    _to :string;
    get to () {
        let val;

        if (this._to) {
            val = new Date(this._to);
            val.setMinutes(val.getMinutes() - this.tzOffset);
        }
        return val && val.toISOString().slice(0, 16);
    }
    set to (val) {
        let _val = new Date(val);
        if (val === undefined || isNaN(_val.getDate())) {
            this._to = undefined;
        } else {
            _val.setMinutes(_val.getMinutes() + this.tzOffset);
            this._to = _val.toISOString();
        }
        this.filter.value = this.condition;
    };

    _eq: string;
    get eq () {
        let val;

        if (this._eq) {
            val = new Date(this._eq);
            val.setMinutes(val.getMinutes() - this.tzOffset);
        }
        return val && val.toISOString().slice(0, 16);
    }
    set eq (val) {
        let _val = new Date(val);
        if (val === undefined || isNaN(_val.getTime())) {
            this._eq = undefined;
        } else {
            _val.setMinutes(_val.getMinutes() + this.tzOffset);
            this._eq = _val.toISOString();
        }
        this.filter.value = this.condition;
    };

    @Input('filter') set inputFilter (val) {
        this.filter = val;
        let initial = val.value;
        if (initial) {
            if (initial.$eq !== undefined) {
                this.type = 'equal';
                let $eq :any = new Date(initial.$eq);
                $eq.setMinutes($eq.getMinutes() - this.tzOffset);

                this.eq = initial.$eq;
            } else if (initial.$gte !== undefined || initial.$lte !== undefined) {
                let $gte :any = new Date(initial.$gte);
                $gte.setMinutes($gte.getMinutes() - this.tzOffset);

                let $lte :any = new Date(initial.$lte);
                $lte.setMinutes($lte.getMinutes() - this.tzOffset);

                this.from = $gte;
                this.to = $lte;
            }
        }
    };

    del (filter) {
        this.filter.value = false;
    }

    get min () {
        return this.filter && this.filter.min || '';
    }

    get max () {
        return this.filter && this.filter.max || '';
    }

    get condition () {
        let result :any = {};
        if (this.type === 'from-to') {
            if (this._from !== undefined) {
                (result || (result = {})).$gte = new Date(this._from);
            }
            if (this._to !== undefined) {
                (result || (result = {})).$lte = new Date(this._to);
            }
        } else if (this._eq !== undefined) {
            (result || (result = {})).$eq = new Date(this._eq);
        }
        return result;
    }

    set condition (val) {}
}

export default DataGridFiltersDate
