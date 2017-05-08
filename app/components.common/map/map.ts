import { Component, Input } from '@angular/core'

@Component({
    selector: 'map',
    template: `{{i18nKey | i18n: { allowOriginal: original } }}`
})

export class Map {
    i18nKey  :string;
    original :string;

    @Input('name') set name (val) {
        this.original = val;
        this.i18nKey  = `maps.${val ? val.toLowerCase() : val}`;
    };
}

export default Map
