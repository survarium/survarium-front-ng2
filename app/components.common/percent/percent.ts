import { Component } from '@angular/core'

@Component({
    selector: 'percent',
    inputs: ['number'],
    template: `<template [ngIf]="number !== undefined">{{number | percent}}</template>`
})

export class Percent { }
export default Percent
