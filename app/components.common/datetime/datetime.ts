import { Component, Input } from 'angular2/core'
import { NgIf } from 'angular2/common'
import { DateTimePipe } from '../../pipes/datetime'

@Component({
    selector: 'datetime',
    directives: [NgIf],
    pipes: [DateTimePipe],
    inputs: ['date'],
    template: `<template [ngIf]="date">{{date | datetime}}</template>`
})

export class DateTime { }
export default DateTime
