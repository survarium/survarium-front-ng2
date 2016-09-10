import { Component } from '@angular/core'

@Component({
    selector: '[weapon]',
    inputs: ['verData'],
    template: require('./armory-item-weapon.html'),
    styles: [require('./armory-item-weapon.styl')]
})

export class ArmoryItemWeapon {}
