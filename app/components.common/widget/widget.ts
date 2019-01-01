export class Widget {
    defaultWidth = 360;
    defaultHeight = 600;

    protected _width :number = this.defaultWidth;
    protected _height :number = this.defaultHeight;

    get width () {
        return this._width;
    }

    get height () {
        return this._height;
    }

    set width (val) {
        let value = Number(val);
        if (isNaN(value) || !value) {
            value = this.defaultWidth;
        }
        this._width = value;
    }
    set height (val) {
        let value = Number(val);
        if (isNaN(value) || !value) {
            value = this.defaultHeight;
        }
        this._height = value;
    }
}

export const WidgetStyle = require('./widget.styl');
