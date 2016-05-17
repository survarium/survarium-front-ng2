import { Component, Input } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'badges',
    inputs: ['player'],
    pipes: [I18NPipe],
    template: require('./badges.html'),
    styles: [require('./badges.styl')]
})

export class Badges {
    private badges :any[] = [];
    private player :any;

    @Input('player') set setPlayer (val) {
        if (val.nickname === 'Vaseker') {
            this.badges.push('svpro-developer');
        }

        if (val.banned) {
            this.badges.push('cheater');
        }
    }
}

export default Badges
