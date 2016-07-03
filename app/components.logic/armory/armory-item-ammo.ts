import { Component } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'
import { PercentPipe } from '../../pipes/percent'

@Component({
    selector: '[ammo]',
    inputs: ['verData'],
    directives: [],
    template: require('./armory-item-ammo.html'),
    styles: [require('./armory-item-ammo.styl')],
    pipes: [I18NPipe, NumberPipe, PercentPipe]
})

export class ArmoryItemAmmo {}
