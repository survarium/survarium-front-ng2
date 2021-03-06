import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response, Headers, Request, URLSearchParams, RequestMethod, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { catchError } from 'rxjs/operators'
import { I18N } from './i18n'

const MODES = ['Battery retrieval', 'Team Deathmatch', 'Research', 'Artifact Hunt', 'Slaughter'];
const MATCH_TYPES = ['random', 'rating'];

export const Modes = MODES.reduce((result, mode) => {
    MATCH_TYPES.forEach(type => {
        result.push([mode, type]);
    });

    return result;
}, []);

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
        let options = new RequestOptions({ url: this._handleV2, headers: headers, search: params, method: 'get' , body: '' });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: this._handleV2 + '/' + encodeURIComponent(nickname), headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: this._handleV2 + '/' + encodeURIComponent(nickname) + '/skills', headers, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: `${this._handleV2}/${encodeURIComponent(nickname)}/stats`, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: this._handleV2, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: `${this._handleV2}/top`, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: `${this._handleV2}/unique`, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: `${this._handleV2}/${encodeURIComponent(nickname)}/history`, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: this._handle + (query.cw ? '/cw' : ''), headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: this._handle + '/' + id, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: `${this._handle}/${id}/stats`, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить таймлайн матчей за последние сутки
     * @returns {Observable<R>}
     */
    timeline(opts :{ type :string }) :Observable<any> {
        let params = new URLSearchParams();
        params.set('type', opts.type);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ url: `${this._handle}/timeline`, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({
            url: this._handle + (query.publicStats ? '' : '/cw'),
            headers: headers,
            search: params,
            method: 'get',
            body: ''
        });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: `${this._handle}/${encodeURIComponent(abbr)}`, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: `${this._handle}/${encodeURIComponent(abbr)}/players`, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: `${this._handle}/${encodeURIComponent(abbr)}/matches`, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: `${this._handle}/${encodeURIComponent(abbr)}/clanwars`, headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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

        if (query.filter) {
            query.filter.forEach((condition) => {
                params.set(`filter[${condition.field}]`, JSON.stringify(condition.value));
            });
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            url: this._handle + '/messages',
            headers,
            params,
            method: RequestMethod.Get
        });

        return this.http.request(new Request((options)))
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }
    /**
     * Сообщение разработчиков на форуме
     * @param {Object} [query]
     * @returns {Observable<R>}
     */
    message(query : { messageId :string }) :Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            url: this._handle + '/messages/' + query.messageId,
            headers,
            method: RequestMethod.Get
        });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({ url: this._handle + '/devs', headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Получить список языков сообзений
     * @returns {Observable<R>}
     */
    langs() :Observable<any> {
        let params = new URLSearchParams();

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ url: this._handle + '/langs', headers, params, method: RequestMethod.Get });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({
            url: this._handleBans + '/bans',
            headers,
            params,
            method: RequestMethod.Get
        });

        return this.http.request(new Request((options)))
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
                 private httpClient :HttpClient,
                 @Inject('CONFIG') private config) {}

    private _handle :string = this.config.api + `/v2/game`;
    private _handleV1 :string = this.config.api + `/v1`;

    factions() :Observable<any>{
        var params = new URLSearchParams();
        params.set('language', this.i18n.lang.apiLang);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            url: this._handle + '/factions',
            headers,
            method: RequestMethod.Get,
            params
        });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({
            url: this._handle + '/versions',
            headers,
            method: RequestMethod.Get
        });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({
            url: path,
            headers,
            params,
            method: RequestMethod.Get
        });

        return this.http.request(new Request((options)))
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    usage(id :number) :Observable<any> {
        var path = `${this._handle}/items/${id}/usage`;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            url: path,
            headers,
            method: RequestMethod.Get
        });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({
            url: path,
            headers,
            params,
            method: RequestMethod.Get
        });

        return this.http.request(new Request((options)))
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
        let options = new RequestOptions({
            url: path,
            headers,
            params,
            method: RequestMethod.Get
        });

        return this.http.request(new Request((options)))
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    factionChallenge() :Observable<any> {
        return this.httpClient.get(`${this._handle}/faction-challenge`, { responseType: 'json' })
            .pipe(catchError(this.handleErrorV2));
    }

    /**
     * Обработчик ошибок для
     * @angular/common/http
     * @param error
     * @returns {ErrorObservable}
     */
    private handleErrorV2 (error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Observable.throw(
            'Something bad happened; please try again later.');
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
