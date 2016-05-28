import { Component, AfterViewInit, ViewContainerRef } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { Widget, WidgetStyle } from '../widget/widget'

declare var twttr :any;

@Component({
    selector: 'twitter',
    template: require('./twitter.html'),
    inputs: ['id', 'user', 'width', 'height'],
    pipes: [I18NPipe],
    styles: [WidgetStyle]
})

export class Twitter extends Widget implements AfterViewInit {
    constructor (private componentRef :ViewContainerRef) {
        super();
    }

    ngAfterViewInit () {
        window['twttr'] && twttr.widgets.load(this.componentRef.element.nativeElement);
    }
}
export default Twitter
