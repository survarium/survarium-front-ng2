import { Component } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { ArmoryItemRecoil } from './armory-item-recoil'
import { NumberPipe } from '../../pipes/number'

@Component({
    selector: '[weapon]',
    inputs: ['verData'],
    directives: [ArmoryItemRecoil],
    template: require('./armory-item-weapon.html'),
    styles: [require('./armory-item-weapon.styl')],
    pipes: [I18NPipe, NumberPipe]
})

export class ArmoryItemWeapon {}
