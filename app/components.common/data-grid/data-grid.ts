import { Component, Input } from 'angular2/core'
import Cell from './data-grid-cell'
import CellTitle from './data-grid-cell-title'

@Component({
    selector: 'data-grid',
    directives: [Cell, CellTitle],
    inputs: ['data', 'columns'],
    template: require('./data-grid.html'),
    styles: [require('./data-grid.css')]
})

export class DataGrid {
    @Input() data    :any[] = [];
    @Input('columns') columns :any[] = [];

    @Input('columnHeadHeight') columnHeadHeight :number = 50;
    @Input('columnHeight') columnHeight :number = 30;
    @Input('colWidth') defaultColumnWidth :number = 100;
    @Input('colClasses') defaultColumnClasses :string = '';

    get width () :number {
        return this.columns.reduce((width, column) => {
            return width + (column.width || this.defaultColumnWidth);
        }, 0);
    };

    constructor () {

    }

    headerClick (event) {
        console.log('headerClick', arguments);
    }

    cellClick (event) {
        console.log('cellClick', arguments);
    }

    get rows() {
        return this.data
    }
}

export default DataGrid
