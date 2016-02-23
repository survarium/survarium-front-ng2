import dictRU from './i18n/ru';
import dictEN from './i18n/en';

export const CONFIG = {
    production: process.env.ENV,
    api: process.env.API_PATH,
    i18n: {
        languages: [
            {
                lang: 'ru',
                apiLang: 'russian',
                dict: dictRU
            },
            {
                lang: 'en',
                apiLang: 'english',
                dict: dictEN
            }
        ]
    }
};

export default CONFIG
