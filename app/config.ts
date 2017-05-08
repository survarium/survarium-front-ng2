export const CONFIG = {
    production: process.env.ENV === 'production',
    enableDebugTools: false,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isWebBrowser: window['isWebBrowser'] === undefined ? (window['isWebBrowser'] = !window.navigator.userAgent.match(/Prerender/i)) : window['isWebBrowser'],
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
        apiDefaultLang: 'english',
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
            },
            {
                lang: 'pl',
                alternate: 'pl',
                apiLang: 'english',
                gameLang: 'polish',
                originName: 'Polski'
            }
        ]
    }
};

export default CONFIG
