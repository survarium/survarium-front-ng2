import { Component, Inject } from 'angular2/core'
import { VgService } from '../../services/api'
import Store from '../../services/store'
import TitleService from '../../services/title'
import { I18N } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'
import { DateTimePipe } from '../../pipes/datetime'
import { DataGridCounters } from '../../components.common/data-grid/data-grid-counters'
import { DataGridPagination } from '../../components.common/data-grid/data-grid-pagination'
import { TelegramChannel } from '../../components.common/telegram-channel/telegram-channel'
import { Observable } from 'rxjs'

@Component({
    selector: 'dev-messages',
    pipes: [I18NPipe, DateTimePipe],
    directives: [DataGridCounters, DataGridPagination, TelegramChannel],
    template: require('./dev-messages.html'),
    styles: [require('./dev-messages.styl')]
})

export class DevMessages {
    private error :any;
    private devs :{ id: number, name: string }[];

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
            message.dev = { id: dev.id, name: dev.name, url: `https://forum.survarium.com/${message.lang}/memberlist.php?mode=viewprofile&u=${dev.id}` };

            message.url = `https://forum.survarium.com/${message.lang}/viewtopic.php?f=${message.forum.id}&t=${message.topic.id}&p=${message.post}#p${message.post}`;

            message.crumbs = [
                message.forum.id && {
                    url: `https://forum.survarium.com/${message.lang}/viewtopic.php?f=${message.forum.id}`,
                    name: this.htmlEntities(message.forum.name)
                },
                message.topic.id && {
                    url: `https://forum.survarium.com/${message.lang}/viewtopic.php?f=${message.forum.id}&t=${message.topic.id}`,
                    name: this.htmlEntities(message.topic.name)
                }
            ].filter(Boolean);
            return message;
        });
        this._data = val;
    }

    constructor(private _vgService :VgService,
                private _title :TitleService,
                private i18n :I18N
    ) {

        this._title.setTitle(i18n.get('info.messages.title'));
        this._title.setDescription(i18n.get('info.messages.docDescription'));

        let start = Observable.forkJoin(
            this._vgService.devs(),
            this._vgService.messages()
        );

        start.subscribe((x) => {
            this.devs = x[0].reduce((prev, next) => {
                prev[next.id] = next;
                return prev;
            }, {});
            this.data = x[1];
        }, (err) => {
            this.error = JSON.stringify(err, null, 4);
        });
    }

    paginate (skip) {
        this._vgService
            .messages({ skip })
            .subscribe((x) => {
                this.data = x;
                window.scrollTo(0, 0); // FIXME: CLIENT-SIDE ONLY
            }, (err) => {
                this.error = JSON.stringify(err, null, 4);
            })
    }
}
