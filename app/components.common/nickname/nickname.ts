import { Component } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { ROUTER_DIRECTIVES } from 'angular2/router'
import Clan from '../clan/clan'

@Component({
    selector: 'nickname',
    directives: [NgIf, Clan, ROUTER_DIRECTIVES],
    inputs: ['nickname', 'clan'],
    template: `<template [ngIf]="nickname"><clan [data]="clan"></clan><a [routerLink]="['PlayersDetail', { nickname: nickname }]" class="name">{{nickname}}</a></template>`
})

export class Nickname {}
export default Nickname
