import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { VgService } from '../../services/api'
import TitleService from '../../services/title'
import { I18N } from '../../services/i18n'
import { Observable } from 'rxjs'

@Component({
    selector: 'dev-messages',
    template: require('./dev-messages.html'),
    styles: [require('./dev-messages.styl')]
})

export class DevMessages {
    private error :any;
    private devs :{ id: number, name: string }[];
    private filters = [];

    private htmlEntities (value :string) {
        return value.replace(/&quot;/gm, '"');
    }

    private _data :any[];
    private get data() {
        return this._data;
    }
    private set data(val :any) {
        val.data = val.data.map((message :any) => {
            let dev = this.devs[message.dev];
            message.dev = { id: dev.id, name: dev.name, url: this._domSanitize.bypassSecurityTrustUrl(`https://forum.survarium.com/${message.lang}/memberlist.php?mode=viewprofile&u=${dev.id}`) };

            message.url = this._domSanitize.bypassSecurityTrustUrl(`https://forum.survarium.com/${message.lang}/viewtopic.php?f=${message.forum.id}&t=${message.topic.id}&p=${message.post}#p${message.post}`);

            message.text = this._domSanitize.bypassSecurityTrustHtml(message.text);

            message.crumbs = [
                message.forum.id && {
                    url: this._domSanitize.bypassSecurityTrustUrl(`https://forum.survarium.com/${message.lang}/viewtopic.php?f=${message.forum.id}`),
                    name: this.htmlEntities(message.forum.name)
                },
                message.topic.id && {
                    url: this._domSanitize.bypassSecurityTrustUrl(`https://forum.survarium.com/${message.lang}/viewtopic.php?f=${message.forum.id}&t=${message.topic.id}`),
                    name: this.htmlEntities(message.topic.name)
                }
            ].filter(Boolean);
            return message;
        });
        this._data = val;
    }

    constructor(private _vgService :VgService,
                private _title :TitleService,
                private _domSanitize :DomSanitizer,
                private i18n :I18N
    ) {

        this._title.setTitle(i18n.get('info.messages.title'));
        this._title.setDescription(i18n.get('info.messages.docDescription'));

        let start = Observable.forkJoin(
            this._vgService.devs(),
            this._vgService.langs()
        );

        start.subscribe((x) => {
            this.devs = x[0].reduce((prev, next) => {
                prev[next.id] = next;
                return prev;
            }, {});

            this.filters.push({
                title: i18n.get('info.messages.lang'),
                filter: { field: 'lang', type: 'select', values: x[1].reduce((result, lang) => {
                    result.push({ value: lang, title: i18n.get(`lang.${lang}`) });
                    return result;
                }, []) }
            });
        }, (err) => {
            this.error = JSON.stringify(err, null, 4);
        });
    }

    request () {
        this._vgService
            .messages({ skip: this.skip, filter: this.search })
            .subscribe((x) => {
                this.data = x;
                this._title.setRendered();
                window.scrollTo(0, 0); // FIXME: CLIENT-SIDE ONLY
            }, (err) => {
                this.error = JSON.stringify(err, null, 4);
            })
    }

    skip :number = 0;
    paginate (skip) {
        this.skip = skip;
        this.request();
    }

    search :any;
    filter (params) {
        this.search = params;
        this.paginate(0);
    }
}
