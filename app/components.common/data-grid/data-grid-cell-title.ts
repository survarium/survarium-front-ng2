import { Component, EventEmitter, DynamicComponentLoader, ElementRef, Injector } from 'angular2/core'
import DataGridCell from './data-grid-cell'

@Component({
    selector: 'data-grid-cell-title',
    inputs: ['title'],
    template: `{{title}}`,
    styles: [
        `
        :host {
            display: inline-block;
            vertical-align: middle;
            box-sizing: border-box;
            padding: .2em .3em;

            border: 1px solid #414141;
            border-left-width: 0;
            border-bottom-width: 0;

            height: 100%;
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

export class DataGridCellTitle extends DataGridCell {
    constructor(dcl :DynamicComponentLoader, elementRef :ElementRef, injector :Injector) {
        super(dcl, elementRef, injector);
    }
}

export default DataGridCellTitle
