import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'
import { GameService } from '../../services/api'
import { SUBTYPES } from '../../services/armory'
import { Observable } from 'rxjs'
import { I18N, i18n } from '../../services/i18n'

@Component({
    selector: 'players-detail-ammunition',
    template: require('./players-detail-ammunition.html'),
    styles: [require('./players-detail-ammunition.styl')],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export default class PlayersDetailAmmunition {
    private shown = false;
    private _ammunition;
    @Input() set ammunition (val :any[]) {
        this.shown = false;
        this.items = null;
        this._ammunition = val;
    };

    get ammunition () {
        return this._ammunition;
    }

    constructor (private gameService :GameService, private i18n :I18N, private changeDetector :ChangeDetectorRef) {}

    private items :any[];
    private mods :any;
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

    private convertDefaultMods (defaultMods) {
        return Object.keys(defaultMods).map(key => defaultMods[key]);
    }

    private emptyObservable = Observable.create(observer => { observer.next(null); observer.complete(); });

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
            (modsToFetch && modsToFetch.length) ? this.gameService.modifications({
                mods: modsToFetch,
                thin: true,
                language: i18n.lang.gameLang
            }) : this.emptyObservable,
            this.gameService.slots({
                language: 'english'
            })
        );

        let mods = {};

        let assignMods = (data) => data ? data.reduce((result, mod) => {
            result[mod.id] = mod;
            return result;
        }, mods) : mods;

        let subscriber = fetcher.subscribe((x) => {
            let defaultMods = [];

            this.items = x[0].reduce((result, item) => {
                result[item.id] = item;

                if (item.default_modifications) {
                    if (!(item.default_modifications instanceof Array)) {
                        item.default_modifications = this.convertDefaultMods(item.default_modifications);
                    }

                    defaultMods = [...defaultMods, ...item.default_modifications];
                } else item.default_modifications = [];

                return result;
            }, {});
            mods = assignMods(x[1]);
            this.slots = x[2];

            subscriber.unsubscribe();

            let next = () => {
                this.mods = mods;

                this.makeProfiles();
                this.setProfile();
            };

            if (defaultMods.length) {
                let additionalSubscriber = this
                    .gameService
                    .modifications({
                        mods: defaultMods,
                        thin: true,
                        language: i18n.lang.gameLang
                    })
                    .subscribe(data => {
                        mods = assignMods(data);
                        additionalSubscriber.unsubscribe();
                        next();
                    });
                return;
            }

            next();
        }, () => {});
    }

    private setProfile (index ?:number) {
        if (!this.ammunition || !this.ammunition.length) {
            this.changeDetector.markForCheck();
            return;
        }

        if (index === undefined) {
            index = 0;
        }

        if (this.currentProfile !== index) {
            this.currentProfile = index;
        }

        this.profile = this.profiles[this.currentProfile];
        this.changeDetector.markForCheck();
    }

    private makeProfiles () {
        let slots = this.slots;
        let Items = this.items;
        let Mods  = this.mods;

        this.profiles = this.ammunition.map(Profile => {
            let level = 0;
            let profile = Profile.items.reduce((result, info) => {
                let item = Items[info.item];

                if (!item) {
                    console.info(`no data for item ${info.item} received`);
                    return result;
                }

                let type = SUBTYPES[item.category];

                if (type && type.image && item.icon) {
                    item.image = type.image(item.icon);
                }

                level = Math.max(level, item.level);

                result[slots[info.slot]] = {
                    amount: info.amount,
                    mods: info.mods.map(mod => Mods[mod]),
                    defMods: item.default_modifications && item.default_modifications.map(mod => Mods[mod]),
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

        this.changeDetector.markForCheck();
    }
}
