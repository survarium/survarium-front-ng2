import { NgModule } from '@angular/core'

import { routing } from './matches.routes'
import { Matches } from './matches'
import { MatchesDetail } from './matches-detail'
import { MatchesList } from './matches-list'
import { MatchesListCW } from './matches-list-cw'
import { MatchesSearch } from './matches-search'
import { SharedModule } from '../../shared';
import { DataGridModule } from '../../components.common/data-grid/data-grid.module'

@NgModule({
    imports: [routing, SharedModule, DataGridModule],
    declarations: [
        Matches,
        MatchesDetail,
        MatchesList,
        MatchesListCW,
        MatchesSearch
    ]
})

export class MatchesModule {}
