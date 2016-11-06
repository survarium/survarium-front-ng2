import { StreamsComponent } from './streams.component'
import { DomSanitizer } from '@angular/platform-browser'
import { Component, ViewContainerRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core'
import { TitleService } from '../../services/title'
import { I18N } from '../../services/i18n'
import { StreamsFormatsService } from './streams__formats'
import { TwitchService } from '../../services/twitch'

@Component({
    styles: [require('./streams.component.styl')],
    template: require('./twitch.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Twitch extends StreamsComponent{
    private data = {
        live: null
    };

    private getEmbed (video) {
        return this._domSanitize.bypassSecurityTrustResourceUrl(`https://player.twitch.tv/?channel=${video.channel.name}&autoplay=false`);
    }

    private getLink (video) {
        return this._domSanitize.bypassSecurityTrustUrl(video.channel.url);
    }

    private getPx (px) {
        return this._domSanitize.bypassSecurityTrustStyle(`${px}px`);
    }

    constructor(view :ViewContainerRef,
                private twitch :TwitchService,
                private title  :TitleService,
                private _domSanitize :DomSanitizer,
                i18n :I18N,
                service :StreamsFormatsService,
                changeDetector: ChangeDetectorRef) {

        super(view, service, changeDetector);

        title.setTitle(i18n.get('streams.docTitle', { service: 'Twitch' }));
        title.setDescription(i18n.get('streams.docDescription', { service: 'Twitch' }));

        changeDetector.detach();

        twitch.list({}).subscribe((data) => {
            this.data.live = data.streams;

            changeDetector.markForCheck();
            changeDetector.detectChanges();

            title.setRendered();
        });
    }
}
