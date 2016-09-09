import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { routing } from './clans-list.routes'

import { DataGridModule } from '../../components.common/data-grid/data-grid.module'
import { ClansList } from './clans-list'

@NgModule({
    imports: [SharedModule, DataGridModule, routing],
    declarations: [ClansList]
})

export class ClansListModule {}
