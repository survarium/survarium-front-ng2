import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated'
import Clan from '../clan/clan'

@Component({
    selector: 'nickname',
    directives: [Clan, ROUTER_DIRECTIVES],
    inputs: ['nickname', 'clan'],
    template: require('./nickname.html'),
    styles: [require('./nickname.styl')]
})

export class Nickname {
}
export default Nickname
