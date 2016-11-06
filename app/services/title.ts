import { Injectable, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { Title as TitleProvider } from '@angular/platform-browser' // FIXME: CLIENT-SIDE ONLY
import { TrackService } from './track'

declare var window :any;

@Injectable()
export class TitleService {
    _appName :string;

    description :any;
    alternates :any;

    private get url () {
        return this.route.url.split('?')[0];
    }

    private setAlt (alt) {
        alt.href = this.url + '?lang=' + alt.lang;
    }

    private createAlternates() {
        let self = this;

        this.alternates = this._config.i18n.languages.map(lang => {
            let alt = document.createElement('link');

            alt.rel = 'alternate';
            alt.hreflang = lang.alternate;
            alt.lang = lang.lang;

            self.setAlt(alt);

            self.description.parentNode.insertBefore(alt, self.description);

            return alt;
        });
    }

    private updateAlternates() {
        this.alternates.forEach(this.setAlt.bind(this));
    }

    constructor(private title :TitleProvider,
                @Inject('CONFIG') private _config,
                private track :TrackService,
                private route :Router
    ) {
        this._appName = _config.title;
        this.description = document.querySelector('meta[name="description"]');

        this.createAlternates();
    }

    setTitle(title ?:string) {
        let nextTitle = this._appName + (title ? ' | ' + title : '');
        this.title.setTitle(nextTitle);
        this.track.visit({ title: nextTitle });

        this.updateAlternates();
        this.setRendered();
    }

    setDescription(description :string) {
        this.description && (this.description.content = description);
    }

    setRendered() {
        window.prerenderReady = true;
    }
}

export default TitleService
