import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Storage } from '../../utils/storage'

@Component({
    selector: '[limits]',
    template: require('./data-grid-limits.html'),
    styles: [require('./data-grid-limits.styl')]
})

export class DataGridLimits {
    name :string;
    saved :any;

    @Input('name') set _name (name) {
        this.name = name;
        this.saved = JSON.parse(Storage.getItem(this.name)) || {};
    };

    @Input() limits :number[];
    @Output('onLimit') limitify :EventEmitter<any> = new EventEmitter();

    private current :number;

    private switch (limit) {
        if (!limit || isNaN(limit) || this.limits.indexOf(limit) === -1) {
            limit = this.limits[0];
        }

        if (this.current === limit) {
            return;
        }

        this.limitify.emit(this.current = limit);

        let saved = this.saved;
        this.saved.limit = this.current;
        Storage.setItem(this.name, JSON.stringify(saved));
    }

    ngOnInit () {
        this.switch(this.saved && Number(this.saved.limit));
    }
}

export default DataGridLimits
