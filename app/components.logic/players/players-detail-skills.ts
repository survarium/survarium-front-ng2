import { Component, Input } from '@angular/core'
import { PlayersService } from '../../services/api'

@Component({
    selector: 'players-detail-skills',
    template: require('./players-detail-skills.html'),
    styles: [require('./players-detail-skills.styl')]
})

export class PlayersDetailSkills {
    private shown = false;
    @Input() private nickname :string;

    constructor (private playersService :PlayersService) {}

    private skills :any[];

    private toggle () {
        this.shown = !this.shown;

        if (this.shown && !this.skills) {
            this.playersService.skills(this.nickname).subscribe(skills => this.skills = skills, err => console.error(err));
        }
    }
}
