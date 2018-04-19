import { ActivatedRoute } from '@angular/router'
import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { VgService } from '../../services/api'
import TitleService from '../../services/title'
import { I18N } from '../../services/i18n'

@Component({
    selector: 'dev-message',
    template: require('./dev-message.html'),
    styles: [require('./dev-messages.styl')]
})

export class DevMessage {
    private error :any;
    private devs :{ id: number, name: string }[];

    private htmlEntities (value :string) {
        return value.replace(/&quot;/gm, '"');
    }

    private _data :any[];
    private get message() {
        return this._data;
    }
    private set data(data :any) {
        if (!data) {
            return;
        }

        const message :any = {};
        let dev = this.devs[data.dev];

        message.date = data.date;

        message.dev = { id: dev.id, name: dev.name, url: this._domSanitize.bypassSecurityTrustUrl(`https://forum.survarium.com/${data.lang}/memberlist.php?mode=viewprofile&u=${dev.id}`) };

        message.url = this._domSanitize.bypassSecurityTrustUrl(`https://forum.survarium.com/${data.lang}/viewtopic.php?f=${data.forum.id}&t=${data.topic.id}&p=${data.post}#p${data.post}`);

        message.text = this._domSanitize.bypassSecurityTrustHtml(data.text);

        message.crumbs = [
            data.forum.id && {
                url: this._domSanitize.bypassSecurityTrustUrl(`https://forum.survarium.com/${data.lang}/viewtopic.php?f=${data.forum.id}`),
                name: this.htmlEntities(data.forum.name || data.topic.name)
            },
            (data.topic.id !== undefined) && {
                url: this._domSanitize.bypassSecurityTrustUrl(`https://forum.survarium.com/${data.lang}/viewtopic.php?f=${data.forum.id}&t=${data.topic.id}`),
                name: this.htmlEntities(data.topic.name || data.forum.name)
            }
        ].filter(Boolean);

        this._data = message;
    }

    private dataSubscriber :any;

    constructor(private _vgService :VgService,
                private _title :TitleService,
                private _domSanitize :DomSanitizer,
                private i18n :I18N,
                private route :ActivatedRoute
    ) {

        this._title.setTitle(i18n.get('info.messages.title'));
        this._title.setDescription(i18n.get('info.messages.docDescription'));

        this.dataSubscriber = this._vgService.devs();

        this.dataSubscriber = this.dataSubscriber.subscribe(devs => {
            this.devs = devs.reduce((prev, next) => {
                prev[next.id] = next;
                return prev;
            }, {});
        }, (err) => {
            this.error = JSON.stringify(err, null, 4);
        });
    }

    request (messageId :string) {
        this._vgService
            .message({ messageId })
            .subscribe(data => {
                this.data = data;
                this._title.setRendered();
            }, (err) => {
                this.error = JSON.stringify(err, null, 4);
            })
    }

    private cleanup () {
        this.error = null;

        if (this.dataSubscriber) {
            this.dataSubscriber.unsubscribe();
        }
    }

    private routerSubscriber :any;

    ngOnInit () {
        this.routerSubscriber = this.route.params.map(params => (params['message'])).subscribe(messageId => {
            this.request(messageId);
        });
    }

    ngOnDestroy () {
        this.routerSubscriber.unsubscribe();
        this.cleanup();
    }
}
