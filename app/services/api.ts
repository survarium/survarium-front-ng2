import { Injectable, Inject } from '@angular/core'
import { Http, Response, Headers, Request, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { I18N } from '../services/i18n'

@Injectable()
export class PlayersService {
    private apiLang :string;

    constructor (private http :Http,
                 @Inject('CONFIG') private config,
                 private i18n :I18N
    ) {
        this.apiLang = i18n.apiLang;
    }

    private _handleV2 :string = this.config.api + `/v2/players`;

    /**
     * Поиск игрока по части никнейма
     * @param {String}  nickname
     * @param {Boolean} wide        мягкий поиск
     * @returns {Observable<R>}
     */
    search(nickname :string, wide :boolean) :Observable<any> {
        if (!nickname || nickname.length < 3) {
            return Observable.empty();
        }

        let params = new URLSearchParams();
        params.set('nickname', nickname);
        wide && params.set('wide', 'true');

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handleV2, headers: headers, search: params, method: 'get' , body: '' });

        return this.http.request(options)
            .map(res => res.json())
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
        let options = new Request({ url: this._handleV2 + '/' + nickname, headers: headers, search: params, method: 'get' , body: '' });

        return this.http.request(options)
            .map(res => res.json())
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить скиллы по никнейму
     * @param {String} nickname
     * @returns {Observable<R>}
     */
    skills(nickname :string) :Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handleV2 + '/' + nickname + '/skills', headers: headers, method: 'get' , body: '' });

        return this.http.request(options)
            .map(res => res.json())
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

        query.limit !== undefined && params.set('limit', query.limit);
        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                params.set(`sort[${key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handleV2}/${nickname}/stats`, headers: headers, search: params, method: 'get' , body: '' });

        return this.http.request(options)
            .map(res => res.json())
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить список игроков
     * @param {Object} [query]
     * @returns {Observable<PlayersList>}
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

        if (query.filter) {
            query.filter.forEach((condition) => {
                params.set(`filter[${condition.field}]`, JSON.stringify(condition.value));
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handleV2, headers: headers, search: params, method: 'get' , body: '' });

        return this.http.request(options)
            .map(res => res.json())
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить топ игроков за последний час
     * @returns {Observable<R>}
     */
    top(query ?:any) :Observable<any> {
        query = query || {};

        var params = new URLSearchParams();
        params.set('period', query.period === 'day' ? 'day' : 'hour');

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handleV2}/top`, headers: headers, search: params, method: 'get' , body: '' });

        return this.http.request(options)
            .map(res => res.json())
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить число игроков за последние сутки
     * @returns {Observable<R>}
     */
    unique(query ?:any) :Observable<any> {
        query = query || {};

        var params = new URLSearchParams();

        if (query.period) {
            params.set('period', query.period);
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handleV2}/unique`, headers: headers, search: params, method: 'get', body: '' });

        return this.http.request(options)
            .map(res => res.json())
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить историю игрока
     * @returns {Observable<R>}
     */
    history(nickname: string, query ?:any) :Observable<any> {
        query = query || {};

        var params = new URLSearchParams();
        params.set('range', {'day': 'day', 'week': 'week', 'month': 'month'}[query.range] || 'day');
        params.set('group', {'avg': 'avg', 'sum': 'sum'}[query.group] || 'avg');

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handleV2}/${nickname}/history`, headers: headers, search: params, method: 'get' , body: '' });

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

        if (query.filter) {
            query.filter.forEach((condition) => {
                params.set(`filter[${condition.field}]`, JSON.stringify(condition.value));
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: this._handle + (query.cw ? '/cw' : ''), headers: headers, search: params, method: 'get' , body: '' });

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
        let options = new Request({ url: this._handle + '/' + id, headers: headers, search: params, method: 'get' , body: '' });

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
        let options = new Request({ url: `${this._handle}/${id}/stats`, headers: headers, search: params, method: 'get' , body: '' });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить таймлайн матчей за последние сутки
     * @returns {Observable<R>}
     */
    timeline() :Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handle}/timeline`, headers: headers, method: 'get' , body: '' });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    checkReplay(match :number) :Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handle}/${match}/replay`, headers: headers, method: 'get' , body: '' });

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
        let options = new Request({ url: `${this._handle}/${abbr}`, headers: headers, search: params, method: 'get' , body: '' });

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

        query.limit !== undefined && params.set('limit', query.limit);
        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                params.set(`sort[${key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handle}/${abbr}/players`, headers: headers, search: params, method: 'get' , body: '' });

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

        query.limit !== undefined && params.set('limit', query.limit);
        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                params.set(`sort[${key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handle}/${abbr}/matches`, headers: headers, search: params, method: 'get' , body: '' });

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

        query.limit !== undefined && params.set('limit', query.limit);
        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                params.set(`sort[${key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({ url: `${this._handle}/${abbr}/clanwars`, headers: headers, search: params, method: 'get' , body: '' });

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
    private _handleBans :string = this.config.api + `/v2`;

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
            method: 'get',
            body: ''
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
        let options = new Request({ url: this._handle + '/devs', headers: headers, search: params, method: 'get' , body: '' });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить списки банов
     * @returns {Observable<R>}
     */
    bans(query ?:any) :Observable<any> {
        query = query || {};

        var params = new URLSearchParams();

        params.set('limit', '5');
        query.skip !== undefined && params.set('skip', query.skip);
        if (query.sort) {
            Object.keys(query.sort).forEach((key) => {
                params.set(`sort[${key}]`, query.sort[key]);
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({
            url: this._handleBans + '/bans',
            headers: headers,
            search: params,
            method: 'get',
            body: ''
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
        console.error('vg.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}

@Injectable()
export class GameService {
    constructor (private http :Http,
                 private i18n :I18N,
                 @Inject('CONFIG') private config) {}

    private _handle :string = this.config.api + `/v2/game`;
    private _handleV1 :string = this.config.api + `/v1`;

    factions() :Observable<any>{
        var params = new URLSearchParams();
        params.set('language', this.i18n.lang.apiLang);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({
            url: this._handle + '/factions',
            headers: headers,
            method: 'get',
            search: params,
            body: ''
        });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Версии игры
     * @returns {Observable<R>}
     */
    versions() :Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({
            url: this._handle + '/versions',
            headers: headers,
            method: 'get',
            body: ''
        });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    items(query ?:any) :Observable<any> {
        query = query || {};

        var path = `${this._handle}/items`;

        if (query.items) {
            path += `/${query.items.join(',')}`;
        }

        var params = new URLSearchParams();

        query.thin !== undefined && params.set('thin', 'true');
        query.version !== undefined && params.set('version', query.version);
        query.language !== undefined && params.set('language', query.language);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({
            url: path,
            headers: headers,
            search: params,
            method: 'get',
            body: ''
        });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    usage(id :number) :Observable<any> {
        var path = `${this._handle}/items/${id}/usage`;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({
            url: path,
            headers: headers,
            method: 'get',
            body: ''
        });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    slots(query ?:any) :Observable<any> {
        query = query || {};

        var path = `${this._handleV1}/slots`;

        var params = new URLSearchParams();

        query.language !== undefined && params.set('language', query.language);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({
            url: path,
            headers: headers,
            search: params,
            method: 'get',
            body: ''
        });

        return this.http.request(options)
            .map(res => res.json().reduce((result, slot) => {
                result[slot.id] = slot.name;
                return result;
            }, {}))
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    modifications(query ?:any) :Observable<any> {
        query = query || {};

        var path = `${this._handle}/modifications`;

        if (query.mods) {
            path += `/${query.mods.join(',')}`;
        }

        var params = new URLSearchParams();

        query.thin !== undefined && params.set('thin', 'true');
        query.language !== undefined && params.set('language', query.language);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new Request({
            url: path,
            headers: headers,
            search: params,
            method: 'get',
            body: ''
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
        console.error('vg.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}

export const API_PROVIDERS = [PlayersService, MatchesService, ClansService, VgService, GameService];
