import { Component, ViewContainerRef, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core'
import { StreamsFormatsService } from './streams__formats'

@Component({
    host: {
        '(window:resize)': 'resize($event)'
    }
})

export class StreamsComponent implements OnInit, OnDestroy {
    private _resize :any;
    private resize () {
        clearTimeout(this._resize);
        this._resize = setTimeout(() => {
            this.size = Math.random();
        }, 30);
    }

    private minWidth = 360;
    private width = this.minWidth;

    private get size () {
        return {
            width: this.width,
            height: Math.floor(this.width / 2)
        };
    }

    private set size (val :any) {
        let width  = this.view.element.nativeElement.offsetWidth;
        let _width = this.minWidth;

        if (!width) {
            setTimeout(() => {
                this.size = Math.random();
            }, 100);

            return;
        } else {
            let maxWidth = this.format === 'large' ? 1500 : width / 2;

            if (width < maxWidth) {
                _width = width;
            } else if (width => maxWidth) {
                _width = maxWidth;
            }
        }

        let newWidth = Math.max(_width || this.minWidth, this.minWidth);

        if (this.width === newWidth) {
            return;
        }

        this.width = newWidth;

        this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();
    }

    view: ViewContainerRef;
    private format;

    constructor (view :ViewContainerRef, private service :StreamsFormatsService, private changeDetector :ChangeDetectorRef) {
        this.view = view;
        this.size = Math.random();
    }

    private serviceObserver :any;

    ngOnDestroy() {
        this.serviceObserver.unsubscribe();
    }

    ngOnInit() {
        this.serviceObserver = this.service.observe.subscribe((val) => {
            this.format = val;
            this.size = Math.random();

            this.changeDetector.markForCheck();
            this.changeDetector.detectChanges();
        });
    }
}
