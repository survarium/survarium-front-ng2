import { NgModule } from '@angular/core'
import { Timeline } from './timeline'
import { PlayersTop } from '../players/players-top'
import { PlayersUnique } from '../players/players-unique'
import { PlayersOnlineSteam } from '../players/players-online-steam'
import { Twitter } from  '../../components.common/twitter/twitter'
import { Discord } from  '../../components.common/discord/discord'
import { Facebook } from  '../../components.common/facebook/facebook'
import { MOTD } from  '../../components.common/motd/motd'
import { SharedModule } from '../../shared'
import { Home } from './home.component'
import { FactionChallenge } from './faction-challenge'
import { Schedule } from './schedule'
import { routing } from './home.routing'

@NgModule({
    imports: [SharedModule, routing],
    declarations: [Home, Timeline, PlayersTop, PlayersUnique, Twitter, Discord, PlayersOnlineSteam, Facebook, MOTD, FactionChallenge, Schedule],
    providers: [],
    entryComponents: []
})

export class HomeModule {}
