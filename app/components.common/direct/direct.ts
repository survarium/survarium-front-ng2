import { Component, Input, ViewContainerRef, AfterViewInit } from '@angular/core'
import { DirectService } from '../../services/direct'

@Component({
    selector: 'direct',
    inputs: ['id', 'height', 'width'],
    template: ``,
    styles: [require('./direct.styl')],
    host: {
        '[attr.id]': 'name'
    }
})

export class Direct implements AfterViewInit {
    constructor (private _directService :DirectService, private view :ViewContainerRef) { }

    @Input() id :number;
    @Input() height :number;
    @Input() width :number;
    private name = `dir_${Math.random() * 1000 >>> 0}`;

    ngAfterViewInit () {
        setTimeout(() => {
            let element = this.view.element.nativeElement;
            this._directService.add(this.id, this.name, this.width || element.clientWidth, this.height || element.clientHeight);
        }, 300);
    }
}
export default Direct
