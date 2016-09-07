import { Injectable } from '@angular/core'

export const LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const TYPES = [
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
            { id: 1, name: 'helmet', hitParams: ['brain'] },
            { id: 2, name: 'mask'  , hitParams: ['face'] },
            { id: 3, name: 'tors'  , hitParams: ['front', 'left_forearm', 'back', 'right_forearm'] },
            { id: 4, name: 'back' },
            { id: 5, name: 'legs'  , hitParams: ['left_hip', 'right_hip'] },
            { id: 6, name: 'hand'  , hitParams: ['left_arm', 'right_arm'] },
            { id: 7, name: 'boot'  , hitParams: ['left_foot', 'right_foot'] }
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

export const SUBTYPES = TYPES.reduce((result, root :any) => {
    root.types.forEach(type => {
        result[type.id] = root;
        result[type.id].subType = type;
    });

    return result;
}, {});

@Injectable()
export class ArmoryService {
    constructor () {}
}

export default ArmoryService
