import { Component } from '@angular/core'
import TitleService from '../../services/title'
import { i18n } from '../../services/i18n'

@Component({
    selector: 'donate-thanks',
    template: require('./donate-thanks.html'),
    styles: [require('./donate-thanks.styl')]
})

export class DonateThanks {
    gifs = [
        'http://i.giphy.com/l0G192kSMLwTpO1CE.gif',
        'http://i.giphy.com/3o6Zt8qDiPE2d3kayI.gif',
        'http://i.giphy.com/3oEjI0Ts2uBg0mP0Mo.gif',
        'http://i.giphy.com/HJ8NsNtn9VswE.gif',
        'http://i.giphy.com/l2R0eYcNq9rJUsVAA.gif',
        'http://i.giphy.com/6tHy8UAbv3zgs.gif',
        'http://i.giphy.com/u0bQN6bxXweHe.gif',
        'http://i.giphy.com/JJR2n3I7vVisE.gif',
        'http://i.giphy.com/zVvg4z8nwWAvu.gif',
        'http://i.giphy.com/26uffIRfNMzrTCvok.gif',
        'http://i.giphy.com/c31vMHRApnlU4.gif',
        'http://i.giphy.com/5xtDarmwsuR9sDRObyU.gif'
    ];

    gif :string;

    constructor (private _title :TitleService) {
        this._title.setTitle(i18n.get('donateThanks.docTitle'));
        this._title.setRendered();

        this.gif = this.gifs[Math.floor(Math.random() * (this.gifs.length))];
    }
}
