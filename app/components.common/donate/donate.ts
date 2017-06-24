import { Component } from '@angular/core'

@Component({
    selector: 'donate',
    template: require('./donate.html'),
    styles: [require('./donate.styl')],
    host: {
        'class': 'sns'
    }
})

export class Donate {}

export default Donate
