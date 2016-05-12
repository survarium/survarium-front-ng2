import { Component, Input } from '@angular/core'
import { kdRatio } from '../../utils/kd'

@Component({
    selector: 'kd',
    inputs: ['kills', 'dies'],
    template: `{{kd || 0}}`
})

export class AvgScore  {
    @Input() private kills :number;
    @Input() private dies :number;

    private get kd () :number|string {
        return kdRatio(this.kills, this.dies);
    }

}
export default AvgScore
