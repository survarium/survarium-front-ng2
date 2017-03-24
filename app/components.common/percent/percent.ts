import { Component } from '@angular/core'

@Component({
    selector: 'percent',
    inputs: ['number'],
    template: `<ng-template [ngIf]="number !== undefined">{{number | percent}}</ng-template>`
})

export class Percent { }
export default Percent
