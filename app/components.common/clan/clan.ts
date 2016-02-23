import { Component, Input } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { I18N } from '../../services/i18n'

@Component({
    selector: 'clan',
    directives: [NgIf],
    inputs: ['data', 'classes', 'win'],
    template: `<a *ngIf="data" class="clan" href="https://survarium.pro/?clan={{data.abbr}}" target="_blank" title="{{_preTitle}}{{data.name}}" [class]="_classes">{{data.abbr}}</a>`,
    styles: [`
        :host {
            display: inline;
        }
        .clan_default::before {
            content: '[';
        }
        .clan_default::after {
            content: '] ';
        }
        .clan_winner {
            font-weight: 700;
            color: #ffce1f;
        }
    `]
})

export default class Clan {
    classDefault = 'clan_default';
    private _classes :string = this.classDefault;

    private _preTitle :string = '';

    constructor (private i18n :I18N) {}

    @Input('classes') set classes (val) {
        if (val === null) {
            this._classes = '';
        } else if (val !== undefined) {
            this._classes = val;
        }
    }

    @Input('win') set win (val) {
        if (!val) {
            return;
        }
        this._preTitle = this.i18n.get('matches.cw.winner') + ': ';
        this._classes += ' clan_winner';
    }
}
