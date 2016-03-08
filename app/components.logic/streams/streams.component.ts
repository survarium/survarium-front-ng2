import { Component, Inject, ViewContainerRef, OnInit } from 'angular2/core'

@Component({
    host: {
        '(window:resize)': 'resize($event)'
    }
})

export class StreamsComponent implements OnInit {
    private _size :any;
    private resize () {
        this.size = Math.random();
    }
    private get size () {
        return this._size;
    }
    private set size (val) {
        let width = this.view.element.nativeElement.offsetWidth;
        let maxWidth = 1500;
        let minWith = 470;
        let minHeight = minWith / 2;
        if (width <= minWith) {
            this._size = {
                width: minWith,
                height: minHeight
            };
        } else if (width < maxWidth) {
            this._size = {
                width: width,
                height: Math.floor(width / 2)
            }
        } else if (width => maxWidth) {
            this._size = {
                width: maxWidth,
                height: Math.floor(maxWidth / 2)
            };
        }
    }

    view: ViewContainerRef;

    constructor (view :ViewContainerRef) {
        this.view = view;
    }

    ngOnInit () {
        this.size = Math.random();
    }
}
