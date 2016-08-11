import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizationService } from '@angular/platform-browser'
/*import { DiscordService } from '../../services/discord'*/
import { I18NPipe } from '../../pipes/i18n'
import { Widget, WidgetStyle } from '../widget/widget'

@Component({
    selector: 'discord',
    template: require('./discord.html'),
    /*providers: [DiscordService],*/
    inputs: ['width', 'height'],
    pipes: [I18NPipe],
    styles: [WidgetStyle]
})

export class Discord extends Widget implements OnInit {
    @Input('id') private id;
    private iframeSrc;

    constructor (private _domSanitize :DomSanitizationService) {
        super();
    }

    ngOnInit() {
        this.iframeSrc = this._domSanitize.bypassSecurityTrustResourceUrl(`https://discordapp.com/widget?id=${this.id}&theme=dark`);
    }

    /*private widget :any;

    constructor (private discordService :DiscordService) {
        discordService.widget().subscribe((data) => {
            this.widget = data;
        });
    }*/
}
export default Discord
