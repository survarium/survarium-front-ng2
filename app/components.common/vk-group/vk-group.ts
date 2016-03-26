import { Component } from 'angular2/core'

@Component({
    selector: '[vk-group]',
    template: `Vkontakte/survarium_pro`,
    styles: [require('./vk-group.styl')],
    host: {
        href: 'https://vk.com/survarium_pro',
        target: '_blank',
        rel: 'nofollow'
    }
})

export class VkGroup {}
export default VkGroup
