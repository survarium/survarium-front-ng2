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
        /*allLinks[allLinks.length] = 'LwW3kFvjoWY';
        allLinks[allLinks.length] = 'csFgOOfd9es';
        allLinks[allLinks.length] = 'Od4wfRfQfoI';
        allLinks[allLinks.length] = 'u5M2Zm4vM4s';
        allLinks[allLinks.length] = 'az5or4yqbBY';
        allLinks[allLinks.length] = 'ir-wkh9nUqk';
        allLinks[allLinks.length] = 'm5xsk47eiVY';
        allLinks[allLinks.length] = '4gD01QkYmeA';
        allLinks[allLinks.length] = 'PT1c4YnIhzc';*/ // pve guide

        //allLinks[allLinks.length] = 'WpKePEhZrAE';
        //allLinks[allLinks.length] = 'D-iAaDBVw78';
        //allLinks[allLinks.length] = 'dYwEGreT9E4';
        //allLinks[allLinks.length] = '8YzdD1dcLko';
        allLinks[allLinks.length] = 'ivVaBf1ENPA';

        let src = 'https://www.youtube.com/embed/' + this.getRandomItem(allLinks) + '?enablejsapi=1&autoplay=0&dark_theme=1&origin=http://survarium.pro';
        this.iframeSrc = this._domSanitize.bypassSecurityTrustResourceUrl(src);
    }
}
export default Video
