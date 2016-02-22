import { Injectable } from 'angular2/core';
import { I18NPipe } from '../pipes/i18n'

import CONFIG from '../config'
import Storage from '../utils/storage'

let LANGUAGES = CONFIG.i18n.languages;

function detectLang () {
    let language = Storage.getItem('language');
    if (!language) {
        return LANGUAGES[0];
    }
    return LANGUAGES.filter(function (lang) {
        return lang.lang === language;
    })[0] || LANGUAGES[0];
}

let LANGUAGE = detectLang();
interface LANGUAGE {
    lang :string,
    apiLang :string,
    dict: any
}

@Injectable()
class I18N {
    dict  :any;
    cache :any = {};
    private lang  :LANGUAGE;

    constructor (LANG ?:LANGUAGE) {
        this.lang = LANG || LANGUAGE;
        this.dict = this.lang.dict;
    }

    get (key) {
        if (!key) {
            console.warn(`I18N: no key received`);
            return null;
        }

        let cached = this.cache[key];
        if (cached) {
            return cached;
        }

        let fetched = key.split('.').reduce((dict, field) => {
            return dict && dict[field];
        }, this.dict);

        if (!fetched) {
            console.warn(`I18N: no answer for key \`${key}\``);
            return null;
        }

        this.cache[key] = fetched;

        return fetched;
    }

    get apiLang () {
        return this.lang.apiLang;
    }
}

let i18n = new I18N(LANGUAGE);

export { LANGUAGE, detectLang, i18n, I18N, I18NPipe }
export default I18N
