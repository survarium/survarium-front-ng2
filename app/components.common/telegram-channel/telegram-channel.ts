import { Component } from 'angular2/core'

@Component({
    selector: '[telegram-channel]',
    template: `Telegram/@survarium_pro`,
    styles: [require('./telegram-channel.styl')],
    host: {
        href: 'https://telegram.me/survarium_pro',
        target: '_blank',
        rel: 'nofollow'
    }
})

export class TelegramChannel {}
export default TelegramChannel
