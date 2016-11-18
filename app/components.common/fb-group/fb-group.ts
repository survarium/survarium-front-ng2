import { Component } from '@angular/core'

@Component({
    selector: '[fb-group]',
    template: `Facebook/survariumpro`,
    styles: [require('./fb-group.styl')],
    host: {
        href: 'https://www.facebook.com/survariumpro/',
        target: '_blank',
        rel: 'nofollow'
    }
})

export class FbGroup {}
export default FbGroup
