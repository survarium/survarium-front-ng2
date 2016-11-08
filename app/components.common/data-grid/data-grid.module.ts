import { NgModule } from '@angular/core';
import { DataGrid } from './data-grid';
import Cell from './data-grid-cell'
import CellTitle from './data-grid-cell-title'
import Loading from './data-grid-loading'
import Limits from './data-grid-limits'
import { SharedModule } from '../../shared'

@NgModule({
    imports: [SharedModule],
    declarations: [
        DataGrid,
        Cell,
        CellTitle,
        Loading,
        Limits
    ],
    exports: [DataGrid]
})
export class DataGridModule { }
