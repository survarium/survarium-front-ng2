import { Component, OnInit, OnDestroy, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'
import TitleService from '../../services/title'
import {i18n as i18nBackend, I18N, LANGUAGE} from '../../services/i18n'

const DATA :any[] = require('./pve.json');

@Component({
    selector: 'pve-page',
    template: require('./pve-page.html'),
    styles: [require('./pve-page.styl')],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PvePage implements OnInit, OnDestroy {
    constructor(private _title :TitleService,
                private route :ActivatedRoute,
                private router :Router,
                private changeDetector: ChangeDetectorRef,
                private i18n :I18N,
                private domSanitizer :DomSanitizer,
                @Inject('CONFIG') private config
    ) {
        this._title.setTitle(i18nBackend.get('pve.docTitle'));
        this._title.setDescription(i18nBackend.get('pve.docDescription'));
        this._title.setRendered();
    }

    private routerSubscriber :any;
    private _page :any;
    private pageName :any;
    private pageImage :any;
    private stageIndex :number;
    private stage :any;
    private stageMap :any;

    setStage (stage) {
        if (this.stageIndex === stage) {
            return;
        }

        if (stage < this.page.stages.length) {
            this.stageIndex = stage;
            this.stage = this.page.stages[this.stageIndex];

            let mapUrl = this.stage.map.url[i18nBackend.lang.lang];

            if (mapUrl[0] === '/') {
                mapUrl = `https://${window.location.host}${mapUrl}`;
            }

            this.stageMap = this.domSanitizer.bypassSecurityTrustResourceUrl(mapUrl);
        }
    }

    get page () {
        return this._page;
    }

    set page (page) {
        this._page = page;

        if (page) {
            if (page.image) {
                this.pageImage = this.domSanitizer.bypassSecurityTrustStyle(`url(${page.image})`);
            }

            this.setStage(0);
        }/* else {
            this.router.navigate(['/pve']);
        }*/
    }

    private isNotFound = false;

    private loadPage (pageName) {
        if (this.pageName === pageName) {
            return;
        }

        this.pageName = pageName;
        this.page = DATA[this.pageName];

        this.isNotFound = !this.page;
        this.changeDetector.markForCheck();
    }

    ngOnInit () {
        this.routerSubscriber = this.route
            .params
            .map(params => params['page'])
            .subscribe(pageName => this.loadPage(pageName));
    }

    ngOnDestroy () {
        this.routerSubscriber.unsubscribe();
    }
}
