import { EventEmitter, Injectable } from 'angular2/core'

var store = {
    players: [],
    clans: []
};

@Injectable()
export class Store {
    players = {
        items: store.players,
        add: function (nickname) {
            if (~store.players.indexOf(nickname)) {
                return;
            }
            store.players.unshift(nickname);
            store.players.splice(3);
        }
    };

    clans = {
        items: store.clans,
        add: function (abbr) {
            if (~store.clans.indexOf(abbr)) {
                return;
            }
            store.clans.unshift(abbr);
            store.clans.splice(3);
        }
    }
}

export default Store
