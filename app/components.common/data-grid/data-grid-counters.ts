import { Component, Input } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'

@Component({
    selector: 'data-grid-counters',
    inputs: ['skip', 'limit', 'total', 'filtered'],
    pipes: [I18NPipe, NumberPipe],
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
