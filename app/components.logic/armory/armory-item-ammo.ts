import { Component } from '@angular/core'

@Component({
    selector: '[ammo]',
    inputs: ['verData'],
    template: require('./armory-item-ammo.html'),
    styles: [require('./armory-item-ammo.styl')]
})

export class ArmoryItemAmmo {}
