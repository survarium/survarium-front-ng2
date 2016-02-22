import { Component, Inject, OnInit } from 'angular2/core'
import { NgForm, FORM_DIRECTIVES } from 'angular2/common'
import { Router } from 'angular2/router'
import { Observable } from 'rxjs/Observable'
import { PlayersService } from '../../services/api'
import { TitleService } from '../../services/title'
import { I18N, I18NPipe } from '../../services/i18n'
import Nickname from '../../components.common/nickname/nickname'

@Component({
    providers  : [],
    directives : [NgForm, FORM_DIRECTIVES, Nickname],
    pipes: [I18NPipe],
    styles: [
        `
        :host { display: block }
        form { padding: 1em; }
        li { display: list-item; }
        input[type="submit"] { display: inline-block; }
        `
    ],
    template: `
        <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
            <input ngControl="nickname" placeholder="{{'nickname' | i18n}}" #nickname (keyup)="search(nickname.value)" />
            <input type="submit" value="{{'find' | i18n}}" />
        </form>

        <ul>
            <li *ngFor="#item of items | async"><nickname [nickname]="item.nickname" [clan]="item.clan"></nickname></li>
        </ul>`,
    selector   : 'players-search',
})

export class PlayersSearchComponent {
    constructor(private _router :Router,
                private _playerService :PlayersService,
                private _title :TitleService,
                private i18n :I18N
    ) {
        _title.setTitle(i18n.get('players:head:title:search'));
    }

    private onSubmit(form) {
        this.showPlayer(form.nickname)
    }

    showPlayer(nickname) {
        if (!nickname) {
            return;
        }
        this._router.navigate(['PlayersDetail', { nickname: nickname.trim() }]);
    }

    search:(value:string) => void;

    private _searchTermStream =
        Observable.create(
            (observer) => this.search = (term) => observer.next(term)
        );

    private items = this._searchTermStream
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap((term:string) => this._playerService.search(term));
}

export default PlayersSearchComponent
