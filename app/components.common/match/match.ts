import { Component, Input } from 'angular2/core'

@Component({
    selector: 'match',
    template: `<a onclick="return alert('Match page not implemented yet')">{{id}}</a>`
})

export default class Match {
    @Input() id :number;
}
