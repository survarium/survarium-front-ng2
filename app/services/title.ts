import { Injectable, Component, Inject } from 'angular2/core'
import { Title as TitleProvider } from 'angular2/platform/browser' // CLIENT-SIDE ONLY

@Injectable()
export class TitleService {
    _projectName :string;

    constructor(private title :TitleProvider, @Inject('CONFIG') private _config) {
        this._projectName = _config.title;
    }

    setTitle(title :string) {
        this.title.setTitle(this._projectName + ' | ' + title);
    }
}

export default TitleService
