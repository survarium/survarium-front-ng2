import { Component } from '@angular/core'

@Component({
    selector: 'donate-yamoney',
    template: require('./donate-yamoney.html'),
    styles: [require('./donate-yamoney.styl')],
    host: {
        'class': 'sns'
    },
    inputs: ['receiver', 'target', 'sum', 'comment']
})

export class DonateYamoney {}

export default DonateYamoney
