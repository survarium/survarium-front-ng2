import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core'
import { Widget, WidgetStyle } from '../widget/widget'

declare var twttr :any;

@Component({
    selector: 'twitter',
    template: require('./twitter.html'),
    inputs: ['id', 'user', 'width', 'height'],
    styles: [WidgetStyle]
})

export class Twitter extends Widget implements AfterViewInit {
    private target :any;

    @ViewChildren('target') targets :QueryList<any>;

    constructor () {
        super();
    }

    ngAfterViewInit () {
        if (this.targets.first && window['twttr']) {
            this.target = this.targets.first.nativeElement;
            window['twttr'].widgets.load(this.target);
        }
    }
}
export default Twitter
