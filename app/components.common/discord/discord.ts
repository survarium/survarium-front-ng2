import { Component } from 'angular2/core'
/*import { DiscordService } from '../../services/discord'*/
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'discord',
    template: require('./discord.html'),
    /*providers: [DiscordService],*/
    pipes: [I18NPipe],
    styles: [require('./discord.styl')]
})

export class Discord {
    /*private widget :any;

    constructor (private discordService :DiscordService) {
        discordService.widget().subscribe((data) => {
            this.widget = data;
        });
    }*/
}
export default Discord
