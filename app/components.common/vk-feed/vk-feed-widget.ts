import { Component } from '@angular/core'

@Component({
    selector: 'vk-feed-widget',
    template: `<div id="vk_feed_{{ID}}"></div>`
})

export class VkFeedWidget {
    public ID :number;
}
