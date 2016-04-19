import { Component, Input } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'badges',
    directives: [NgIf],
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
    }
}

export default Badges
