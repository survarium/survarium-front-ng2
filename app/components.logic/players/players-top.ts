import { Component } from 'angular2/core'
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
        this.data = val;
    };

    constructor (private playersService :PlayersService) {
        playersService
            .top()
            .subscribe(data => {
                this.top = data;
            }, err => {

            });
    }

}
