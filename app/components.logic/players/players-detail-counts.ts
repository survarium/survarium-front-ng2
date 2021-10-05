import { Component, Input } from '@angular/core'

@Component({
    selector: 'players-detail-counts',
    template: require('./players-detail-counts.html'),
    styles: [`.def-list__title:first-of-type { margin-top: 0; }`]
})

export default class PlayersDetailCounts {
    _data: any;
    _elo: any;

    makeElo () {
        let elo = this._data && this._data.progress && this._data.progress.elo;

        if (!elo) {
            return;
        }

        let result = [];

        try {
            Object.keys(elo).forEach(mode => {
                result.push({ mode, rating: elo[mode].rating || 1000, random: elo[mode].random });
            });

            this._elo = result;
        } catch (e) {}
    }

    @Input('data') set data(val :any) {
        this._data = val;
        console.log(this._data);
        this.makeElo()
    };

    get data() {
        return this._data;
    };
}
