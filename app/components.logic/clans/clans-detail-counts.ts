import { Component } from '@angular/core'

@Component({
    selector: 'clans-detail-counts',
    inputs: ['data', 'total'],
    template: require('./clans-detail-counts.html')
})
export class ClansDetailCounts {}

export default ClansDetailCounts
