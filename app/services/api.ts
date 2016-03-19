import { Injectable, Inject } from 'angular2/core'
import { Http, Response, Headers, Request, URLSearchParams } from 'angular2/http'
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
        let options = new Request({ url: this._handleV2 + '/' + nickname, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить статистику игрока
     * @param {String} nickname
     * @param {Object} [query]
     * @returns {Observable<R>}
     */
    stats(nickname :string, query ?:any) :Observable<any> {
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
        let options = new Request({ url: `${this._handleV2}/${nickname}/stats`, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
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

    private _handle :string = this.config.api + `/v2/matches`;

    /**
     * Список матчей
     * @param {Object} [query]
     * @param {Boolean} [query.cw] флаг отображения клановых матчей
     * @returns {Observable<R>}
     */
    list(query ?:any) :Observable<any> {
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
        let options = new Request({ url: this._handle + (query.cw ? '/cw' : ''), headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить информацию о матче
     * @param {Number} id
     * @returns {Observable<R>}
     */
    fetch(id :number) :Observable<any> {
        let params = new URLSearchParams();
        params.set('lang', this.apiLang);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handle + '/' + id, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить статистику матча
     * @param {Number} id
     * @param {Object} [query]
     * @returns {Observable<R>}
     */
    stats(id :number, query ?:any) :Observable<any> {
        let params = new URLSearchParams();
        params.set('lang', this.apiLang);

        query = query || {};
        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                params.set(`sort[${key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handle}/${id}/stats`, headers: headers, search: params, method: 'get' });

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
     * @param {String} abbr Аббревиатура клана
     * @returns {Observable<R>}
     */
    fetch(abbr :string) :Observable<any> {
        let params = new URLSearchParams();
        params.set('lang', this.apiLang);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handle}/${abbr}`, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить информацию о составе клана
     * @param {String} abbr Аббревиатура клана
     * @returns {Observable<R>}
     */
    players(abbr :string, query) :Observable<any> {
        let params = new URLSearchParams();
        params.set('lang', this.apiLang);

        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                params.set(`sort[${key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handle}/${abbr}/players`, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить информацию о матчах клана
     * @param {String} abbr Аббревиатура клана
     * @returns {Observable<R>}
     */
    matches(abbr :string, query) :Observable<any> {
        let params = new URLSearchParams();
        params.set('lang', this.apiLang);

        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                params.set(`sort[${key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handle}/${abbr}/matches`, headers: headers, search: params, method: 'get' });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить информацию о кланварах клана
     * @param {String} abbr Аббревиатура клана
     * @returns {Observable<R>}
     */
    clanwars(abbr :string, query) :Observable<any> {
        let params = new URLSearchParams();
        params.set('lang', this.apiLang);

        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                params.set(`sort[${key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handle}/${abbr}/clanwars`, headers: headers, search: params, method: 'get' });

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
        console.error('clans.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}

@Injectable()
export class VgService {
    constructor (private http :Http,
                 @Inject('CONFIG') private config) {}

    private _handle :string = this.config.api + `/v2/vg`;

    /**
     * Сообщения разработчиков на форуме
     * @param {Object} [query]
     * @returns {Observable<R>}
     */
    messages(query ?:any) :Observable<any> {
        query = query || {};

        var params = new URLSearchParams();

        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                params.set(`sort[${key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({
            url: this._handle + '/messages',
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
     * Получить список разработчиков
     * @returns {Observable<R>}
     */
    devs() :Observable<any> {
        let params = new URLSearchParams();

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handle + '/devs', headers: headers, search: params, method: 'get' });

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
        console.error('vg.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}

export const API_PROVIDERS = [PlayersService, MatchesService, ClansService, VgService];
