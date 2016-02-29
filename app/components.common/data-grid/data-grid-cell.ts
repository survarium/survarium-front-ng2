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
    styles: [require('./data-grid-cell.css')]
})

export class DataGridCell implements OnInit {
    @Input() column :any;
    @Input() columnIndex :number;
    @Input() @Optional() row :any;
    @Input() @Optional() rowIndex :number;
    @Input() skip :number;

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

    ngOnInit () :any {
        let column = this.column;

        if (!column) {
            return;
        }

        if (!this.row) {
            return;
        }

        if (column.number) {
            return this.content = this.skip + this.rowIndex + 1;
        }

        if (column.component) {
            return this.dcl.loadIntoLocation(column.component, this.elementRef, `componentAnchor`)
                .then((res :ComponentRef) => {
                    if (column.inputs) {
                        Object.keys(column.inputs).forEach((input) => {
                            let __input = column.inputs[input];
                            res.instance[input] = __input.useValue !== undefined ? __input.useValue : this.getCell(__input);
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
