import { Component, Inject } from '@angular/core'
import { PlayersService } from '../../services/api'
import TitleService from '../../services/title'
import { i18n } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'
import { DateTimePipe } from '../../pipes/datetime'
import { TelegramChannel } from '../../components.common/telegram-channel/telegram-channel'
import { VkGroup } from '../../components.common/vk-group/vk-group'
import { Nickname } from '../../components.common/nickname/nickname'
import { Thanks } from './thanks'

@Component({
    selector: 'about',
    pipes: [I18NPipe, DateTimePipe],
    directives: [TelegramChannel, Nickname, VkGroup, Thanks],
    template: require('./about.html'),
    styles: [require('./about.styl')]
})

export class About {
    private developer;

    constructor(private playersService :PlayersService,
                private _title :TitleService,
                @Inject('CONFIG') private config
    ) {
        this._title.setTitle(i18n.get('about.docTitle'));
        this._title.setDescription(i18n.get('about.docDescription'));
        playersService
            .fetch('Vaseker')
            .subscribe((developer) => {
                this.developer = developer;
            }, () => {});
    }
}
