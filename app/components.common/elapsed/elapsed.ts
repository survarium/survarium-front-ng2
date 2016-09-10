import { Component } from '@angular/core'

@Component({
    selector: 'elapsed',
    inputs: ['value'],
    template: `{{value | elapsed:{allowZero:true} }}`
})

export class Elapsed  {}
export default Elapsed
