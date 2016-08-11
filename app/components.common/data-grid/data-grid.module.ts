import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataGrid } from './data-grid';
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'
import { DataGridCounters } from './data-grid-counters'
import { DataGridPagination } from './data-grid-pagination'

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ DataGrid, I18NPipe, NumberPipe, DataGridCounters, DataGridPagination ],
    exports:      [ DataGrid, I18NPipe, NumberPipe, DataGridCounters, DataGridPagination ]
})
export class DataGridModule { }
