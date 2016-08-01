import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { PlayersService } from '../../services/api'
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'
import { TrackService } from '../../services/track'

const PERIODS = ['day', 'hour', 'half'];

@Component({
    selector: 'players-unique',
    pipes: [I18NPipe, NumberPipe],
    directives: [],
    template: require('./players-unique.html'),
    styles: [require('./players-unique.styl')]
})

export class PlayersUnique {
    private data :any;
    private set unique (val) {
        this.data = val.count;
    };

    private periodIndex = 0;

    get period() {
        return PERIODS[this.periodIndex];
    }

    private stream;
    private streamTrigger :(options ?:any) => void;

    constructor (private playersService :PlayersService, private trackService :TrackService) {
        this.stream = Observable.create((observer) => this.streamTrigger = (options) => observer.next(options));
        this.stream
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap((options :any) => { return playersService.unique(options) })
            .subscribe(data => {
                this.unique = data;
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
        this.periodIndex = this.periodIndex + 1 >= PERIODS.length ? 0 : this.periodIndex + 1;

        this.trackService.track({
            ya: { goal:'players.unique.switch', options: { period: this.period } },
            ga: { category: 'Players unique', action: 'switch period', label : `period:${this.period}`,}
        });
        this.load();
    }

}
