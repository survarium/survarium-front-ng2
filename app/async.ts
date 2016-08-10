import CONFIG from './config'

export function ngOnLoad(window, document) {
    window['WebFontConfig'] = {
        google: { families: [ 'Exo+2:400,700:latin,cyrillic' ] }
    };

    (window['adsbygoogle'] || (window['adsbygoogle'] = [])).push({
        google_ad_client: CONFIG.adsense.client,
        enable_page_level_ads: CONFIG.isMobile
    });

    (window['googletag'] || (window['googletag'] = { cmd: [] })).cmd.unshift(() => {
        window['googletag'].defineSlot('/126806937/sv.pro_footer', [[720, 100], [1500, 100], [1024, 100], [320, 100], [640, 100], [1680, 100], [1280, 100]], 'div-gpt-ad-1470824232002-0').addService(window['googletag'].pubads());
        window['googletag'].pubads().enableSingleRequest();
        window['googletag'].enableServices();
    });

    var scripts = document.getElementsByTagName('script')[0],
        targets = [
            { src: 'https://an.yandex.ru/system/context.js' },
            { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' },
            { src: 'https://www.googletagservices.com/tag/js/gpt.js' },
            { src: 'https://vk.com/js/api/openapi.js?121' },
            { src: 'https://platform.twitter.com/widgets.js', id: 'twitter-wjs' },
            { src: 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js' },
            { src: 'https://viewer.marmoset.co/main/marmoset.js' }
        ];

    for (var i = 0, script; i < targets.length; i++) {
        script = targets[i];

        var domScript = document.createElement('script');
        domScript.type = 'text/javascript';
        domScript.async = true;
        domScript.src = script.src;
        domScript.onerror = ((script) => (err) => { console.log(`Cannot load ${script.src}`) })(script);
        script.id && (domScript.id = script.id);

        scripts.parentNode.insertBefore(domScript, scripts);
    }
}
