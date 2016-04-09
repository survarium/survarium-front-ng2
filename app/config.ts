import dictRU from './i18n/ru'
import dictEN from './i18n/en'
import dictUA from './i18n/ua'

export const CONFIG = {
    production: process.env.ENV === 'production',
    enableDebugTools: false,
    api: process.env.API_PATH,
    title: process.env.TITLE,
    app: {
        version: process.env.VERSION,
        updated: process.env.UPDATED,
        description: process.env.APP_DESCRIPTION
    },
    i18n: {
        languages: [
            {
                lang: 'ru',
                apiLang: 'russian',
                originName: 'Русский',
                dict: dictRU
            },
            {
                lang: 'ua',
                apiLang: 'russian',
                originName: 'Українська',
                dict: dictUA
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
