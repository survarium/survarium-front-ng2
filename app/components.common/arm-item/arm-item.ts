import { Component } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'arm-item',
    inputs: ['item'],
    template: require('./arm-item.html'),
    styles: [require('./arm-item.styl')],
    pipes: [I18NPipe],
    host: {
        '[class.premium]': 'item.premium',
        '[class.rare]': 'item.drop_weight === 0'
    }
})

export class ArmItem  {}

export default ArmItem
