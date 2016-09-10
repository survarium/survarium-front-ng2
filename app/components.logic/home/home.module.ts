import { NgModule } from '@angular/core'
import { Timeline } from './timeline'
import { PlayersTop } from '../players/players-top'
import { PlayersUnique } from '../players/players-unique'
import { VkFeed } from '../../components.common/vk-feed/vk-feed'
import { VkFeedWidget } from '../../components.common/vk-feed/vk-feed-widget'
import { Twitter } from  '../../components.common/twitter/twitter'
import { Discord } from  '../../components.common/discord/discord'
import { VkFeedService } from '../../services/vk-feed'
import { SharedModule } from '../../shared'
import { Home } from './home.component'
import { routing } from './home.routing'

@NgModule({
    imports: [SharedModule, routing],
    declarations: [Home, Timeline, PlayersTop, PlayersUnique, VkFeedWidget, VkFeed, Twitter, Discord],
    providers: [VkFeedService],
    entryComponents: [VkFeedWidget]
})

export class HomeModule {}
