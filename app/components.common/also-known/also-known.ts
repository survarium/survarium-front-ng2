import { Component, Input } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { DateTimePipe } from '../../pipes/datetime'

@Component({
    selector: 'also-known',
    pipes: [I18NPipe, DateTimePipe],
    template: require('./also-known.html'),
    styles: [require('./also-known.styl')]
})

export class AlsoKnown {
    private nicknames :{ nickname :string, until :string };

    @Input('nicknames') set setNicknames (val) {
        if (!val) {
            return;
        }
        this.nicknames = val.reverse();
    }
}

export default AlsoKnown
