import {
    Component,
    Input,
    HostBinding,
    Optional,
    ViewChild,
    ViewContainerRef,
    ComponentRef,
    OnInit,
    AfterContentInit,
    ComponentFactory,
    ComponentFactoryResolver,
} from '@angular/core'

@Component({
    selector: 'data-grid-cell',
    template: `<i #componentAnchor></i>{{content}}`,
    styles: [require('./data-grid-cell.styl')]
})

export class DataGridCell implements OnInit, AfterContentInit {
    _isTitleCell :boolean = false;

    @Input() column :any;
    @Input() columnIndex :number;
    @Input() row :any = null;
    @Input() rowIndex :number = null;
    @Input() skip :number;

    /*@Output() cellClick :EventEmitter<any> = new EventEmitter();
    @HostListener('click', ['$event']) onClick (event) {
        event.preventDefault();
        this.cellClick.emit({ cell: this.column, row: this.row, cellIndex: this.columnIndex, rowIndex: this.rowIndex, content: this.content, event: event });
    }*/

    @HostBinding('style.width')  @Input() width  :number;
    @HostBinding('style.height') @Input() height :number;

    @HostBinding('class') get classes () {
        let classes = [];

        if (this.column && this.column.classes) {
            classes.push(this.column.classes);
        }

        if (this.column && this.column.sort && this._isTitleCell) {
            classes.push('sort');
        }

        if (this._sort) {
            classes.push(`sort_${this._sort > 0 ? 'asc' : 'desc'}`);
        }

        return classes.join(' ');
    }

    private _sort :number;
    @Input('sort') set sort(currentSort :{ column ?:any, dir ?:number }) {
        if (currentSort.column === this.column) {
            this._sort = currentSort.dir;
        } else {
            this._sort = undefined;
        }
    }

    private content;

    constructor (private componentResolver: ComponentFactoryResolver) {}

    private getDataFromPath (path :string) {
        return path.split('.').reduce((row, field) => {
            return row && row[field];
        }, this.row);
    }

    private getCell (path :any) {
        if (!path) {
            return 'ERR: no data path provided';
        }

        if (path instanceof Array) {
            let data;

            for (let i = 0; i < path.length; i++) {
                data = this.getDataFromPath(path[i]);

                if (data) {
                    break;
                }
            }

            return data;
        }

        return this.getDataFromPath(path);
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
            return;
        }

        this.content = this.column.render ?
            this.column.render(column.field ? this.getCell(column.field) : null, this.row) :
            this.getCell(column.field);
    }

    @ViewChild('componentAnchor', { read: ViewContainerRef }) private target :ViewContainerRef;

    ngAfterContentInit () {
        let column = this.column;

        if (!column || !column.component || !this.target) {
            return;
        }

        let componentFactory :ComponentFactory<any> = this.componentResolver.resolveComponentFactory(column.component);
        let componentRef :ComponentRef<any> = this.target.createComponent(componentFactory);

        if (column.inputs) {
            Object.keys(column.inputs).forEach((input) => {
                let __input = column.inputs[input];

                componentRef.instance[input] = __input.useValue !== undefined ? __input.useValue : this.getCell(__input);
            });
        }
    }
}

export default DataGridCell
