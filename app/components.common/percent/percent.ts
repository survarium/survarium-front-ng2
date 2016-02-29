import { Component, Input } from 'angular2/core'
import PercentPipe from '../../pipes/percent'

@Component({
    selector: 'percent',
    inputs: ['number'],
    pipes: [PercentPipe],
    template: `<template [ngIf]="number !== undefined">{{number | percent}}</template>`
})

export class Percent { }
export default Percent
