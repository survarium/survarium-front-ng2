import { Injectable, Pipe } from 'angular2/core'
import { Language } from '../typings/language'

import CONFIG from '../config'
import Storage from '../utils/storage'

let LANGUAGES = CONFIG.i18n.languages;

function detectLang () {
    let language = Storage.getItem('language');

    if (!language) {
        // CLIENT-SIDE ONLY
        language = window.navigator.userLanguage || window.navigator.language;
    }

    if (!language) {
        return LANGUAGES[0];
    }

    return LANGUAGES.filter(function (lang) {
        return lang.lang === language;
    })[0] || LANGUAGES[0];
}

let LANGUAGE = detectLang();

@Injectable()
class I18N {
    dict  :any;
    cache :any = {};
    private lang  :Language;

    constructor (LANG ?:Language) {
        this.lang = LANG || LANGUAGE;
        this.dict = this.lang.dict;
    }

    private _applyVariables (translation, variables) {
        Object.keys(variables).forEach((key) => {
            let exp = '\{\{' + key + '\}\}';
            translation = translation.replace(new RegExp(exp), variables[key]);
        });
        return translation;
    }

    private _getTranslation (key) {
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

    get (key, options ?:any) {
        if (!key) {
            console.warn(`I18N: no key received`);
            return null;
        }

        let fetched = this._getTranslation(key);

        if (options) {
            fetched = this._applyVariables(fetched, options);
        }

        return fetched;
    }

    get apiLang () {
        return this.lang.apiLang;
    }

    public switch (language :Language) {
        if (language.lang === this.lang.lang) {
            return;
        }
        if (!~LANGUAGES.indexOf(language)) {
            return;
        }
        Storage.setItem('language', language.lang);

        // CLIENT-SIDE ONLY
        window.location.reload();
    }
}

let i18n = new I18N(LANGUAGE);

export { LANGUAGE, detectLang, i18n, I18N, LANGUAGES }
export default I18N
