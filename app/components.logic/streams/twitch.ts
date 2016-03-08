import { StreamsComponent } from './streams.component'
import { Component, ViewContainerRef } from 'angular2/core'
import { TwitchService } from '../../services/twitch'
import { TitleService } from '../../services/title'
import I18NPipe from '../../pipes/i18n'
import { I18N } from '../../services/i18n'
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

    constructor(view :ViewContainerRef,
                private twitch :TwitchService,
                private title  :TitleService,
                i18n: I18N) {

        super(view);

        title.setTitle(i18n.get('streams.docTitle', { service: 'Twitch' }));

        twitch.list({}).subscribe((data) => {
            this.data.live = data.streams;
        });
    }
}
