import { Component } from '@angular/core'
import { VgService } from '../../services/api'
import TitleService from '../../services/title'
import { I18N } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'
import { DateTimePipe } from '../../pipes/datetime'
import { DataGridCounters } from '../../components.common/data-grid/data-grid-counters'
import { DataGridPagination } from '../../components.common/data-grid/data-grid-pagination'
import { Nickname } from '../../components.common/nickname/nickname'
import { DFP } from '../../components.common/dfp/dfp'

@Component({
    selector: 'bans',
    pipes: [I18NPipe, DateTimePipe],
    directives: [DataGridCounters, DataGridPagination, Nickname, DFP],
    template: require('./bans.html'),
    styles: [require('./bans.styl')]
})

export class Bans {
    private error :any;

    private htmlEntities (value :string) {
        return value.replace(/&quot;/gm, '"');
    }

    private _data :any[];
    private get data() {
        return this._data;
    }
    private set data(val :any) {
        val.data = val.data.map((elem :any) => {
            let message = elem['vg_message'];
            elem.url = `https://forum.survarium.com/${message.lang}/viewtopic.php?f=${message.forum.id}&t=${message.topic.id}&p=${message.post}#p${message.post}`;

            elem.crumbs = [
                message.forum.id && {
                    url: `https://forum.survarium.com/${message.lang}/viewtopic.php?f=${message.forum.id}`,
                    name: this.htmlEntities(message.forum.name)
                },
                message.topic.id && {
                    url: `https://forum.survarium.com/${message.lang}/viewtopic.php?f=${message.forum.id}&t=${message.topic.id}`,
                    name: this.htmlEntities(message.topic.name)
                }
            ].filter(Boolean);

            elem.players = elem.players.sort((a, b) => b.player.progress.level - a.player.progress.level);
            return elem;
        });
        this._data = val;
    }

    private load (options ?:any) {
        this._vgService.bans(options).subscribe(data => this.data = data, err => this.error = JSON.stringify(err, null, 4));
    }

    constructor(private _vgService :VgService,
                private _title :TitleService,
                private i18n :I18N
    ) {

        this._title.setTitle(i18n.get('bans.title'));
        this._title.setDescription(i18n.get('bans.docDescription'));

        this.load();
    }

    paginate (skip) {
        this.load({ skip });
    }
}
