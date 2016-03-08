import { Injectable, Component, Inject } from 'angular2/core'
import { Http, Response, Headers, Request, URLSearchParams } from 'angular2/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class TwitchService {
    private key     = '5j7vs0lxf7op1wduqjw893g6y13lom';
    private _handle = 'https://api.twitch.tv/kraken';

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
            game : 'Survarium',
            limit: 6,
            stream_type: ['all', 'playlist', 'live']['all']
        };

        Object.keys(data).forEach((key) => {
            params.set(key, data[key]);
        });

        let headers = new Headers({
            'Accept': 'application/vnd.twitchtv.v3+json',
            'Client-ID': this.key
        });

        let options = new Request({
            url: `${this._handle}/streams`,
            headers: headers,
            search: params,
            method: 'get'
        });

        return this.http.request(options)
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

