import { Component, ViewContainerRef, ComponentRef, Input, AfterContentInit } from '@angular/core'
import { VkFeedService } from '../../services/vk-feed'
import { Widget, WidgetStyle } from '../widget/widget'

// FIXME: CLIENT-SIDE ONLY

@Component({
    selector: 'vk-feed',
    template: ``,
    inputs: ['width', 'height'],
    styles: [WidgetStyle]
})

export class VkFeed extends Widget implements AfterContentInit {
    @Input('id') private id :string;
    private widget :ComponentRef<any>;

    private init() {
        this
            .feedService
            .widget({ id: this.id, options: { mode: 2, wide: 1, width: this.width, height: this.height } })
            .then((widget :ComponentRef<any>) => {
                this.widget = widget;
                this.componentRef.element.nativeElement.appendChild(this.widget.location.nativeElement);
            })
            .catch(() => {});
    }

    constructor (private feedService: VkFeedService, private componentRef :ViewContainerRef) {
        super();
    }

    ngAfterContentInit () {
        this.init();
    }

}
export default VkFeed
