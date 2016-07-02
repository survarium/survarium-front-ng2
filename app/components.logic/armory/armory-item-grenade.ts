import { Component } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'

@Component({
    selector: '[grenade]',
    inputs: ['verData'],
    directives: [],
    template: require('./armory-item-grenade.html'),
    styles: [require('./armory-item-grenade.styl')],
    pipes: [I18NPipe, NumberPipe]
})

export class ArmoryItemGrenade {}
