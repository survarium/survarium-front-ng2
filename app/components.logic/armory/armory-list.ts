import { NgModule, Component } from '@angular/core'

import { TitleService } from '../../services/title'
import { GameService } from '../../services/api'
import { TYPES, LEVELS } from '../../services/armory'
import { I18N } from '../../services/i18n'
import { Storage } from '../../utils/storage'
import { SharedModule } from '../../shared'

@Component({
    selector: 'armory-list',
    styles: [require('./armory-list.styl')],
    template: require('./armory-list.html'),
})

export class ArmoryList {
    private version :any;
    private versions :any;
    private data :any;
    private armoryType :any;
    private armorySubType :any;
    private armoryLevel :any;
    private armoryRarity :boolean;
    private levels = LEVELS;
    private types = TYPES;

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
                    result = result && item.drop_weight <= 1;
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
                title.setRendered();
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
            .subscribe(items => this.data = items
                .filter(item => item.ver)
                .map(item => {
                    item.props && (item.props = item.props.filter(prop => prop.name));

                    return item;
                })
                .sort((a, b) => b.level - a.level));
    }
}

@NgModule({
    imports: [SharedModule],
    declarations: [ArmoryList]
})

export class ArmoryListModule {}
