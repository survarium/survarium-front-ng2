import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { Widget, WidgetStyle } from '../widget/widget'

@Component({
    selector: 'facebook',
    template: require('./facebook.html'),
    inputs: ['width', 'height'],
    styles: [WidgetStyle]
})

export class Facebook extends Widget implements OnInit {
    @Input('page') private page;
    private iframeSrc;

    constructor (private _domSanitize :DomSanitizer) {
        super();
    }

    ngOnInit() {
        this.iframeSrc = this._domSanitize.bypassSecurityTrustResourceUrl(
            `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${this.page}%2F&tabs=timeline&width=${this.width}&height=${this.height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`
        );
    }
}
export default Facebook
