import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
    selector: 'donate',
    template: require('./donate.html'),
    styles: [require('./donate.styl')]
})

export class Donate {
    private src = 'https://money.yandex.ru/quickpay/shop-widget?account=41001435441981&quickpay=shop&payment-type-choice=on&mobile-payment-type-choice=on&writer=seller&targets=%D0%9D%D0%B0+%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B5+survarium.pro&targets-hint=&default-sum=300&button-text=03&successURL=https%3A%2F%2Fsurvarium.pro%2Finfo%2Fdonate-thanks';
    private width = 450;
    private height = 198;

    private iframeSrc;

    constructor (private _domSanitize :DomSanitizer) {
        this.iframeSrc = this._domSanitize.bypassSecurityTrustResourceUrl(this.src);
    }
}

export default Donate
