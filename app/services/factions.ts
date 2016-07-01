import { Injectable } from '@angular/core'
import { GameService } from './api'
import { Observable } from 'rxjs'

@Injectable()
export class FactionsService {
    private factions;

    getFactions() {
        if (this.factions) {
            return Observable.of(this.factions);
        }

        return this
            .gameService
            .factions()
            .map(data =>
                this.factions = data.reduce((factions, faction) => {
                    factions[faction.id] = faction;
                    return factions;
                }, {}),
            () => {});
    }

    constructor (private gameService :GameService) {}

    getName (id :number) {
        return this
            .getFactions()
            .map(factions => {
                return factions[id].name;
            });
    }
}

export default FactionsService
