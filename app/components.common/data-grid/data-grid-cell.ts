import {
    Component,
    EventEmitter,
    Input,
    Output,
    HostListener,
    HostBinding,
    Optional,
    DynamicComponentLoader,
    ElementRef,
    Injector,
    ComponentRef,
    OnInit
} from 'angular2/core'

@Component({
    selector: 'data-grid-cell',
    template: `<div #componentAnchor></div>{{content}}`,
    styles: [
        `
        :host {
            display: inline-block;
            box-sizing: border-box;
            padding: .3em .3em;
            text-overflow: ellipsis;
            overflow: hidden;
            vertical-align: middle;

            border: 1px solid #414141;
            border-left-width: 0;
            border-bottom-width: 0;
        }

        :host:first-of-type {
            border-left-width: 1px;
        }

        :host.center {
            text-align: center;
        }
        `
    ]
})

export class DataGridCell implements OnInit {
    @Input() column :any;
    @Input() columnIndex :number;
    @Input() @Optional() row :any;
    @Input() @Optional() rowIndex :number;

    /*@Output() cellClick :EventEmitter<any> = new EventEmitter();
    @HostListener('click', ['$event']) onClick (event) {
        event.preventDefault();
        this.cellClick.emit({ cell: this.column, row: this.row, cellIndex: this.columnIndex, rowIndex: this.rowIndex, content: this.content, event: event });
    }*/

    @HostBinding('style.width')  @Input() width  :number;
    @HostBinding('style.height') @Input() height :number;

    private content;

    constructor (private dcl :DynamicComponentLoader, private elementRef :ElementRef, private injector :Injector) {}

    private getCell (path :string) {
        if (!path) {
            return 'ERR: no data path provided';
        }
        return path.split('.').reduce((row, field) => {
            return row && row[field];
        }, this.row);
    }

    ngOnInit () {
        let column = this.column;

        if (!column) {
            return;
        }

        if (!this.row) {
            return;
        }

        if (column.component) {
            return this.dcl.loadIntoLocation(column.component, this.elementRef, `componentAnchor`)
                .then((res :ComponentRef) => {
                    if (column.inputs) {
                        Object.keys(column.inputs).forEach((input) => {
                            res.instance[input] = this.getCell(column.inputs[input]);
                        });
                    }
                });
        }

        this.content = this.column.render ?
            this.column.render(column.field ? this.getCell(column.field) : null, this.row) :
            this.getCell(column.field);
    }
}

export default DataGridCell
