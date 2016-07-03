import { Component } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'
import { PercentPipe } from '../../pipes/percent'

@Component({
    selector: '[drugs]',
    inputs: ['verData'],
    directives: [],
    template: require('./armory-item-drugs.html'),
    styles: [require('./armory-item-drugs.styl')],
    pipes: [I18NPipe, NumberPipe, PercentPipe]
})

export class ArmoryItemDrugs {}
