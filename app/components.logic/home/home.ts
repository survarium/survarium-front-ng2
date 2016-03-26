import { Component } from 'angular2/core'
import { TitleService } from '../../services/title'
import { Timeline } from './timeline'
import { PlayersTop } from '../players/players-top'

@Component({
    selector: 'home',
    directives: [Timeline, PlayersTop],
    template: `<players-top></players-top><timeline></timeline>`,
    styles: [require('./home.styl')]
})

export class Home {
    constructor (private title :TitleService) {
        title.setTitle();
    }
}
