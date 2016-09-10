import { Component, Inject } from '@angular/core'

@Component({
    selector: 'footer',
    template: require('./footer.html'),
    styles: [require('./footer.styl')]
})

export class Footer  {

    constructor (@Inject('CONFIG') private config) {}
}
export default Footer
