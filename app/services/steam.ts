import { Injectable, Inject } from '@angular/core'
import { Http, Response, Headers, Request, RequestMethod, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class SteamService {
    private _handle = `${this.config.api}/v2/steam`;

    constructor (private http :Http, @Inject('CONFIG') private config) {}

    online() :Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            url: `${this._handle}/online`,
            headers,
            method: RequestMethod.Get
        });

        return this.http.request(new Request(options))
            .map(res => res.json().count)
            .catch(this.handleError.bind(this));
    }

    /**
     * Обработчик ошибок
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError (error :Response) {
        console.error('steam.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}
