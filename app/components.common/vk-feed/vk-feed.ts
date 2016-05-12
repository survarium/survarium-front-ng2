import { Component, OnInit, ViewContainerRef, ComponentRef, Input } from '@angular/core'
import { VkFeedService } from '../../services/vk-feed'
import { Widget, WidgetStyle } from '../widget/widget'

// FIXME: CLIENT-SIDE ONLY

@Component({
    selector: 'vk-feed',
    template: ``,
    styles: [WidgetStyle]
})

export class VkFeed extends Widget implements OnInit {
    @Input() private id :string;

    constructor (private feedService: VkFeedService, private componentRef :ViewContainerRef) {
        super();
    }
    
    private widget :ComponentRef<any>;
    ngOnInit () {
        this
            .feedService
            .widget({ id: this.id, options: { mode: 2, wide: 1, width: this.width, height: this.height } })
            .then((widget :ComponentRef<any>) => {
                this.widget = widget;
                this.componentRef.element.nativeElement.appendChild(this.widget.location.nativeElement);
            });
    }
}
export default VkFeed
