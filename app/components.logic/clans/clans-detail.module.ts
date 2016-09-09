import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { routing } from './clans-detail.routes'

import { DataGridModule } from '../../components.common/data-grid/data-grid.module'
import { ClansDetail } from './clans-detail'
import Counts from './clans-detail-counts'
import Players from './clans-detail-players'
import Matches from './clans-detail-matches'
import Clanwars from './clans-detail-clanwars'

@NgModule({
    imports: [SharedModule, routing, DataGridModule],
    declarations: [Counts, Players, Matches, Clanwars, ClansDetail]
})

export class ClansDetailModule {}
