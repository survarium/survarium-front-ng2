import { appProvider } from './app'
import { Injectable, ComponentFactoryResolver, ComponentRef } from '@angular/core'
import { VkFeedWidget } from '../components.common/vk-feed/vk-feed-widget'

declare var VK :any;

@Injectable()
export class VkFeedService {
    private widgets = {};

    constructor(private componentResolver :ComponentFactoryResolver) { }

    private makeWidget (params :{ id :number, options ?:any}, key: string) {
        let vkFeedWidgetFactory = this.componentResolver.resolveComponentFactory(VkFeedWidget);
        console.log(vkFeedWidgetFactory);
        return appProvider.app.instance.viewRef.createComponent(vkFeedWidgetFactory)
            .then((componentRef :ComponentRef<VkFeedWidget>) => {
                componentRef.instance['ID'] = params.id;
                return componentRef;
            })
            .then((componentRef :ComponentRef<VkFeedWidget>) => {
                let createWidget = () => {
                    VK.Widgets.Group(`vk_feed_${params.id}`, params.options, params.id);
                    return this.widgets[key] = componentRef;
                };

                let fails = 10;

                return new Promise((resolve, reject) => {
                    let wait, create;
                    wait = () => {
                        if (!--fails) {
                            return reject();
                        }
                        setTimeout(() => {
                            create();
                        }, 1000);
                    };
                    create = () => {
                        if (typeof VK === 'undefined') {
                            return wait();
                        }
                        return resolve(createWidget());
                    };
                    create();
                });
            });
    }

    widget(params) {
        let key = JSON.stringify(params.id);
        let widget;
        if (widget = this.widgets[key]) {
            return new Promise(resolve => resolve(widget));
        }

        return this.makeWidget(params, key);
    }
}
