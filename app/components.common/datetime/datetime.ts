import { Component } from '@angular/core'

@Component({
    selector: 'datetime',
    inputs: ['date', 'slim'],
    template: `<ng-template [ngIf]="date">{{date | datetime: slim ? 'slim' : null}}</ng-template>`
})

export class DateTime { }
export default DateTime
