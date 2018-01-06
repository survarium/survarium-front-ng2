import { Component, Inject } from '@angular/core'
import { PlayersService } from '../../services/api'
import TitleService from '../../services/title'
import { i18n } from '../../services/i18n'

@Component({
    selector: 'about',
    template: require('./about.html'),
    styles: [require('./about.styl')]
})

export class About {
    private developer;

    constructor(private playersService :PlayersService,
                private _title :TitleService,
                @Inject('CONFIG') private config
    ) {
        this._title.setTitle(i18n.get('about.docTitle'));
        this._title.setDescription(i18n.get('about.docDescription'));
        this._title.setRendered();

        playersService
            .fetch('15238791817735151910') // Vaseker
            .subscribe((developer) => {
                this.developer = developer;
            }, () => {});
    }
}
