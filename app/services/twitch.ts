import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, URLSearchParams, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TwitchService {
    private key     = '5j7vs0lxf7op1wduqjw893g6y13lom';
    private _handle = 'https://api.twitch.tv/helix';
    private gameId  = 34211; // obtained by https://api.twitch.tv/helix/games?name=Survarium

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
            game_id : this.gameId,
            first: 6
        };

        Object.keys(data).forEach((key) => {
            params.set(key, data[key]);
        });

        let headers = new Headers({
            'Client-ID': this.key
        });

        let options = new RequestOptions({
            url: `${this._handle}/streams`,
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
        console.error('twitch.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}

