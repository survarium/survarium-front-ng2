import { CONFIG } from './config'
import { appProvider } from './services/app'

export function ngOnLoad(window, document) {
    window['WebFontConfig'] = {
        google: { families: [ 'Play:400,700:latin,cyrillic' ] }
    };

    const isWebBrowser = CONFIG.isWebBrowser;

    let scripts = document.getElementsByTagName('script')[0],
        targets = [
            //{ src: 'https://an.yandex.ru/system/context.js' },
            isWebBrowser && { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', onerror: () => {
                CONFIG.adblock = true;
                appProvider.app.changeDetectorRef.markForCheck();
                appProvider.app.changeDetectorRef.detectChanges();
            } },
            /*{ src: 'https://www.googletagservices.com/tag/js/gpt.js', onerror: () => {
                CONFIG.adblock = true;
                appProvider.app.changeDetectorRef.markForCheck();
                appProvider.app.changeDetectorRef.detectChanges();
            } },*/
            isWebBrowser && { src: 'https://vk.com/js/api/openapi.js?121' },
            isWebBrowser && { src: 'https://platform.twitter.com/widgets.js', id: 'twitter-wjs' },
            isWebBrowser && { src: 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js' },
            isWebBrowser && { src: 'https://viewer.marmoset.co/main/marmoset.js' }
        ].filter(Boolean);

    for (let i = 0, script; i < targets.length; i++) {
        script = targets[i];

        let domScript = document.createElement('script');
        domScript.type = 'text/javascript';
        (script.async === undefined || script.async) && (domScript.async = true);
        domScript.src = script.src;
        script.onerror && (domScript.onerror = ((script) => (err) => script.onerror.call(script, err))(script));
        script.id && (domScript.id = script.id);

        scripts.parentNode.insertBefore(domScript, scripts);
    }
}
