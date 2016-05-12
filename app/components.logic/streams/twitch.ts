import { StreamsComponent } from './streams.component'
import { Component, ViewContainerRef } from '@angular/core'
import { TwitchService } from '../../services/twitch'
import { TitleService } from '../../services/title'
import I18NPipe from '../../pipes/i18n'
import { I18N } from '../../services/i18n'
import { DateTimePipe } from '../../pipes/datetime'
import { StreamsFormatsService } from './streams__formats'

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
        live: null
    };

    constructor(view :ViewContainerRef,
                private twitch :TwitchService,
                private title  :TitleService,
                i18n :I18N,
                service :StreamsFormatsService) {

        super(view, service);

        title.setTitle(i18n.get('streams.docTitle', { service: 'Twitch' }));
        title.setDescription(i18n.get('streams.docDescription', { service: 'Twitch' }));

        twitch.list({}).subscribe((data) => {
            this.data.live = data.streams;
        });
    }
}
