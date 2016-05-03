import { Component } from 'angular2/core'
import { Observable } from 'rxjs/Observable'
import { PlayersService } from '../../services/api'
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'
import { Nickname } from '../../components.common/nickname/nickname'
import { Match } from '../../components.common/match/match'

@Component({
    selector: 'players-top',
    pipes: [I18NPipe, NumberPipe],
    directives: [Nickname, Match],
    template: require('./players-top.html'),
    styles: [require('./players-top.styl')]
})

export class PlayersTop {
    private data :any;
    private set top (val) {
        var best = { score: 0, index: -1 };
        val.forEach((elem, index) => {
            if (elem.score > best.score) {
                best = { score: elem.score, index };
            }
        });
        if (best.index > -1) {
            val[best.index].best = true;
        }
        this.data = val;
    };

    private stream;
    private streamTrigger :(options ?:any) => void;
    private period = 'hour';

    constructor (private playersService :PlayersService) {
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
        this.load();
    }
}
