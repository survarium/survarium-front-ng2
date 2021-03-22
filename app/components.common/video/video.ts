import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { Widget, WidgetStyle } from '../widget/widget'

@Component({
    selector: 'home-video',
    template: require('./video.html'),
    inputs: ['width', 'height'],
    styles: [WidgetStyle]
})

export class Video extends Widget implements OnInit {
    private iframeSrc;

    constructor (private _domSanitize :DomSanitizer) {
        super();
    }

    private getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }


    ngOnInit() {
        let allLinks = [];
        allLinks[allLinks.length] = '4byq4TtQPME';
        allLinks[allLinks.length] = 'BMBzTpRn7bs';

        let src = 'https://www.youtube.com/embed/' + this.getRandomItem(allLinks) + '?enablejsapi=1&autoplay=0&dark_theme=1&origin=http://survarium.pro';
        this.iframeSrc = this._domSanitize.bypassSecurityTrustResourceUrl(src);
    }
}
export default Video
