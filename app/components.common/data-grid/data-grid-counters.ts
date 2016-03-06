import { Component, EventEmitter, Input, Output } from 'angular2/core'
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'

@Component({
    selector: 'data-grid-counters',
    inputs: ['skip', 'limit', 'total'],
    pipes: [I18NPipe, NumberPipe],
    template: require('./data-grid-counters.html'),
    styles: [require('./data-grid-counters.styl')]
})

export class DataGridCounters {
    @Input() skip :number;
    @Input() limit :number;
    @Input() total :number;

    isNaN = isNaN;

    private get to () :number {
        return Math.min(this.skip + this.limit, this.total);
    }
}

export default DataGridCounters
