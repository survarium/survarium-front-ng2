import { Component, Input } from 'angular2/core'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'role',
    pipes: [I18NPipe],
    template: `{{i18nKey | i18n: { allowOriginal: original } }}`
})

export class Role {
    i18nKey :string;
    private original :string;

    @Input('role') set role (val) {
        this.original = val;
        this.i18nKey = `roles.${val}`;
    };
}

export default Role
