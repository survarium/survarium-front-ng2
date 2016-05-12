import { Component, Input } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'mode',
    pipes: [I18NPipe],
    template: `{{i18nKey | i18n: { allowOriginal: true } }}`
})

export class Mode {
    i18nKey :string;

    @Input('name') set name (val) {
        this.i18nKey = `modes.${val}`;
    };
}

export default Mode
