import { Component } from '@angular/core'
import { ElapsedPipe } from '../../pipes/elapsed'

@Component({
    selector: 'elapsed',
    inputs: ['value'],
    pipes: [ElapsedPipe],
    template: `{{value | elapsed:{allowZero:true} }}`
})

export class Elapsed  {}
export default Elapsed
