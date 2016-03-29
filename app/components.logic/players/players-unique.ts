import { Component } from 'angular2/core'
import { PlayersService } from '../../services/api'
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'

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

    constructor (private playersService :PlayersService) {
        playersService
            .unique()
            .subscribe(data => {
                this.unique = data;
            }, err => {

            });
    }

}
