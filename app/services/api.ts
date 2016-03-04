import { Injectable, Inject } from 'angular2/core'
import { Http, Response } from 'angular2/http'
import { Headers, Request, URLSearchParams } from 'angular2/http'
import { Observable } from 'rxjs/Observable'
import { I18N } from '../services/i18n'
import { PlayersList } from '../typings/players-list'

@Injectable()
export class PlayersService {
    private apiLang :string;

    constructor (private http :Http,
                 @Inject('CONFIG') private config,
                 private i18n :I18N
    ) {
        this.apiLang = i18n.apiLang;
    }

    private _handle :string = this.config.api + `/v1/players`;
    private _handleV2 :string = this.config.api + `/v2/players`;

    /**
     * Поиск игрока по части никнейма
     * @param {String} nickname
     * @returns {Observable<R>}
     */
    search(nickname :string) :Observable<any> {
        if (!nickname || nickname.length < 2) {
            return Observable.empty();
        }

        let params = new URLSearchParams();
        params.set('nickname', nickname);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handle, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить информацию по никнейму
     * @param {String} nickname
     * @returns {Observable<R>}
     */
    fetch(nickname :string) :Observable<any> {
        let params = new URLSearchParams();
        params.set('lang', this.apiLang);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handle + '/' + nickname, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить список игроков
     * @param {Object} [query]
     * @returns {Observable<PlayersList>}
     */
    list(query ?:any) :Observable<PlayersList> {
        query = query || {};

        var params = new URLSearchParams();
        params.set('lang', this.apiLang);
        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                params.set(`sort[${key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handleV2, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            .catch(this.handleError.bind(this));
    }

    /**
     * Обработчик ошибок
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError (error :Response) {
        console.error('players.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}

@Injectable()
export class MatchesService {
    private apiLang :string;

    constructor (private http :Http,
                 @Inject('CONFIG') private config,
                 private i18n :I18N
    ) {
        this.apiLang = i18n.apiLang;
    }

    private _handle :string = this.config.api + `/v1/matches`;


    /**
     * Список матчей
     * @param {Object} [query]
     * @param {Boolean} [query.cw] флаг отображения клановых матчей
     * @returns {Observable<R>}
     */
    list(query ?:any) :Observable<any> {
        query = query || {};

        var params = new URLSearchParams();
        params.set('slim', '1');
        params.set('lang', this.apiLang);
        params.set('cw', query.cw ? '1' : '0');

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handle, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            .catch(this.handleError.bind(this));
    }

    /**
     * Обработчик ошибок
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError (error :Response) {
        console.error('matches.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}

@Injectable()
export class ClansService {
    private apiLang :string;

    constructor (private http :Http,
                 @Inject('CONFIG') private config,
                 private i18n :I18N
    ) {
        this.apiLang = i18n.apiLang;
    }

    private _handle :string = this.config.api + `/v2/clans`;

    /**
     * Список кланов
     * @param {Object} [query]
     * @param {Boolean} [query.publicStats] флаг выборки по публичной статистике
     * @returns {Observable<R>}
     */
    list(query ?:any) :Observable<any> {
        query = query || {};

        var params = new URLSearchParams();
        params.set('lang', this.apiLang);
        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                let _key = query.publicStats ? key.replace(/^total\./, 'totalPublic.') : key;
                params.set(`sort[${_key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({
            url: this._handle + (query.publicStats ? '' : '/cw'),
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
     * Получить информацию о клане
     * @param {String} name Аббревиатура клана
     * @returns {Observable<R>}
     */
    fetch(name :string) :Observable<any> {
        let params = new URLSearchParams();
        params.set('lang', this.apiLang);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handle + '/' + name, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
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
        console.error('clans.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}

export const API_PROVIDERS = [PlayersService, MatchesService, ClansService];
