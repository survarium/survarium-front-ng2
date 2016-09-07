import { Component } from '@angular/core'

@Component({
    selector: 'arm-item',
    inputs: ['item', 'thin', 'mods', 'defaultMods', 'micro'],
    template: require('./arm-item.html'),
    styles: [require('./arm-item.styl')],
    host: {
        '[class.mods_0]': '!mods?.length',
        '[class.mods_1]': 'mods?.length === 1',
        '[class.mods_2]': 'mods?.length === 2',
        '[class.mods_3]': 'mods?.length === 3',
        '[class.mods_4]': 'mods?.length === 4',
        '[class.mods_5]': 'mods?.length === 5',
        '[class.premium]': 'item.premium',
        '[class.rare]': '!item.premium && item.drop_weight <= 1',
        '[class.thin]': 'thin',
        '[class.micro]': 'micro'
    }
})

export class ArmItem  {
    private _mods :any[];
    private _defMods :any[];
    private item :any;

    set mods (val :any[]) {
        this._mods = val.filter(Boolean).map(mod => {
            if (mod.modifier instanceof Array) {
                mod.value = mod.modifier[this.item.level];
            }

            return mod;
        });
    }

    get mods () {
        return this._mods;
    }

    set defaultMods (val :any[]) {
        this._defMods = val.filter(Boolean).map(mod => {
            if (mod.modifier instanceof Array) {
                mod.value = mod.modifier[this.item.level];
            }

            return mod;
        });
    }

    get defaultMods () {
        return this._defMods;
    }
}

export default ArmItem
