import { Component } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import I18N from '../../services/i18n'

@Component({
    selector: 'motd',
    template: require('./motd.html'),
    styles: [require('./motd.styl')],
    host: {
        '[style.display]': 'message ? "block" : "none"'
    }
})

export class MOTD {
    private till = (new Date('2018-03-12')).getTime();
    private messages = {
        en: `Message of the day: We are looking for Survarium players, who are ready to take part in "Clan Wars". ` +
        `The list of interested will be sent to VG. ` +
        `If you want to participate in this competition, please send your nickname to ` +
        `<a href="https://www.facebook.com/roma.ozarko" target="_blank" rel="nofollow">https://www.facebook.com/roma.ozarko</a> ` +
        `or <a href="mailto:8wazzaaap8@mail.ru" target="_blank" rel="nofollow">8wazzaaap8@mail.ru</a>`
    };

    public message ?:SafeHtml;

    constructor (private i18n :I18N,
                 private domSanitizer :DomSanitizer) {

        if (Date.now() >= this.till) {
            return;
        }

        const message = this.messages[i18n.lang.lang];

        if (!message || !message.length) {
            return;
        }

        this.message = domSanitizer.bypassSecurityTrustHtml(message);
    }
}

export default MOTD
