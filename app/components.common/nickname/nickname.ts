import { Component } from '@angular/core'

@Component({
    selector: 'nickname',
    inputs: ['nickname', 'clan', 'banned'],
    template: require('./nickname.html'),
    styles: [require('./nickname.styl')]
})

export class Nickname { }
export default Nickname
