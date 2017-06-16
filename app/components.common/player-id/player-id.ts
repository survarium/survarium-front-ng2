import { Component, Input } from '@angular/core'

@Component({
    selector: 'player-id',
    template: `<ng-template [ngIf]="_id">
        <a routerLink="/players/{{_id}}" rel="nofollow">ID: {{_id}}</a>
    </ng-template>`,
    styles: [require('./player-id.styl')]
})

export class PlayerId {
    private _id :string;

    @Input('id') set id (val) {
        this._id = val;
    };
}

export default PlayerId
