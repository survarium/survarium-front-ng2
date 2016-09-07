import { Component } from '@angular/core'

@Component({
    selector: '[drugs]',
    inputs: ['verData'],
    template: require('./armory-item-drugs.html'),
    styles: [require('./armory-item-drugs.styl')]
})

export class ArmoryItemDrugs {}
