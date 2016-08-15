import { Component, Input, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { DFPService } from '../../services/dfp'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'dfp',
    template: require('./dfp.html'),
    styles: [require('./dfp.styl')],
    pipes: [I18NPipe],
    host: {
        '[class.empty]': 'empty'
    }
})

export class DFP implements AfterViewInit, OnDestroy {
    @Input() private id :string;

    constructor (private dfp :DFPService, private changeDetector :ChangeDetectorRef) {
    }

    private get blocked () {
        return this.dfp.blocked;
    }

    private checker :any;
    private slot :any;
    private empty = false;
    private loaded = false;

    private onload (slot :any) {
        this.slot = slot;
        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
    }

    private listener (event :any) {
        let isEmpty = event.isEmpty;

        if (this.empty !== event.isEmpty) {
            this.changeDetector.markForCheck();
            this.changeDetector.detectChanges();
            this.empty = event.isEmpty;
        }

        if (isEmpty) {
            return this.checker = setTimeout(() => this.dfp.refresh(this.slot), 1000);
        }

        this.loaded = true;
        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
    }

    ngAfterViewInit () {
        this.checker = setTimeout(() => this.dfp.load(this.id, this.onload.bind(this), this.listener.bind(this)), 100);
    }

    ngOnDestroy () {
        clearTimeout(this.checker);

        if (this.slot) {
            this.dfp.unload(this.slot);
        }
    }
}

export default DFP
