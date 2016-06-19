import { Component } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { PercentPipe } from '../../pipes/percent'
import { NumberPipe } from '../../pipes/number'

@Component({
    selector: 'players-detail-counts',
    pipes: [I18NPipe, PercentPipe, NumberPipe],
    inputs: ['data'],
    template: require('./players-detail-counts.html'),
    styles: [`.def-list__title:first-of-type { margin-top: 0; }`]
})

export default class PlayersDetailCounts { }
