import { Component } from '@angular/core'

@Component({
    selector: '[grenade]',
    inputs: ['verData'],
    template: require('./armory-item-grenade.html'),
    styles: [require('./armory-item-grenade.styl')]
})

export class ArmoryItemGrenade {}
