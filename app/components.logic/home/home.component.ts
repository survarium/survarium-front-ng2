import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { TitleService } from '../../services/title'
import { i18n } from '../../services/i18n'

@Component({
    selector: 'home',
    template: require('./home.html'),
    styles: [require('./home.styl')]
})

export class Home {
    twitter  :string;

    constructor (private title :TitleService, private _sanitizer: DomSanitizer) {
        title.setTitle();
        title.setDescription(i18n.get('home.docDescription'));

        if (i18n.lang.lang === 'en') {
            this.twitter = 'SurvariumVG';
        } else {
            this.twitter = 'SurvariumVostok';
        }
    }

    jsonLD = this._sanitizer.bypassSecurityTrustHtml(`<script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "url": "https://survarium.pro",
          "description": "Статистика игроков, матчей, кланов Survarium. Стримы Survarium. Сообщения разработчиков Survarium.",
          "logo": "https://survarium.pro/assets/icon/icon.png",
          "sameAs": [
            "https://vk.com/survarium_pro",
            "https://telegram.me/survarium_pro"
          ]
        }
        </script>`)
}
