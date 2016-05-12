import { Injectable, Inject } from '@angular/core'
import { Title as TitleProvider } from '@angular/platform-browser' // FIXME: CLIENT-SIDE ONLY
import { TrackService } from './track'

@Injectable()
export class TitleService {
    _appName :string;

    description :any;

    constructor(private title :TitleProvider, @Inject('CONFIG') private _config, private track :TrackService) {
        this._appName = _config.title;
        this.description = document.querySelector('meta[name="description"]');
    }

    setTitle(title ?:string) {
        let nextTitle = this._appName + (title ? ' | ' + title : '');
        this.title.setTitle(nextTitle);
        this.track.visit({ title: nextTitle });
    }

    setDescription(description :string) {
        this.description && (this.description.content = description);
    }
}

export default TitleService
