import { Input } from '@angular/core'

export class Widget {
    defaultWidth = 430;
    defaultHeight = 600;

    protected width :number = this.defaultWidth;
    protected height :number = this.defaultHeight;

    @Input('width') set _width (val) {
        let value = Number(val);
        if (isNaN(value) || !value) {
            value = this.defaultWidth;
        }
        this.width = value;
    }
    @Input('height') set _height (val) {
        let value = Number(val);
        if (isNaN(value) || !value) {
            value = this.defaultHeight;
        }
        this.height = value;
    }
}

export const WidgetStyle = require('./widget.styl');
