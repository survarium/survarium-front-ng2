import { Component, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router-deprecated'
import { Observable } from 'rxjs/Observable'
import { PlayersService } from '../../services/api'
import { TitleService } from '../../services/title'
import { I18N } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'
import { Storage } from '../../utils/storage'
import Nickname from '../../components.common/nickname/nickname'

@Component({
    providers  : [],
    directives : [Nickname],
    pipes: [I18NPipe],
    styles: [require('./players-search.styl')],
    template: require('./players-search.html'),
    selector: 'players-search',
    encapsulation: ViewEncapsulation.None
})

export class PlayersSearch {
    value = Storage.getItem('player:find');
    wide :boolean = false;

    constructor(private _router :Router,
                private _playerService :PlayersService,
                private _title :TitleService,
                private i18n :I18N
    ) {
        _title.setTitle(i18n.get('players.search.docTitle'));
        _title.setDescription(i18n.get('players.search.docDescription'));
    }

    showPlayer() {
        let nickname = this.value;

        if (!nickname) {
            return;
        }

        nickname = nickname.trim();
        Storage.setItem('player:find', nickname);
        this._router.navigate(['PlayersDetail', { nickname: nickname }]);
    }

    search:() => void;

    private _searchTermStream =
        Observable.create(
            (observer) => this.search = () => setTimeout(() => observer.next(this.value + this.wide), 20)
        );

    private items = this._searchTermStream
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap((signature :string) => {
            return this
                ._playerService
                .search(this.value, this.wide)
                .catch(() => Observable.empty());
        });
}

export default PlayersSearch
