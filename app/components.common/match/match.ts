import { Component, Input } from 'angular2/core'

@Component({
    selector: 'match',
    template: `<a href="https://survarium.pro/?match={{id}}" target="_blank">{{id}}</a>`
})

export default class Match {
    @Input() id :number;
}
