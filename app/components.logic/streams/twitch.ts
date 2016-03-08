import { StreamsComponent } from './streams.component'
import { Component, ViewContainerRef } from 'angular2/core'
import { TwitchService } from '../../services/twitch'
import I18NPipe from '../../pipes/i18n'
import { DateTimePipe } from '../../pipes/datetime'

@Component({
    selector: 'twitch',
    pipes: [I18NPipe, DateTimePipe],
    providers: [TwitchService],
    host: {
        '(window:resize)': 'resize($event)'
    },
    styles: [require('./streams.styl')],
    template: require('./twitch.html')
})

export class Twitch extends StreamsComponent{
    private data = {
        live: []
    };

    constructor(view:ViewContainerRef,
                private twitch:TwitchService) {

        super(view);

        twitch.list({}).subscribe((data) => {
            this.data.live = data.streams;
        });
    }
}
