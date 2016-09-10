import { Component } from '@angular/core'
import { PlayersService } from '../../services/api'

@Component({
    selector: 'thanks',
    template: require('./thanks.html'),
    styles: [require('./thanks.styl')]
})

export class Thanks {
    private data :any = [
        { players: [
            { nickname: 'SoaDDimitrov' },
            { nickname: 'Dimikadze' },
            { nickname: 'FiatLux' }
        ], message: 'Украинская локализация' },
        { players: [{ nickname: 'Nesh' }], message: 'Идеи, советы. Отдельное спасибо за помощь с кланварами' },
        { players: [{ nickname: 'Piksel_IT' }], message: 'Помощь в тестировании багов' }
    ];

    constructor(private playersService :PlayersService) {
        this.data.forEach((thankful) => {
            if (thankful.players) {
                thankful.players.forEach((player) => {
                    playersService
                        .fetch(player.nickname)
                        .subscribe((result) => {
                            player.clan_meta = result.clan_meta;
                        }, () => {});
                });
            }
        });
    }
}
