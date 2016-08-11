import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { PercentPipe } from '../../pipes/percent'
import { kdRatio } from '../../utils/kd'

@Component({
    selector: 'players-detail-history-counts',
    pipes: [I18NPipe, PercentPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./players-detail-history-counts.html'),
    styles: [`:host { display: block; margin-bottom: 1em; }`]
})

export class PlayersDetailHistoryCounts {
    private _data :any;
    private types = [
        'matches',
        'victories',
        'level',
        'kills',
        'dies',
        'score',
        'headshots',
        'grenadeKills',
        'meleeKills'
    ];

    private avgs = [
        'level'
    ];

    @Input('group') private group :string;

    private _raw :any;
    @Input('data') set data (val) {
        let matches = 0;

        let result = val.reduce((result, elem) => {
            this.types.forEach(type => result[type] = (result[type] || 0) + elem[type]);
            matches += elem.matches;
            return result;
        }, {});

        let length = val.length;

        (this.group === 'avg' ? this.types : this.avgs).forEach(avg => result[avg] = Math.round(result[avg] / length));
        (this.group === 'sum' && (result.score = Math.round(result.score / matches)));

        result.kd = kdRatio(result.kills, result.dies);
        result.winRate = Number(kdRatio(result.victories, result.matches)) * 100;
        result.hsRate  = Number(kdRatio(result.headshots, result.kills)) * 100;
        result.gkRate  = Number(kdRatio(result.grenadeKills, result.kills)) * 100;
        result.mlRate  = Number(kdRatio(result.meleeKills, result.kills)) * 100;

        this._data = result;
    }

    get data () {
        return this._data;
    }
}
