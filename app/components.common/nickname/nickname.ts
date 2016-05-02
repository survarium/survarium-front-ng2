import { Component, Input } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { ROUTER_DIRECTIVES } from 'angular2/router'
import Clan from '../clan/clan'

@Component({
    selector: 'nickname',
    directives: [NgIf, Clan, ROUTER_DIRECTIVES],
    inputs: ['nickname', 'clan'],
    template: require('./nickname.html'),
    styles: [require('./nickname.styl')]
})

export class Nickname {
}
export default Nickname
