import { Component, Input } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated'
import { I18N } from '../../services/i18n'

@Component({
    selector: 'clan',
    directives: [ROUTER_DIRECTIVES],
    inputs: ['abbr', 'name', 'classes', 'win', 'nowrap'],
    template: require('./clan.html'),
    styles: [require('./clan.styl')]
})

export class Clan {
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

    private nowrap :boolean;
    @Input('nowrap') set _nowrap (val :boolean) {
        this.nowrap = !!val;
    }
}

export default Clan
