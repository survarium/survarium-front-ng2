import { Component } from '@angular/core'
import { TitleService } from '../../services/title'
import { i18n } from '../../services/i18n'

@Component({
    selector: 'home',
    template: require('./home.html'),
    styles: [require('./home.styl')]
})

export class Home {
    constructor (private title :TitleService) {
        title.setTitle();
        title.setDescription(i18n.get('home.docDescription'));
    }
}
