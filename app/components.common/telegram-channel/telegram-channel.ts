import { Component } from 'angular2/core'

@Component({
    selector: 'telegram-channel',
    template: `<a href="https://telegram.me/survarium_pro" target="_blank" rel="nofollow">Telegram/@survarium_pro</a>`,
    styles: [require('./telegram-channel.styl')]
})

export class TelegramChannel {}
export default TelegramChannel
