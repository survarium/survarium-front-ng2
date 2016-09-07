import { Component, Injectable } from '@angular/core'
import { Storage }    from '../../utils/storage'
import { Observable } from 'rxjs/Observable';
import { Observer }   from 'rxjs/Observer';

@Injectable()
export class StreamsFormatsService {
    public formats = ['medium', 'large'];

    private _format;

    public get format () {
        return this._format;
    }

    public set format (val) {
        if (this.format === val || !~this.formats.indexOf(val)) {
            return;
        }

        Storage.setItem('streams:format', val);
        this._format = val;
        this.observer && this.observer.next(this._format);
    }

    public observer   :Observer<any>;
    public observe    :Observable<any>;

    constructor () {
        this.observe = Observable.create(observer => {
            this.observer = observer;
            this.observer.next(this.format);
        }).do();
        this.format = Storage.getItem('streams:format') || this.formats[0];
    }
}

@Component({
    selector: 'streams__formats',
    template: require('./streams__formats.html'),
    styles: [require('./streams__formats.styl')]
})

export class StreamsFormats {
    private formats = this.service.formats;

    public get format () {
        return this.service.format;
    };

    private change (val) {
        this.service.format = val;
    }

    constructor (private service :StreamsFormatsService) {}
}



