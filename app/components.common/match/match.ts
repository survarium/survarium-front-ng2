import { Component, Input } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: 'match',
    template: `<a [routerLink]="['/Matches', 'MatchesDetail', { match: id }]">{{id}}</a>`
})

export class Match {
    @Input() id :number;
}

export default Match
