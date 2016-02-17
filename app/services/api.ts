import { Injectable, Inject } from 'angular2/core'
import { Http, Response } from 'angular2/http'
import { Headers, Request, URLSearchParams } from 'angular2/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class PlayersService {
    constructor (private http: Http, @Inject('CONFIG') private config) {}

    private _handle :string = this.config.api + `/v1/players`;

    search(nickname :string) :Observable<any> {
        if (!nickname || nickname.length < 2) {
            return Observable.empty();
        }

        var params = new URLSearchParams();
        params.set('nickname', nickname); // the user's search value

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handle, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            .do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError.bind(this));
    }

    fetch(nickname :string) :Observable<any> {
        var params = new URLSearchParams();
        //params.set('nickname', nickname); // the user's search value

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handle + '/' + nickname, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            .do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    private handleError (error :Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error('player.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}

export const API_PROVIDERS = [PlayersService];
