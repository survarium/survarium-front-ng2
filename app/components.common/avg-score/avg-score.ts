import { Component, Input } from '@angular/core'

@Component({
    selector: 'avg-score',
    template: `{{avg}}`
})

export class AvgScore  {
    @Input() private score :number;
    @Input() private matches :number;

    private get avg () :number {
        return this.score / this.matches >>> 0;
    }

}
export default AvgScore
