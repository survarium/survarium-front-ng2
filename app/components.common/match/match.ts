import { Component, Input } from 'angular2/core'
import { RouterLink } from 'angular2/router'

@Component({
    directives: [RouterLink],
    selector: 'match',
    template: `<a [routerLink]="['/Matches', 'MatchesDetail', { match: id }]">{{id}}</a>`
})

export class Match {
    @Input() id :number;
}

export default Match
