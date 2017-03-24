import { Injectable } from '@angular/core'
import { Http, Response, Headers, Request, RequestOptions, URLSearchParams, RequestMethod } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class YoutubePlayer {
    constructor() {
        if (!window['YT']) {
            var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT['ready'] = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window['onYTReady'] = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT['setConfig'] = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vflAJcBBz/www-widgetapi.js';a.async = true;var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();
            window['onYouTubeIframeAPIReady'] = this.ready.bind(this);
        }
    }

    private streamTrigger :(options ?:any) => void;
    public  player = Observable.create((observer) => this.streamTrigger = (options) => observer.next(options));

    private _ready :boolean;

    private ready () {
        console.log('Youtube player ready');
        this._ready = true;
        this.streamTrigger(window['YT']);
    }
}

@Injectable()
export class YoutubeService {
    private key     = 'AIzaSyACWiZhJnrmKyr4ox1coOH7JsHJr_0NBQA';
    private _handle = 'https://www.googleapis.com/youtube/v3';

    constructor (private http :Http) {}

    /**
     * Список видео
     * @param {Object} query
     * @returns {Observable<R>}
     */
    list(query :any) :Observable<any> {
        query = query || {};

        var params = new URLSearchParams();

        var data = {
            maxResults     : 6,
            key            : this.key,
            q              : 'survarium',
            type           : 'video',
            order          : 'date',
            part           : 'snippet',
            videoEmbeddable: true,
            videoSyndicated: true,
            videoDefinition: query.live ? 'any' : 'high',
            videoDuration  : query.live ? 'any' : 'long',
            eventType      : query.live ? 'live' : 'completed'
        };

        Object.keys(data).forEach((key) => {
            params.set(key, data[key]);
        });

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            url: `${this._handle}/search`,
            headers,
            params,
            method: RequestMethod.Get
        });

        return this.http.request(new Request(options))
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Обработчик ошибок
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError (error :Response) {
        console.error('youtube.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}
