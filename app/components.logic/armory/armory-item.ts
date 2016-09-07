import { NgModule, Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TitleService } from '../../services/title'
import { GameService } from '../../services/api'
import { FactionsService } from '../../services/factions'
import { SUBTYPES } from '../../services/armory'
import { I18N } from '../../services/i18n'
import { Storage } from '../../utils/storage'
import { Visual } from '../../components.common/visual/visual'
import { ArmoryItemWeapon } from './armory-item-weapon'
import { ArmoryItemRecoil } from './armory-item-recoil'
import { ArmoryItemGrenade } from './armory-item-grenade'
import { ArmoryItemDrugs } from './armory-item-drugs'
import { ArmoryItemAmmo } from './armory-item-ammo'
import { ArmoryItemArmor } from './armory-item-armor'
import { SharedModule } from '../../shared'

@Component({
    selector: 'armory-item',
    styles: [require('./armory-item.styl')],
    template: require('./armory-item.html')
})

export class ArmoryItem implements OnInit, OnDestroy {
    private key :string;
    private version :any;
    private versions :any;
    private data :any;
    private verData :any;
    private usage :any;
    private faction :string;

    private type :any;

    private setVersion(version ?:any) {
        if (!version) {
            let storedVersion = Storage.getItem('armory:version');
            version = storedVersion ? this.versions.filter(ver => ver.id === storedVersion)[0] || this.versions[0] : this.versions[0];
        }

        if (version !== this.version) {
            this.version = version;
            Storage.setItem('armory:version', this.version.id);
            this.getItem();
        }
    }


    private getUsage() {
        if (this.usage) {
            return;
        }

        this.gameService
            .usage(this.data.id)
            .subscribe(data => this.usage = data, () => {});
    }

    private getFaction() {
        if (this.faction) {
            return;
        }

        this.factionsService
            .getName(this.verData.parameters.faction)
            .subscribe(data => { this.faction = data }, () => {});
    }

    private getItem() {
        this.gameService
            .items({
                items: [this.key],
                language: this.i18n.lang.gameLang,
                version: this.version.id,
            })
            .subscribe(data => {
                this.data = data[0];
                this.verData = this.data.versions[this.version.id.replace(/\./g, '_dot_')];
                this.type = SUBTYPES[this.data.category];
                this.verData.image = this.type.image && this.type.image(this.verData.ui_desc.icon);

                this.title.setTitle(this.i18n.get('armory.item.docTitle', { item: this.data.name }));
                this.title.setDescription(this.i18n.get('armory.docDescription'));

                this.getUsage();
                this.getFaction();
            }, () => {});
    }

    constructor (private route :ActivatedRoute,
                 private gameService :GameService,
                 private factionsService :FactionsService,
                 private title :TitleService,
                 private i18n :I18N) {}

    private loadItem (item) {
        this.key = item;

        this.gameService
            .versions()
            .subscribe(versions => {
                this.versions = versions;
                this.setVersion();
            }, () => {});
    }

    private routerSubscriber :any;

    ngOnInit () {
        this.routerSubscriber = this.route
            .params
            .map(params => params['item'])
            .subscribe(item => this.loadItem(item));
    }

    ngOnDestroy () {
        this.routerSubscriber.unsubscribe();
    }
}

@NgModule({
    imports: [SharedModule],
    declarations: [
        ArmoryItem,
        ArmoryItemWeapon,
        ArmoryItemRecoil,
        ArmoryItemGrenade,
        ArmoryItemDrugs,
        ArmoryItemAmmo,
        ArmoryItemArmor,
        Visual
    ]
})

export class ArmoryItemModule {}
