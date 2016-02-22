import { Component, Input } from 'angular2/core'
import Cell from './data-grid-cell'
import CellTitle from './data-grid-cell-title'

@Component({
    selector: 'data-grid',
    directives: [Cell, CellTitle],
    inputs: ['data', 'columns'],
    template: `
        <div class="header" [style.width]="width">
            <data-grid-cell-title *ngFor="#column of columns, #i=index" [column]="column" [class]="column.headClasses || column.classes || defaultColumnClasses" [columnIndex]="i" [width]="column.width || defaultColumnWidth" [height]="columnHeadHeight" (click)="headerClick({ column: column, columnIndex: i }, $event)" [title]="column.title"></data-grid-cell-title>
        </div>
        <div class="body" [style.width]="width">
            <div *ngFor="#row of rows, #i=index" class="row">
                <data-grid-cell *ngFor="#column of columns, #j=index" [row]="row" [column]="column" [class]="column.classes || defaultColumnClasses" [rowIndex]="i" [columnIndex]="j" [width]="column.width || defaultColumnWidth" [height]="columnHeight" (click)="cellClick({ column: column, columnIndex: j, row: row, rowIndex: i }, $event)"></data-grid-cell>
            </div>
        </div>
    `,
    styles: [`
        :host {
            max-width: 100%;
            overflow: auto;
            display: block;
        }

        .header {
            position: relative;
        }

        .row:hover {
            background: none repeat scroll 0 0 hsla(0,0%,100%,.04);
        }

        .row:last-of-type {
            border-bottom: 1px solid #414141;
        }

        /*.row:nth-child(even) {
            background: none repeat scroll 0 0 hsla(0,0%,100%,.02);
        }*/
    `]
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
