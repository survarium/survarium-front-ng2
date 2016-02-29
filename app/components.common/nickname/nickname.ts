import { Component, Input } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { ROUTER_DIRECTIVES } from 'angular2/router'
import Clan from '../clan/clan'

@Component({
    selector: 'nickname',
    directives: [NgIf, Clan, ROUTER_DIRECTIVES],
    inputs: ['nickname', 'clan'],
    template: `<template [ngIf]="nickname"><clan [abbr]="clan?.abbr" [name]="clan?.name"></clan><a [routerLink]="['PlayersDetail', { nickname: nickname }]" class="name">{{_rawNickname}}</a></template>`,
    styles: [`
    :host, .name {
        display: inline;
    }
    `]
})

export class Nickname {
    private _nickname :string;
    private _rawNickname :string;

    @Input('nickname') set nickname (value :string) {
        this._nickname = encodeURIComponent(value);
        this._rawNickname = value;
    }

    get nickname () {
        return this._nickname;
    }
}
export default Nickname
