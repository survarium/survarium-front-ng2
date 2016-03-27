import { Injectable, Inject } from 'angular2/core'
import { Title as TitleProvider } from 'angular2/platform/browser' // FIXME: CLIENT-SIDE ONLY
import { TrackService } from './track'

@Injectable()
export class TitleService {
    _appName :string;

    constructor(private title :TitleProvider, @Inject('CONFIG') private _config, private track :TrackService) {
        this._appName = _config.title;
    }

    setTitle(title ?:string) {
        let nextTitle = this._appName + (title ? ' | ' + title : '');
        this.title.setTitle(nextTitle);
        this.track.visit({ title: nextTitle });
    }
}

export default TitleService
