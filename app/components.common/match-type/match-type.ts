import { Component } from '@angular/core'

@Component({
    selector: 'match-type',
    inputs: ['type'],
    template: `{{type ? ('matches.rating' | i18n) : ('matches.random' | i18n)}}`
})

export class MatchType { }
export default MatchType
