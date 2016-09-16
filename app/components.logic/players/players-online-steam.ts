import { Component, OnDestroy } from '@angular/core'
import { SteamService } from '../../services/steam'

@Component({
    selector: 'players-online-steam',
    template: require('./players-online-steam.html'),
    styles: [require('./players-online-steam.styl')]
})

export class PlayersOnlineSteam implements OnDestroy {
    private online :number;
    private get show () {
        return this.online !== undefined;
    }
    private dataSubscriber :any;

    constructor (private steamService :SteamService) {
        this.dataSubscriber = steamService
            .online()
            .subscribe(count => this.online = count, () => {});
    }

    ngOnDestroy () {
        if (this.dataSubscriber) {
            this.dataSubscriber.unsubscribe();
        }
    }
}
