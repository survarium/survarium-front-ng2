import { Component, Input } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { GameService } from '../../services/api'
import { SUBTYPES } from '../../services/armory'
import { ArmItem } from '../../components.common/arm-item/arm-item'
import { Observable } from 'rxjs'
import {I18N, i18n} from '../../services/i18n'

@Component({
    selector: 'players-detail-ammunition',
    directives: [ArmItem],
    pipes: [I18NPipe],
    template: require('./players-detail-ammunition.html'),
    styles: [require('./players-detail-ammunition.styl')]
})

export default class PlayersDetailAmmunition {
    private shown = false;
    @Input() private ammunition :any[];

    constructor (private gameService :GameService, private i18n :I18N) {}

    private items :any[];
    private mods :any[];
    private slots :any;
    private currentProfile = 0;
    private profile :any;
    private profiles :any;
    private targetSlots = [
        'helmet',
        'backpack',
        'pants',
        'mask',
        'jacket',
        'gloves',
        'boots',
        'weapon 1',
        'weapon 2',
        /*'pocket 1',
        'pocket 2',
        'pocket 3',
        'pocket 4',
        'pocket 5',
        'pocket 6',*/
        'ammo 1',
        'ammo 2',
        'ammo 3',
        'ammo 4',
        'ammo 5',
        'ammo 6',
    ];

    private toggle () {
        this.shown = !this.shown;

        if (this.shown && !this.items) {
            this.fetch();
        }
    }

    private fetch () {
        let itemsToFetch = [];
        let modsToFetch = [];

        this.ammunition.forEach(profile => {
            profile.items.forEach(item => {
                itemsToFetch.indexOf(item.item) === -1 && (itemsToFetch.push(item.item));
                item.mods.forEach(mod => modsToFetch.indexOf(mod) === -1 && (modsToFetch.push(mod)))
            });
        });

        if (!itemsToFetch.length) {
            return;
        }

        let fetcher = Observable.forkJoin(
            this.gameService.items({
                items: itemsToFetch,
                thin: true,
                language: i18n.lang.gameLang
            }),
            this.gameService.modifications({
                mods: modsToFetch,
                thin: true,
                language: i18n.lang.gameLang
            }),
            this.gameService.slots({
                language: 'english'
            })
        );

        fetcher.subscribe((x) => {
            this.items = x[0].reduce((result, item) => {
                result[item.id] = item;
                return result;
            }, {});
            this.mods = x[1].reduce((result, mod) => {
                result[mod.id] = mod;
                return result;
            }, {});
            this.slots = x[2];

            this.makeProfiles();
            this.setProfile();
        }, () => {});
    }

    private setProfile (index ?:number) {
        if (!this.ammunition || !this.ammunition.length) {
            return;
        }

        if (index === undefined) {
            index = 0;
        }

        if (this.currentProfile !== index) {
            this.currentProfile = index;
        }

        this.profile = this.profiles[this.currentProfile];
    }

    private makeProfiles () {
        this.profiles = this.ammunition.map(Profile => {
            let slots = this.slots;
            let Items = this.items;
            let Mods  = this.mods;
            let level = 0;
            let profile = Profile.items.reduce((result, info) => {
                let item = Items[info.item];
                let type = SUBTYPES[item.category];
                if (type && type.image && item.icon) {
                    item.image = type.image(item.icon);
                }

                level = Math.max(level, item.level);

                result[slots[info.slot]] = {
                    amount: info.amount,
                    mods: info.mods.map(mod => Mods[mod]),
                    item: item
                };
                return result;
            }, {});

            return {
                profile: Profile.profile,
                level: level,
                items: profile
            };
        });
    }
}
