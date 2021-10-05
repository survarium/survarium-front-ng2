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

        if (val.scl && val.scl.includes('scl')) {
            let allBadges = val.scl.split(' ');
            let tmpArray = [];
            allBadges.forEach(function e(element) {
                if(element != "sclCheat") {
                    tmpArray.push(element);
                }
            });
            tmpArray.forEach(element => this.badges.push(element));
        }
    }
}

export default Badges
