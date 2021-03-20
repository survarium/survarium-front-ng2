import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { PlayersService } from '../../services/api'
import { TrackService } from '../../services/track'

@Component({
    selector: 'players-top',
    template: require('./players-top.html'),
    styles: [require('./players-top.styl')]
})

export class PlayersTop {
    private data :any;
    private set top (val) {
        this.data = val;
    };

    private stream;
    private streamTrigger :(options ?:any) => void;
    private period = 'hour';

    constructor (private playersService :PlayersService, private trackService :TrackService) {
        this.stream = Observable.create((observer) => this.streamTrigger = (options) => observer.next(options));
        this.stream
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap((options :any) => { return playersService.top(options) })
            .subscribe(data => {
                this.top = data;
            }, (err) => {});

        this.load();
    }

    public load () {
        if (!this.streamTrigger) {
            return;
        }

        this.streamTrigger({
            period: this.period
        });
    }

    private switch () {
        this.period = this.period === 'hour' ? 'day' : 'hour';
        this.trackService.track({
            ya: { goal:'players.top.switch', options: { period: this.period } },
            ga: { category: 'Players top', action: 'switch period', label : `period:${this.period}`,}
        });
        this.load();
    }
}
