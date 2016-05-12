import { Component } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { PercentPipe } from '../../pipes/percent'

@Component({
    selector: 'players-detail-counts',
    pipes: [I18NPipe, PercentPipe],
    inputs: ['data'],
    template: require('./players-detail-counts.html')
})

export default class PlayersDetailCounts { }
