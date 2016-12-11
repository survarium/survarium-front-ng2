import { Component } from '@angular/core'

@Component({
    selector: '[trap]',
    inputs: ['verData'],
    template: require('./armory-item-trap.html'),
    styles: [require('./armory-item-trap.styl')]
})

export class ArmoryItemTrap {}
