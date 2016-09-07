import { Component, Input } from '@angular/core'

@Component({
    selector: 'match',
    template: `<a routerLink="['matches', { match: id }]">{{id}}</a>`
})

export class Match {
    @Input() id :number;
}

export default Match
