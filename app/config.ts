export const CONFIG = {
    production: process.env.ENV === 'production',
    enableDebugTools: false,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    api: process.env.API_PATH,
    title: process.env.TITLE,
    app: {
        version: process.env.VERSION,
        updated: process.env.UPDATED,
        description: process.env.APP_DESCRIPTION
    },
    adblock: false,
    adsense: {
        client: 'ca-pub-8677968039358823'
    },
    i18n: {
        languages: [
            {
                lang: 'ru',
                alternate: 'ru',
                gameLang: 'russian',
                apiLang: 'russian',
                originName: 'Русский'
            },
            {
                lang: 'ua',
                alternate: 'uk',
                apiLang: 'russian',
                gameLang: 'ukrainian',
                originName: 'Українська'
            },
            {
                lang: 'en',
                alternate: 'en',
                apiLang: 'english',
                gameLang: 'english',
                originName: 'English'
            }
        ]
    }
};

export default CONFIG
