import { Component } from '@angular/core'
/*import { DiscordService } from '../../services/discord'*/
import { I18NPipe } from '../../pipes/i18n'
import { Widget, WidgetStyle } from '../widget/widget'

@Component({
    selector: 'discord',
    template: require('./discord.html'),
    /*providers: [DiscordService],*/
    inputs: ['id', 'width', 'height'],
    pipes: [I18NPipe],
    styles: [WidgetStyle]
})

export class Discord extends Widget {
    /*private widget :any;

    constructor (private discordService :DiscordService) {
        discordService.widget().subscribe((data) => {
            this.widget = data;
        });
    }*/
}
export default Discord
