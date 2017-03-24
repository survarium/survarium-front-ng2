import { Injectable } from '@angular/core'
import { Http, Response, Headers, Request, RequestMethod, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class DiscordService {
    private _id     = '177509497038831616';
    private _handle = `https://discordapp.com/api/servers`;

    constructor (private http :Http) {}

    widget() :Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            url: `${this._handle}/${this._id}/widget.json`,
            headers,
            method: RequestMethod.Get
        });

        return this.http.request(new Request(options))
            .map(res => res.json())
            .do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Обработчик ошибок
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError (error :Response) {
        console.error('discord.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}
