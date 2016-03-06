import { Component, EventEmitter, Input, Output } from 'angular2/core'

@Component({
    selector: 'data-grid-pagination',
    inputs: ['skip', 'limit', 'total'],
    template: require('./data-grid-pagination.html'),
    styles: [require('./data-grid-pagination.styl')]
})

export class DataGridPagination {
    @Input() skip :number;
    @Input() limit :number;
    @Input() total :number;

    private totalPages :number;

    private get current () {
        return this.skip / this.limit;
    };

    private page (num) {
        return { num };
    }

    private breaker () {
        return { breaker: true }
    }

    private get pages () {
        let total = this.totalPages = Math.ceil(this.total / this.limit);
        let _pages = [];

        if (!total) {
            return _pages;
        }

        if (total < 10) {
            for (let i = 0; i < total ; i++) {
                _pages.push(this.page(i));
            }
        } else {
            let current = this.current;
            let _firstUnbreak = 4;
            if (current < _firstUnbreak - 1 || current > total - _firstUnbreak) {
                for (let i = 0; i < _firstUnbreak; i++) {
                    _pages.push(this.page(i));
                }
                _pages.push(this.breaker());
                for (let i = total - _firstUnbreak; i < total; i++) {
                    _pages.push(this.page(i));
                }
            } else {
                _pages.push(this.page(0));
                current !== (_firstUnbreak - 1) && _pages.push(this.breaker());
                for (let i = Math.max(1, current - _firstUnbreak + 1); i < current + _firstUnbreak; i++) {
                    _pages.push(this.page(i));
                }
                current !== (total - _firstUnbreak) && _pages.push(this.breaker());
                _pages.push(this.page(total - 1));
            }
        }

        return _pages;
    };

    @Output('onPaginate') paginate :EventEmitter<any> = new EventEmitter();

    private switch (page) {
        if (page === undefined || page === this.current) {
            return;
        }
        this.paginate.emit(page * this.limit);
    }
}

export default DataGridPagination
