import { Component } from '@angular/core'
import { TitleService } from '../../services/title'
import { Timeline } from './timeline'
import { PlayersTop } from '../players/players-top'
import { PlayersUnique } from '../players/players-unique'
import { VkFeed } from '../../components.common/vk-feed/vk-feed'
import { Discord } from '../../components.common/discord/discord'
import { Twitter } from '../../components.common/twitter/twitter'
import { i18n } from '../../services/i18n'

@Component({
    selector: 'home',
    directives: [Timeline, PlayersTop, PlayersUnique, VkFeed, Discord, Twitter],
    template: require('./home.html'),
    styles: [require('./home.styl')]
})

export class Home {
    constructor (private title :TitleService) {
        title.setTitle();
        title.setDescription(i18n.get('home.docDescription'));
    }
}
