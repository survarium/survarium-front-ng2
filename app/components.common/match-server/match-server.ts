import { Component } from '@angular/core'

@Component({
    selector: 'match-server',
    inputs: ['replay'],
    template: `{{(replay && replay.includes('node-19.'))  ? 'SA' 
                    : (replay && replay.includes('node-4.')) ? 'RU'
                        : (replay && replay.includes('node-6.')) ? 'NA'
                            : (replay && replay.includes('node-21.')) ? 'SEA'
                                : (replay && replay.includes('node-1.')) ? 'EU'
                                        : '-'
                }}`
})

export class MatchServer { }
export default MatchServer
