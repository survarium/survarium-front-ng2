import { Component, Input } from '@angular/core'

@Component({
    selector: 'data-grid-counters',
    template: require('./data-grid-counters.html'),
    styles: [require('./data-grid-counters.styl')]
})

export class DataGridCounters {
    @Input() skip :number;
    @Input() limit :number;
    @Input() total :number;

    filtered :any;
    @Input('filtered') set setFiltered(val) {
        this.filtered = (val !== undefined && val !== this.total) ? val : undefined;
    }

    isNaN = isNaN;

    private get to () :number {
        return Math.min(this.skip + this.limit, this.filtered !== undefined ? this.filtered : this.total);
    }
}

export default DataGridCounters
