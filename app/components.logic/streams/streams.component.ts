import { Component, ViewContainerRef } from '@angular/core'
import { StreamsFormatsService } from './streams__formats'

@Component({
    host: {
        '(window:resize)': 'resize($event)'
    }
})

export class StreamsComponent {
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
        } else {
            let maxWidth = this.format === 'large' ? 1500 : width / 2;

            if (width < maxWidth) {
                _width = width;
            } else if (width => maxWidth) {
                _width = maxWidth;
            }
        }

        this.width = Math.max(_width || this.minWidth, this.minWidth);
    }

    view: ViewContainerRef;
    private format;

    constructor (view :ViewContainerRef, private service :StreamsFormatsService) {
        this.view = view;
        this.size = Math.random();
        service.observe.subscribe((val) => {
            this.format = val;
            this.size = Math.random();
        });
    }
}
