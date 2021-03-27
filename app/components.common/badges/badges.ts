import { Component, Input } from '@angular/core'

@Component({
    selector: 'badge',
    template: '<ng-content></ng-content>'
})

export class Badge {}

@Component({
    selector: 'badges',
    template: require('./badges.html'),
    styles: [require('./badges.styl')]
})

export class Badges {
    private badges :any[];
    private player :any;

    @Input('player') set setPlayer (val) {
        this.badges = [];

        if (val.nickname === 'Vaseker' || val.nickname === 't0FF') {
            this.badges.push('svpro-developer');
        }

        if (val.banned) {
            this.badges.push('cheater');
        }

        if (val.ammunition && val.ammunition.length > 2) {
            this.badges.push('premium');
        }
    }
}

export default Badges
