import { app } from '../bootstrap'
import { Injectable, Component, ComponentResolver, ComponentFactory, ComponentRef } from '@angular/core'

@Component({
    selector: 'vk-feed-widget',
    template: `<div id="vk_feed_{{ID}}"></div>`
})

class VkFeedWidget {
    public ID :number;
}

declare var VK :any;

@Injectable()
export class VkFeedService {
    private widgets = {};

    constructor(private componentResolver :ComponentResolver) { }

    private makeWidget (params :{ id :number, options ?:any}, key: string) {
        return this
            .componentResolver
            .resolveComponent(VkFeedWidget)
            .then((factory :ComponentFactory<any>) => app.instance.viewRef.createComponent(factory))
            .then((componentRef :ComponentRef<VkFeedWidget>) => {
                componentRef.instance['ID'] = params.id;
                return componentRef;
            })
            .then((componentRef :ComponentRef<VkFeedWidget>) => {
                VK.Widgets.Group(`vk_feed_${params.id}`, params.options, params.id);
                return this.widgets[key] = componentRef;
            });
    }

    widget (params) {
        let key = JSON.stringify(params.id);
        let widget;
        if (widget = this.widgets[key]) {
            return new Promise(resolve => resolve(widget));
        }

        return this.makeWidget(params, key);
    }
}
