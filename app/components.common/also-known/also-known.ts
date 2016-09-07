import { Component, Input } from '@angular/core'

@Component({
    selector: 'also-known',
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
