import { Component } from '@angular/core'

@Component({
    selector: 'players-detail-counts',
    inputs: ['data'],
    template: require('./players-detail-counts.html'),
    styles: [`.def-list__title:first-of-type { margin-top: 0; }`]
})

export default class PlayersDetailCounts { }
