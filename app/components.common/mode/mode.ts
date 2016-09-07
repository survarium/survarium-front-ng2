import { Component, Input } from '@angular/core'

@Component({
    selector: 'mode',
    template: `{{i18nKey | i18n: { allowOriginal: true } }}`
})

export class Mode {
    i18nKey :string;

    @Input('name') set name (val) {
        this.i18nKey = `modes.${val}`;
    };
}

export default Mode
