import { Component } from 'angular2/core'
import { I18NPipe } from '../../pipes/i18n'
import { PercentPipe } from '../../pipes/percent'
import { DateTimePipe } from '../../pipes/datetime'

@Component({
    selector: 'clans-detail-counts',
    pipes: [I18NPipe, PercentPipe, DateTimePipe],
    inputs: ['data', 'total'],
    template: require('./clans-detail-counts.html')
})
export class ClansDetailCounts {}

export default ClansDetailCounts
