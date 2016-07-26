import { Component, Input, Inject, ViewContainerRef } from '@angular/core'

declare var marmoset :any;
// FIXME: CLIENT-SIDE ONLY

@Component({
    selector: 'visual',
    inputs: ['model'],
    template: require('./visual.html'),
    styles: [require('./visual.styl')],
    host: {
        '(window:resize)': 'resize()'
    }
})

export class Visual {
    constructor (private view :ViewContainerRef,
                 @Inject('CONFIG') private config,
                 @Inject('window') private window) {}

    @Input('model') model :string;

    get element() :any {
        return this.view.element.nativeElement;
    }

    get width() :number {
        return this.element.clientWidth;
    }

    get height() :number {
        let width = this.width;
        return (width < 1000 ? width / 2 : width / 3) >>> 0;
    }

    get path() :string {
        let model = this.model;
        return (this.config.production ? '' : `//${window.location.hostname}/`) + `models/${model}`;
    }

    viewer :any;
    loaded = false;

    onLoad () {
        this.loaded = true;
    }

    load() {
        let element = this.element;

        if (!element) {
            return;
        }

        this.viewer = new marmoset.WebViewer(this.width, this.height, `${this.path}.mview`);
        this.viewer.onLoad = this.onLoad.bind(this);
        element.appendChild(this.viewer.domRoot);
        // this.viewer.loadScene(); // Autoplay
    }

    resize() {
        this.loaded && this.viewer && this.viewer.resize(this.width, this.height);
    }

    checks = 5;
    checker :any;

    check() {
        if (typeof marmoset !== 'undefined') {
            return this.load();
        }

        if (!--this.checks) {
            return;
        }

        this.checker = setTimeout(() => this.check(), 1000);
    }

    ngOnInit () {
        this.check();
    }

    ngOnDestroy() {
        clearTimeout(this.checker);
        this.viewer && this.viewer.unload();
    }
}

export default Visual