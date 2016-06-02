import { Component } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { DateTimePipe } from '../../pipes/datetime'

@Component({
    selector: 'also-known',
    inputs: ['nicknames'],
    pipes: [I18NPipe, DateTimePipe],
    template: require('./also-known.html'),
    styles: [require('./also-known.styl')]
})

export class AlsoKnown { }

export default AlsoKnown
