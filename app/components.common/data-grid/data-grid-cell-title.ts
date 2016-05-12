import { Component, DynamicComponentLoader } from '@angular/core'
import DataGridCell from './data-grid-cell'

@Component({
    selector: 'data-grid-cell-title',
    inputs: ['title'],
    template: `{{title}}`,
    styles: [require('./data-grid-cell.styl'), require('./data-grid-cell-title.styl')]
})

export class DataGridCellTitle extends DataGridCell {
    _isTitleCell :boolean = true;

    constructor(dcl :DynamicComponentLoader) {
        super(dcl);
    }
}

export default DataGridCellTitle
