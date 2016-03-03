import dictRU from './i18n/ru'
import dictEN from './i18n/en'

export const CONFIG = {
    production: process.env.ENV,
    api: process.env.API_PATH,
    title: process.env.TITLE,
    i18n: {
        languages: [
            {
                lang: 'ru',
                apiLang: 'russian',
                originName: 'Русский',
                dict: dictRU
            },
            {
                lang: 'en',
                apiLang: 'english',
                originName: 'English',
                dict: dictEN
            }
        ]
    }
};

export default CONFIG
