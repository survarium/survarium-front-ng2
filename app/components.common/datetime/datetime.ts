import { Component } from '@angular/core'

@Component({
    selector: 'datetime',
    inputs: ['date', 'slim'],
    template: `<template [ngIf]="date">{{date | datetime: slim ? 'slim' : null}}</template>`
})

export class DateTime { }
export default DateTime
