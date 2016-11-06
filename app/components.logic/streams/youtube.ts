import { StreamsComponent } from './streams.component'
import { DomSanitizer } from '@angular/platform-browser'
import { Component, ViewContainerRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core'
import { I18N } from '../../services/i18n'
import { TitleService } from '../../services/title'
import { YoutubeService } from '../../services/youtube'
import { StreamsFormatsService } from './streams__formats'

@Component({
    template: require('./youtube.html'),
    styles: [require('./streams.component.styl')],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Youtube extends StreamsComponent {
    private data = {
        live: null,
        archive: null
    };

    private getEmbed (video) {
        return this._domSanitize.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.id.videoId}`);
    };

    private getLink (video) {
        return this._domSanitize.bypassSecurityTrustUrl(`https://www.youtube.com/watch?v=${video.id.videoId}`);
    };

    private getPx (px) {
        return this._domSanitize.bypassSecurityTrustStyle(`${px}px`);
    };

    constructor (view :ViewContainerRef,
                 private youtube :YoutubeService,
                 private title   :TitleService,
                 private _domSanitize :DomSanitizer,
                 i18n :I18N,
                 service :StreamsFormatsService,
                 changeDetector: ChangeDetectorRef) {

        super(view, service, changeDetector);

        title.setTitle(i18n.get('streams.docTitle', { service: 'Youtube' }));
        title.setDescription(i18n.get('streams.docDescription', { service: 'Youtube' }));

        changeDetector.detach();

        var defers = 2;
        var done = function () {
            if (--defers) {
                return;
            }

            title.setRendered();
        };

        youtube.list({}).subscribe((data) => {
            this.data.archive = data.items;

            changeDetector.markForCheck();
            changeDetector.detectChanges();

            done();
        });

        youtube.list({ live: true }).subscribe((data) => {
            this.data.live = data.items;

            changeDetector.markForCheck();
            changeDetector.detectChanges();

            done();
        });
    }
}
