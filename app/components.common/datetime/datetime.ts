import { Component } from '@angular/core'
import { DateTimePipe } from '../../pipes/datetime'

@Component({
    selector: 'datetime',
    pipes: [DateTimePipe],
    inputs: ['date', 'slim'],
    template: `<template [ngIf]="date">{{date | datetime: slim ? 'slim' : null}}</template>`
})

export class DateTime { }
export default DateTime
