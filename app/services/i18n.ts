import { Injectable } from '@angular/core'
import { Language } from '../typings/language'

import CONFIG from '../config'
import Storage from '../utils/storage'

let LANGUAGES = CONFIG.i18n.languages;

function detectLang () {
    let language;
    let search = window.location.search;

    if (search && search.match(/lang=(\w{2})/)) {
        language = RegExp.$1;
    } else {
        language = Storage.getItem('language');
    }

    if (!language && CONFIG.isWebBrowser) {
        // FIXME: CLIENT-SIDE ONLY
        language = window.navigator['userLanguage'] || window.navigator['language'];
    }

    if (!language) {
        return LANGUAGES[0];
    }

    return LANGUAGES.filter(function (lang) {
        return (new RegExp(`${lang.lang}`, 'i')).test(language);
    })[0] || LANGUAGES[0];
}

let LANGUAGE = detectLang();

@Injectable()
class I18N {
    dict  :any;
    cache :any = {};
    public lang  :Language;
    public apiDefaultLang = CONFIG.i18n.apiDefaultLang;

    constructor (LANG ?:Language) {
        this.lang = LANG || LANGUAGE;
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
            return null;
        }

        this.cache[key] = fetched;

        return fetched;
    }

    chooseFrom (dict, options ?:any) {
        return dict && (dict[this.lang.lang] || dict[this.lang.fallback]);
    }

    get (key, options ?:any) {
        if (!key) {
            console.warn(`I18N: no key received`);
            return null;
        }

        let fetched = this._getTranslation(key);
        if (!fetched) {
            if (options && options.allowOriginal) {
                if (typeof options.allowOriginal === 'string') {
                    return options.allowOriginal;
                }
                return key;
            }
            console.warn(`I18N: no answer for key \`${key}\``);
            return fetched;
        }

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

        // FIXME: CLIENT-SIDE ONLY
        window.location.reload();
    }

    public setDict(dict) {
        this.dict = dict;
    }
}

let i18n = new I18N(LANGUAGE);

let i18nLoader = require('es6-promise!../i18n/' + LANGUAGE.lang)().then(dict => {
    i18n.setDict(dict);
});

export { i18nLoader, LANGUAGE, detectLang, i18n, I18N, LANGUAGES }
export default I18N
