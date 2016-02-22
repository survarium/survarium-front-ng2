import { Component, Input } from 'angular2/core'
import { I18NPipe } from '../../services/i18n'

@Component({
    selector: 'map',
    pipes: [I18NPipe],
    template: `{{i18nKey | i18n:'allowOriginal'}}`
})

export default class Map {
    i18nKey :string;

    @Input('name') set name (val) {
        this.i18nKey = `maps.${val}`;
    };
}
