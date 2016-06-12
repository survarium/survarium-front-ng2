import { Component, Input } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { PlayersService } from '../../services/api'
import { Skills } from '../../components.common/skills/skills'

@Component({
    selector: 'players-detail-skills',
    directives: [Skills],
    pipes: [I18NPipe],
    inputs: ['nickname'],
    template: require('./players-detail-skills.html'),
    styles: [require('./players-detail-skills.styl')]
})

export default class PlayersDetailSkills {
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
