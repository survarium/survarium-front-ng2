import { Component } from '@angular/core'
import { TitleService } from '../../services/title'
import { GameService } from '../../services/api'
import { I18N } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'
import { Storage } from '../../utils/storage'

@Component({
    selector: 'armory',
    providers: [GameService],
    styles: [require('./armory.styl')],
    template: require('./armory.html'),
    pipes: [I18NPipe]
})

export class Armory {
    private version :any;
    private versions :any;
    private data :any;
    private armoryType :any;
    private armorySubType :any;
    private armoryLevel :any;
    private armoryRarity :boolean;
    private levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    private types = [
        {
            name: 'weapons',
            leveling: true,
            rarity: true,
            image: function (icon) {
                if (!icon.length) {
                    return;
                }

                return `/assets/ui_icons/items/weapons/weapon_${icon[1]}_${icon[0]}.png`;
            },
            types: [
                { id: 8, name: 'assault' },
                { id: 13, name: 'sniper' },
                { id: 14, name: 'shotgun' },
                { id: 15, name: 'smg' },
                { id: 16, name: 'heavy' },
                { id: 17, name: 'pistol' }
            ]
        },
        {
            name: 'armor',
            rarity: true,
            leveling: true,
            image: function (icon) {
                if (!icon.length) {
                    return;
                }

                return `/assets/ui_icons/items/equipment/equipment_${icon[1]}_${icon[0]}.png`;
            },
            types: [
                { id: 1, name: 'helmet' },
                { id: 2, name: 'mask' },
                { id: 3, name: 'tors' },
                { id: 4, name: 'back' },
                { id: 5, name: 'legs' },
                { id: 6, name: 'hand' },
                { id: 7, name: 'boot' }
            ]
        },
        {
            name: 'ammo',
            image: function (icon) {
                if (!icon.length) {
                    return;
                }

                return `/assets/ui_icons/items/ammo/ammo_${icon[1]}_${icon[0]}.png`;
            },
            types: [
                { id: 9, name: 'heavy_ammo' },
                { id: 18, name: 'dmr' },
                { id: 19, name: 'buck' },
                { id: 20, name: 'ap' },
                { id: 21, name: 'ss' }
            ]
        },
        {
            name: 'grenade',
            image: function (icon) {
                if (!icon.length) {
                    return;
                }

                return `/assets/ui_icons/items/ammo/ammo_${icon[1]}_${icon[0]}.png`;
            },
            types: [
                { id: 24, name: 'grenade' }
            ]
        },
        {
            name: 'trap',
            image: function (icon) {
                if (!icon.length) {
                    return;
                }

                return `/assets/ui_icons/items/ammo/ammo_${icon[1]}_${icon[0]}.png`;
            },
            types: [
                { id: 11, name: 'trap' }
            ]
        },
        {
            name: 'drugs',
            image: function (icon) {
                if (!icon.length) {
                    return;
                }

                return `/assets/ui_icons/items/ammo/ammo_${icon[1]}_${icon[0]}.png`;
            },
            types: [
                { id: 10, name: 'drugs' }
            ]
        }
    ];

    get items () {
        if (!this.armorySubType || !this.data) {
            return;
        }

        let categories = this.armorySubType === '0' ?
            this.armoryType.types.map(type => type.id) :
            [this.armorySubType.id];

        let level = this.armoryLevel !== 'null' ? Number(this.armoryLevel) : undefined;
        
        let rarity = this.armoryRarity;

        return this
            .data
            .filter(item => {
                let result = categories.indexOf(item.category) > -1;

                if (level !== undefined) {
                    result = result && item.level === level;
                }
                
                if (rarity) {
                    result = result && item.drop_weight === 0;
                }

                return result;
            })
            .map((item :any) => {
                if (item.icon && this.armoryType.image) {
                    item.image = this.armoryType.image(item.icon);
                }

                return item;
            });
    }

    constructor (
        private gameService :GameService,
        private title :TitleService,
        private i18n :I18N) {
        title.setTitle(i18n.get('armory.docTitle'));
        title.setDescription(i18n.get('armory.docDescription'));

        gameService
            .versions()
            .subscribe(versions => {
                this.versions = versions;
                this.setVersion();
                this.setArmoryType();
            }, () => {});
    }

    private setArmoryType(armoryType ?:string) {
        if (!armoryType) {
            armoryType = Storage.getItem('armory:type');
        }

        let type = armoryType ?
            this.types.filter(type => type.name === armoryType)[0] || this.types[0]: this.types[0];

        if (type !== this.armoryType) {
            this.armoryType = type;
            Storage.setItem('armory:type', this.armoryType.name);
            this.setArmorySubType();
            this.setArmoryLevel();
            this.setArmoryRarity();
        }
    }

    private setArmorySubType(armoryType ?:string) {
        let setAll = false;

        if (armoryType === '0') {
            setAll = true;
        }

        if (!armoryType) {
            armoryType = Storage.getItem('armory:subtype');
            if (armoryType === '0') {
                setAll = true;
            }
        }

        let type = '0';

        if (!setAll) {
            let types = this.armoryType.types;

            type = armoryType ?
            types.filter(type => type.name === armoryType)[0] || types[0]: types[0];
        }

        if (type !== this.armorySubType) {
            this.armorySubType = type;
            Storage.setItem('armory:subtype', this.armorySubType.name || this.armorySubType);
        }
    }

    private setArmoryLevel(level ?:string) {
        if (!this.armoryType.leveling) {
            level = 'null';
        }

        if (level === undefined) {
            level = Storage.getItem('armory:level') || 'null';
        }

        if (level !== this.armoryLevel) {
            this.armoryLevel = level;
            Storage.setItem('armory:level', level);
        }
    }

    private setVersion(version ?:any) {
        if (!version) {
            let storedVersion = Storage.getItem('armory:version');
            version = storedVersion ? this.versions.filter(ver => ver.id === storedVersion)[0] || this.versions[0] : this.versions[0];
        }

        if (version !== this.version) {
            this.version = version;
            Storage.setItem('armory:version', this.version.id);
            this.getItems();
        }
    }
    
    private setArmoryRarity(rarity ?:string) {
        let rare = false;
        if (rarity === 'rare') {
            rare = true;
        }
        
        if (!this.armoryType.rarity) {
            rare = false;
        }
        
        if (this.armoryRarity !== rare) {
            this.armoryRarity = rare;
        }
    }

    private getItems () {
        this.gameService
            .items({
                language: this.i18n.lang.gameLang,
                version: this.version.id,
                thin: true
            })
            .subscribe(items => this.data = items.map(item => {
                item.props && (item.props = item.props.filter(prop => prop.name));
                return item;
            }).sort((a, b) => b.level - a.level));
    }
}
