import { Component } from 'angular2/core'
import { NgIf } from 'angular2/common'

@Component({
    selector: 'clan',
    directives: [NgIf],
    inputs: ['data'],
    template: `<a *ngIf="data" class="clan" title="{{data.name}}">{{data.abbr}}</a>`,
    styles: [`
        .clan::before {
            content: '[';
        }
        .clan::after {
            content: '] ';
        }
    `]
})

export default class Clan {}
