import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router-deprecated'

@Component({
    directives: [RouterLink],
    selector: 'match',
    template: `<a [routerLink]="['/Matches', 'MatchesDetail', { match: id }]">{{id}}</a>`
})

export class Match {
    @Input() id :number;
}

export default Match
