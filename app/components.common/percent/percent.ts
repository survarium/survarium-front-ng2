import { Component, Input } from 'angular2/core'
import { NgIf } from 'angular2/common'
import PercentPipe from '../../pipes/percent'

@Component({
    selector: 'percent',
    directives: [NgIf],
    inputs: ['number'],
    pipes: [PercentPipe],
    template: `<template [ngIf]="number">{{number | percent}}</template>`
})

export class Percent { }
export default Percent
