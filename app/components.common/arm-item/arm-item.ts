import { Component } from '@angular/core'
import { RouterLink } from '@angular/router-deprecated'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'arm-item',
    inputs: ['item', 'thin', 'mods', 'micro'],
    directives: [RouterLink],
    template: require('./arm-item.html'),
    styles: [require('./arm-item.styl')],
    pipes: [I18NPipe],
    host: {
        '[class.mods_0]': '!mods?.length',
        '[class.mods_1]': 'mods?.length === 1',
        '[class.mods_2]': 'mods?.length === 2',
        '[class.mods_3]': 'mods?.length === 3',
        '[class.mods_4]': 'mods?.length === 4',
        '[class.mods_5]': 'mods?.length === 5',
        '[class.premium]': 'item.premium',
        '[class.rare]': '!item.premium && item.drop_weight <= 1',
        '[class.thin]': 'thin',
        '[class.micro]': 'micro'
    }
})

export class ArmItem  {}

export default ArmItem
