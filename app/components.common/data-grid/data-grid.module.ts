import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataGrid } from './data-grid';
import Cell from './data-grid-cell'
import CellTitle from './data-grid-cell-title'
import Loading from './data-grid-loading'
import Filters from './data-grid-filters'
import Limits from './data-grid-limits'
import { DataGridFiltersNumber } from './data-grid-filters-number';
import { DataGridFiltersDate } from './data-grid-filters-date';
import { SharedModule } from '../../shared'

@NgModule({
    imports: [CommonModule, FormsModule, SharedModule],
    declarations: [
        DataGrid,
        DataGridFiltersNumber,
        DataGridFiltersDate,
        Cell,
        CellTitle,
        Loading,
        Filters,
        Limits
    ],
    exports: [DataGrid]
})
export class DataGridModule { }
