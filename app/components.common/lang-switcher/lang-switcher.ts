import { Component } from '@angular/core';
import { I18N, LANGUAGES, LANGUAGE } from '../../services/i18n';
import { Language } from '../../typings/language';

@Component({
    selector: 'lang-switcher',
    styles: [require('./lang-switcher.styl')],
    template: require('./lang-switcher.html')
})

export class LangSwitcher  {
    currentLang :Language = LANGUAGE;
    languages :Language[] = LANGUAGES.filter(lang => !lang.hidden);

    constructor (private i18n :I18N) {

    }

    switch ($event, language :Language) {
        $event.preventDefault();
        this.i18n.switch(language);
    }
}
export default LangSwitcher;
