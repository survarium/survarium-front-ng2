import { Component, Input } from 'angular2/core'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'map',
    pipes: [I18NPipe],
    template: `{{i18nKey | i18n: { allowOriginal: original } }}`
})

export class Map {
    i18nKey  :string;
    original :string;

    @Input('name') set name (val) {
        this.original = val;
        this.i18nKey  = `maps.${val}`;
    };
}

export default Map
