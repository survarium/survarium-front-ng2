import { Component, Input } from '@angular/core'

@Component({
    selector: 'winrate',
    template: `{{winrate || 0 | percent}}`
})

export class WinRate  {
    @Input() private matches :number;
    @Input() private victories :number;

    private get winrate () :number {
        return ((this.victories || 0) / (this.matches || 0) * 100) || 0;
    }

}
export default WinRate
