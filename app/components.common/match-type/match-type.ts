import { Component } from '@angular/core'

@Component({
    selector: 'match-type',
    inputs: ['type', 'mode', 'match'],
    template: `{{(mode && mode.title === 'pve') ?   ('modes.pve' | i18n) 
                    : (match && match.clanwar == true) ? ('matches.cw.abbr' | i18n)
                        : type ?  ('matches.rating' | i18n) : ('matches.random' | i18n)}}`
})

export class MatchType { }
export default MatchType
