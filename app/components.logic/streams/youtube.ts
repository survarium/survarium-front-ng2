import { StreamsComponent } from './streams.component'
import { Component, ViewContainerRef } from 'angular2/core'
import I18NPipe from '../../pipes/i18n'
import { DateTimePipe } from '../../pipes/datetime'
import { /*YoutubePlayer, */YoutubeService } from '../../services/youtube'

@Component({
    selector: 'streams',
    directives: [],
    host: {
        '(window:resize)': 'resize($event)'
    },
    providers: [/*YoutubePlayer, */YoutubeService],
    pipes: [I18NPipe, DateTimePipe],
    styles: [require('./streams.styl')],
    template: require('./youtube.html')
})

export class Youtube extends StreamsComponent {
    private YT;
    private player;

    private data = {
        live: [],
        archive: []
    };

    constructor (view :ViewContainerRef,
                 /*private youtube :YoutubePlayer,*/
                 private youtube :YoutubeService) {

        super(view);

        youtube.list({}).subscribe((data) => {
            this.data.archive = data.items;
        });

        youtube.list({ live: true }).subscribe((data) => {
            this.data.live = data.items;
        });

        /*youtube.player.subscribe((YT) => {
            this.YT = YT;
            this.player = new this.YT.Player('youtube-player', {
                height: '390',
                width: '640',
                videoId: 'M7lc1UVf-VE',
                events: {
                    onReady: this.onPlayerReady.bind(this),
                    onStateChange: this.onPlayerStateChange.bind(this)
                }
            });
        })*/
    }

    /*private onPlayerReady (event) {
        console.log('ready', event);
    }

    private done = false;

    private onPlayerStateChange (event) {
        console.log('stateChange', event);
        if (event.data == this.YT.PlayerState.PLAYING && !this.done) {
            setTimeout(this.stopVideo.bind(this), 6000);
            this.done = true;
        }
    }
    private stopVideo() {
        this.player.stopVideo();
    }*/
}
