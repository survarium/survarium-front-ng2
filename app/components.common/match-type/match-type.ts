import { Component } from '@angular/core'

@Component({
    selector: 'match-type',
    inputs: ['type', 'mode'],
    template: `{{(mode && mode.title === 'pve') ? ('modes.pve' | i18n) : type ? ('matches.rating' | i18n) : ('matches.random' | i18n)}}`
})

export class MatchType { }
export default MatchType
