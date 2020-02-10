import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core'
import { PlayersService } from '../../services/api'

@Component({
    selector: 'thanks',
    template: require('./thanks.html'),
    styles: [require('./thanks.styl')],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Thanks {
    private data :any = [
        {
            players: [{ nickname: '2051170159069531608' /* Chandrian */ }],
            message: 'Thank you for tons of bug reports, massive feedback and Spanish translation.'
        },
        { players: [
            { nickname: '18000654434592534125' }, // _-Albi-_
            { nickname: '12612213943157555362' } // Emto
        ], message: 'Polish localization' },
        { players: [
            { nickname: '8546788711893162650' }, // SoaDDimitrov
            { nickname: '9385948256234138519' }, // Dimikadze
            { nickname: '14087255718093204440' } // FiatLux
        ], message: 'Украинская локализация' },
        { players: [{ nickname: '6028686789442024417' /* Nesh */ }], message: 'Идеи, советы. Отдельное спасибо за помощь с кланварами' },
        { players: [{ nickname: '17902133809441051720' /* Piksel_IT */ }], message: 'Помощь в тестировании багов' }
    ];

    constructor(private playersService :PlayersService, private changeDetector :ChangeDetectorRef) {
        /**
         * Сейчас ChangeDetection выполняется для кажого блока игроков. Код в комментарии ниже выполнит проверку для общего числа игроков
         let count = 0;
         let resolve = (() => () => {
            if (!(--count)) {
                this.changeDetector.markForCheck();
            }
        })();
         */

        this.data.forEach((thankful) => {
            if (thankful.players) {
                let resolve = ((count) => () => {
                    if (!(--count)) {
                        this.changeDetector.markForCheck();
                    }
                })(thankful.players.length);

                thankful.players.forEach((player) => {
                    playersService
                        .fetch(player.nickname)
                        .subscribe((result) => {
                            player.clan_meta = result.clan_meta;
                            player.nickname = result.nickname;
                            resolve();
                        }, () => resolve);
                });
            }
        });
    }
}
