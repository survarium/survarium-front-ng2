import { appProvider } from './app'
import { Injectable, Component, ComponentFactory, ComponentRef, Compiler } from '@angular/core'

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

    private sharedComponent :any;

    constructor (compiler :Compiler) {
        this.sharedComponent = compiler.compileComponentAsync(VkFeedWidget);
    }

    private makeWidget (params :{ id :number, options ?:any}, key: string) {
        return this
            .sharedComponent
            .then((factory :ComponentFactory<any>) => appProvider.app.instance.viewRef.createComponent(factory))
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
