export function ngOnLoad(window, document) {
    window['WebFontConfig'] = {
        google: { families: [ 'Exo+2:400,700:latin,cyrillic' ] }
    };

    var scripts = document.getElementsByTagName('script')[0],
        targets = [
            { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' },
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
        script.id && (domScript.id = script.id);

        scripts.parentNode.insertBefore(domScript, scripts);
    }
}
