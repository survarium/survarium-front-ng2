import { Component, Inject, OnInit } from 'angular2/core'
import { NgForm, FORM_DIRECTIVES } from 'angular2/common'
import { Router } from 'angular2/router'
import { Observable } from 'rxjs/Observable'
import { PlayersService } from '../../services/api'
import TitleService from '../../services/title'

@Component({
    providers  : [],
    directives : [NgForm, FORM_DIRECTIVES],
    styles: [
        `
        :host { display: block; background-color: #ddd; transition: height .3s ease-in-out; }
        form { border: 1px solid #000; padding: 1em; }
        `
    ],
    template: `
        <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
            <input ngControl="nickname" placeholder="Nickname" #nickname (keyup)="search(nickname.value)" />
            <input type="submit" value="Find" />
        </form>

        <ul>
            <li *ngFor="#item of items | async" (click)="showPlayer(item.nickname)">{{item.nickname}}</li>
        </ul>`,
    selector   : 'players-list',
})

export class PlayersListComponent implements OnInit {
    constructor(private _router:Router,
                private _playerService:PlayersService,
                private _title:TitleService) { }

    ngOnInit():any {
        this._title.setTitle('Players list');
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
