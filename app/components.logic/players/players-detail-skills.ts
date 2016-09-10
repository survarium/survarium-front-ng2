import { Component, Input } from '@angular/core'
import { PlayersService } from '../../services/api'

@Component({
    selector: 'players-detail-skills',
    template: require('./players-detail-skills.html'),
    styles: [require('./players-detail-skills.styl')]
})

export class PlayersDetailSkills {
    private shown = false;
    private _nickname :string;

    @Input('nickname') set nickname (val :string) {
        this.cleanup();
        this._nickname = val;
    };

    get nickname () {
        return this._nickname;
    }

    constructor (private playersService :PlayersService) {}

    private skills :any[];

    private dataSubscriber :any;

    private toggle () {
        this.shown = !this.shown;

        if (this.shown && !this.skills) {
            this.dataSubscriber = this.playersService.skills(this.nickname).subscribe(skills => this.skills = skills, err => console.error(err));
        }
    }

    private cleanup () {
        this.shown = false;
        this.skills = null;

        if (this.dataSubscriber) {
            this.dataSubscriber.unsubscribe();
        }
    }

    ngOnDestroy () {
        this.cleanup();
    }
}
