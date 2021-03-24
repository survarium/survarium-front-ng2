import { NgModule } from '@angular/core'

import { routing } from './players.routes'
import { Players } from './players'
import { PlayersSearch } from './players-search'
import { PlayersList } from './players-list'
import { PlayersDetail } from './players-detail'
import { SharedModule } from '../../shared';
import { DataGridModule } from '../../components.common/data-grid/data-grid.module'

import Counts from './players-detail-counts'
import Matches from './players-detail-matches'
import History from './players-detail-history'
import Leveling from './players-detail-leveling'
import { PlayersDetailHistoryCounts } from './players-detail-history-counts'
import { Badge, Badges } from '../../components.common/badges/badges'
import { AlsoKnown } from '../../components.common/also-known/also-known'
import { Skills } from '../../components.common/skills/skills'
import { PlayerId } from '../../components.common/player-id/player-id'

@NgModule({
    imports: [routing, SharedModule, DataGridModule],
    declarations: [
        Players, PlayersSearch, PlayersList, PlayersDetail, PlayersDetailHistoryCounts,
        Counts, Matches, Badge, Badges, History, AlsoKnown, Leveling, Skills, PlayerId
    ]
})

export class PlayersModule {}
