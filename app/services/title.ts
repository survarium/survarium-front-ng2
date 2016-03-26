import { Injectable, Component, Inject } from 'angular2/core'
import { Title as TitleProvider } from 'angular2/platform/browser' // CLIENT-SIDE ONLY

@Injectable()
export class TitleService {
    _appName :string;

    constructor(private title :TitleProvider, @Inject('CONFIG') private _config) {
        this._appName = _config.title;
    }

    setTitle(title ?:string) {
        this.title.setTitle(this._appName + (title ? ' | ' + title : ''));
    }
}

export default TitleService
