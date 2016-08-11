let dict = {
    id          : 'ID',
    date        : 'Date',
    abbr        : 'Clan tag',
    find        : 'Find',
    replay      : 'Replay',
    download    : 'Download',
    time_start  : 'Start time',
    any         : 'Any',
    duration    : 'Duration',
    nickname    : 'Nickname',
    win         : 'Win',
    wins        : 'Wins',
    map         : 'Map',
    match       : 'Match',
    mode        : 'Mode',
    loose       : 'Loose',
    level       : 'Level',
    lvl         : 'Lvl',
    score       : 'Score',
    kills       : 'Kills',
    dies        : 'Dies',
    kd          : 'K/D',
    player      : 'Name',
    team        : 'Team',
    members     : 'Members',
    CWmatches   : 'Clan matches',
    clanwar     : 'Clanwar',
    opponent    : 'Opponent',
    role        : 'Role',
    rating      : 'Rating',
    winrate     : 'Winrate',
    avgScore    : 'Avg.Score',
    victories   : 'Victories',
    totalMatches: 'Total matches',
    matchesCount: 'Matches',
    details     : 'Details',
    actions     : 'Actions',
    progress    : 'Progress',
    established : 'Established date',
    exp         : 'Experience',
    looses      : 'Looses',
    all         : 'All',
    total       : 'Total',
    lastUpdate  : 'Updated',
    wide        : 'Wide',
    roles        : {
        commander: 'Commander',
        warlord  : 'Warlord',
        assistant: 'Assistant',
        soldier  : 'Soldier'
    },
    headshots    : 'Headshots',
    grenadeKills : 'Grenade kills',
    meleeKills   : 'Melee kills',
    artefactKills: 'Artifacts kills',
    pointCaptures: 'Captured points',
    boxesBringed : 'Brought boxes',
    artefactUses : 'Artifacts usage',
    elo          : 'ELO',
    noData       : 'No data',
    banned       : 'Bans',
    players: {
        docTitle: 'Players',
        docDescription: 'Survarium player list. Filters, progress, details, matches, results, clan information.',
        docDescriptionOne: 'Survarium player {{nickname}} statistics. Progress, details, matches, results, clan information.',
        title: 'Players',
        list: 'Players list',
        search: {
            docTitle: 'Player search',
            title: 'Player search',
            docDescription: 'Survarium players search. Progress, details, matches, results, clan information.',
        },
        top: {
            title: 'Top players of',
            hour: 'last hour',
            day: 'last day'
        },
        unique: {
            title: 'Unique players of ',
            hour: 'last hour',
            day: 'last day',
            half: '30 minutes'
        },
        detail: 'Survarium player statistic',
        history: {
            matches: 'Matches',
            ranges: 'Range',
            range: {
                day: 'Day',
                week: 'Week',
                month: 'Months'
            },
            groups: 'Values',
            group: {
                avg: 'Average',
                sum: 'Total'
            }
        }
    },
    teamgroup: `Team {{tag}}`,
    matches: {
        list: 'Matches',
        docDescription: 'Survarium matches list. Map, mode, level.',
        cw: {
            title: 'Clanwars',
            docDescription: 'Survarium clanwars list. Winner highlighting, map, mode, level.',
            clan1: { title: 'Clan 1', score: 'Score 1' },
            clan2: { title: 'Clan 2', score: 'Score 2' },
            winner: 'Winner'
        },
        search: {
            title: 'Search',
            docTitle: 'Match search',
            docDescription: 'Survarium match statistics search.'
        },
        match: {
            docTitle: 'Match | {{id}}',
            docDescription: 'Survarium match {{id}} statistics. Results, map, mode, player list and them results, download replay.'
        },
        timeline: {
            title: 'Matches count of latest 24h'
        }
    },
    clans: {
        title: 'Clans',
        docTitle: 'Clans',
        docDescription: 'Survarium clans list. Results by frags, score and winrate.',
        docDescriptionOne: 'Survarium clan {{abbr}} details. Clan members, statistics, clanwars.',
        one: 'Clan',
        list: 'Clans list',
        listCWDescription: 'Showing top of clans based on <strong>clawnar statistics</strong>',
        listDescription: 'Showing top of clans based on <strong>all matches</strong>',
        detailDescription: 'Public',
        detailCWDescription: 'CW',
        publicMatches: 'Public matches',
        clanwars: 'Clanwars',
        abbr: 'Clan abbrevation',
        search: {
            title: 'Search',
            docTitle: 'Clan search',
            docDescription: 'Survarium clan search.'
        },
        detail: 'Survarium clan statistic'
    },
    loading: 'Loading...',
    modes: {
        'Team Deathmatch': 'TDM',
        'Last Stand': 'DM',
        'Research': 'Research',
        'Battery retrieval': 'Batteries',
        'Artifact Hunt': 'Artifact'
    },
    maps: {
        'Chemical Plant': 'Plant',
        'Vector Laboratory': 'Vector',
        'Rudnya': 'Rudnya',
        'Tarakanovsky Fort': 'Fort',
        'Vostok Radar Station': 'Radar',
        'Cologne Bridge': 'Cologne',
        'School': 'School',
        'London': 'London',
        'Mamayev Kurgan': 'Kurgan'
    },
    dataGrid: {
        counter: 'Showing {{from}} to {{to}} of {{total}} entries',
        counterFiltered: 'Showing {{from}} to {{to}} of {{filtered}} entries (total {{total}})',
        filters: {
            title: 'Filters',
            apply: 'Find'
        },
        filter: {
            title: 'Filter',
            add: 'Add',
            fromTo: 'Range',
            equal: 'Equal',
            from: 'From',
            to: 'To'
        },
        limits: {
            title: 'Items amount'
        }
    },
    streams: {
        title: 'Streams',
        docTitle: 'Streams | {{service}}',
        docDescription: 'Survarium streams on {{service}}. Live streams and records.',
        live: 'LIVE',
        archive: 'Finished streams',
        viewers: 'Viewers: {{count}}',
        none: 'No streams on air',
        size: {
            title: 'Size',
            medium: 'Medium',
            large: 'Large'
        }
    },
    info: {
        title: 'Info',
        messages: {
            title: 'Developer messages',
            telegram: 'Also you can receive developer messages to your pocket device via ',
            docDescription: 'Survarium developers messages on official forum: Dima, Yava, Dargalon, Phantom, joewillburn and others.',
            banlist: 'Banlist'
        }
    },
    home: {
        title: 'pro',
        docDescription: 'Survarium top players for past day, unique players amount, match levels distribution.'
    },
    about: {
        docTitle: 'About',
        docDescription: 'Survarium.pro developer information, survarium community gratitude, feedback.',
        title: 'About',
        telegram: 'Project channel',
        vk: 'Feedback',
        developer: 'Fan-site developer',
        text: 'Fan-site with matches, players and clans statistic. Statistic on this site counting from January 2016.',
        thanks: {
            title: 'Thanks'
        }
    },
    badges: {
        'svpro-developer': 'survarium.pro developer',
        'cheater': 'Cheater (ban)',
        premium: 'Premium'
    },
    discord: {
        description: 'Discord service provides skype/teamspeak/raidcall/slack functionality. It includes text and voice channels for FREE!'
    },
    bans: {
        title: 'Ban lists',
        docDescription: 'Survarium cheaters list with clan tags and levels.'
    },
    'also-known': {
        title: 'Also known as',
        until: 'until'
    },
    till: {
        next: 'To the next level',
        last: 'To level 100'
    },
    skills: {
        hide: 'Hide skills',
        show: 'Show skills',
        branches: {
            shooting: 'Shooting',
            physical: 'Physical',
            anomaly: 'Anomaly'
        },
        type: {
            percent: '%',
            kg: 'kg',
            seconds: 's.'
        }
    },
    armory: {
        title: 'Armory',
        docTitle: 'Armory',
        docDescription: 'Weapons, armor and equipment of Survarium game.',
        versions: {
            label: 'Version'
        },
        types: {
            label: 'Type',
            subtype: 'Branch',
            weapons: 'Weapon',
            armor: 'Armor',
            ammo: 'Ammo',
            grenade: 'Grenades',
            trap: 'Traps',
            drugs: 'Meds',
            assault: 'Assault',
            sniper: 'Sniper',
            shotgun: 'Shotgun',
            smg: 'SMG',
            heavy: 'Machinegun',
            pistol: 'Pistol',
            helmet: 'Helmet',
            mask: 'Mask',
            tors: 'Torso',
            back: 'Backpack',
            legs: 'Shirt',
            hand: 'Gauntlet',
            boot: 'Boot',
            heavy_ammo: 'Heavy',
            dmr: 'DMR',
            buck: 'Buck.',
            ap: 'AP',
            ss: 'SS'
        },
        rarity: {
            label: 'Rarity',
            rare: 'Rare'
        },
        item: {
            docTitle: 'Armory | {{item}}',
            title: 'Armory | {{item}}',
            usage: 'Usage',
            fire_queue_types: {
                '-1': 'Auto',
                '1': 'Single',
                '2': 'Double',
                '3': 'Burst',
                label: 'Fire modes'
            },
            params: {
                weapon: 'Weapon params',
                grenade: 'Grenade params',
                drugs: 'Drugs params',
                ammo: 'Ammo params',
                armor: 'Armor params'
            },
            is_premium: 'Premium',
            yes: 'Yes',
            no: 'No',
            drop_weight: 'Drop chance',
            base_rarity_level: 'Base rarity',
            item_level: 'Item level',
            match_making_level: 'Match making level',
            faction: 'Faction',
            weight: 'Weight',
            kg: 'kg.',
            bullet_damage: 'Damage',
            bullet_pierce: 'Penetration',
            rounds_per_minute: 'Rounds per minute',
            magazine_capacity: 'Magazine capacity',
            bleeding_damage: 'Bleeding damage',
            bleeding_chance: 'Bleeding chance',
            stamina_damage: 'Stamina damage',
            stopping_power: 'Stopping power',
            material_pierce: 'Material pierce',
            max_distance_power: 'Max distance power',
            max_damage_distance: 'Max damage distance',
            min_damage_distance: 'Min damage distance',
            meter: 'm.',
            min_damage_mult: 'Min damage mult',
            brief_recoil: 'Recoil',
            aim_zoom_factor: 'Zoom factor',
            match_participation_cost: 'Match participation cost',
            hip_modifier: 'Hip modifier',
            base_dispersion: 'Dispersion',
            dispersion_modifier: 'Dispersion modifier',
            unmasking_radius: 'Unmasking radius',
            reliability: 'Reliability',
            aim_time: 'Aim time',
            sec: 'sec',
            aim_time_modifier: 'Aim time modifier',
            reload_time: 'Reload time',
            reload_speed_modifier: 'Reload speed modifier',
            show_time: 'Show time',
            hide_time: 'Hide time',
            degrade_per_death: 'Degrade per death',
            tactical_reload_time: 'Tactical reload time',
            experience_bonus_modifier: 'Exp. bonus modifier',
            money_bonus_modifier: 'Money bonus modifier',
            reputation_bonus_modifier: 'Rep. bonus modifier',
            unknown_mods_count: 'Unknown mods count',
            details_to_craft: 'Details to craft',
            recoil: 'Recoil',
            aim_recoil: 'Aim recoil',
            left: 'Left',
            top: 'Top',
            right: 'Right',
            shots_to_change_direction: 'Shots to change direction',
            first_shoot_recoil_multiplier: 'First shoot recoil multiplier',
            shake_time_scale: 'Shake time scale',
            shake_recoil: 'Shake recoil',
            recoil_power: 'Recoil power',
            compensation_proportional_gain: 'Compensation proportional gain',
            compensation_integral_gain: 'Compensation integral gain',
            compensation_derivational_gain: 'Compensation derivational gain',
            splash_min_damage: 'Min damage',
            splash_max_damage: 'Max damage',
            splash_radius: 'Splash radius',
            activation_time: 'Activation time',
            damage_protection: {
                title: 'Damage protection',
                ranged: 'Ranged',
                radiation: 'Radiation',
                blunt: 'Blunt',
                explosive: 'Explosive',
                stamina: 'Stamina',
                slash: 'Slash',
                speed: 'Speed',
                bleeding: 'Bleeding'
            },
            activity_time_sec: 'Activity time',
            heal_amount: 'Heal',
            damage_protection_health: 'Health damage protection',
            damage_protection_infection: 'Infection damage protection',
            activity_time_skill_influence: 'Activity time skill influence',
            removes_bleeding: 'Removes bleeding',
            influences: {
                title: 'Influences',
                left_hand: 'Left hand',
                right_hand: 'Right hand',
                left_leg: 'Left leg',
                right_leg: 'Right leg',
                head: 'Head',
                body: 'Body',
                health: 'Health'
            },
            damage: 'Damage',
            arp: 'ARP',
            required_bags: 'Required bags',
            clip_size: 'Clip size',
            clip_weight: 'Clip weight',
            pierce_dispersion_angle: 'Pierce dispersion angle',
            dispersion: 'Dispersion',
            ricochet_chance: 'Ricochet chance',
            ricochet_angle: 'Ricochet angle',
            ricochet_dispersion_angle: 'Ricochet dispersion angle',
            muzzle_speed: 'Muzzle speed',
            buck_shot: 'Buck shot',
            buck_dispersion: 'Buck dispersion',
            air_resistance: 'Air resistance',
            mass: 'Mass',
            k_power: 'Mult. power',
            k_max_distance_power: 'Mult. max distance power',
            distance: 'Distance',
            k_material_pierce: 'Mult. material pierce',
            k_min_damage_distance: 'Mult. min damage distance',
            k_max_damage_distance: 'Mult. max damage distance',
            k_min_damage_mult: 'Mult. min damage mult',
            k_stamina_damage: 'Mult. stamina damage',
            bleeding_chance_modifier: 'Bleeding chance modifier',
            tracer: 'Tracer',
            gramm: 'g.',
            armor: 'Armor',
            bleeding_protection: 'Bleeding protection',
            hit_params: {
                brain: 'Brain',
                face: 'Face',
                front: 'Front',
                left_forearm: 'Left forearm',
                back: 'Back',
                right_forearm: 'Right forearm',
                left_hip: 'Left hip',
                right_hip: 'Right hip',
                left_arm: 'Left arm',
                right_arm: 'Right arm',
                left_foot: 'Left foot',
                right_foot: 'Right foot',
                title: 'Hit target'

            },
            ano_armor: 'Anomalies protection',
            explosion_armor: 'Explosion protection',
            speed_armor: 'Speed armor',
            repair_cost_ratio: 'Repair cost ratio',
            bleeding_resistance: 'Bleeding resistance',
            stamina_armor: 'Stamina armor',
            camo_available: 'Camo available',
            decal_available: 'Decal available'
            /*
            health_regeneration_speed_modifier: 'health_regeneration_speed_modifier',
            pocket_slots_grenade_modifier: 'pocket_slots_grenade_modifier',
            new_player_damage_modifier: 'new_player_damage_modifier',
            pocket_slots_drug_modifier: 'pocket_slots_drug_modifier',
            melee_damage_modifier: 'melee_damage_modifier',
            respawn_time_modifier: 'respawn_time_modifier',
            stamina_regeneration_speed_modifier: 'stamina_regeneration_speed_modifier',
            max_carried_weight_modifier: 'max_carried_weight_modifier',
            ammo_bags_modifier: 'ammo_bags_modifier',
            pocket_slots_trap_modifier: 'pocket_slots_trap_modifier',
            artefact_slots_modifier: 'artefact_slots_modifier',
            pocket_slots_generic_modifier: 'pocket_slots_generic_modifier',
            pocket_slots_generic_depth_modifier: 'pocket_slots_generic_depth_modifier',
            pocket_slots_grenade_depth_modifier: 'pocket_slots_grenade_depth_modifier',
            pocket_slots_trap_depth_modifier: 'pocket_slots_trap_depth_modifier',
            health_modifier: 'health_modifier',
            artefact_search_time_modifier: 'artefact_search_time_modifier',
            pocket_slot_size_modifier: 'pocket_slot_size_modifier',
            breath_vibration_modifier: 'breath_vibration_modifier',
            pocket_slots_drug_depth_modifier: 'pocket_slots_drug_depth_modifier',
            recoil_modifier: 'recoil_modifier',
            movement_speed_modifier: 'movement_speed_modifier',
            radar_immunity_modifier: 'radar_immunity_modifier',
            stamina_spending_speed_modifier: 'stamina_spending_speed_modifier'
            */
        }
    },
    ammunition: {
        show: 'Show inventory',
        hide: 'Hide inventory'
    },
    months: {
        jan: 'jan',
        feb: 'feb',
        mar: 'mar',
        apr: 'apr',
        may: 'may',
        jun: 'jun',
        jul: 'jul',
        aug: 'aug',
        sep: 'sep',
        oct: 'oct',
        nov: 'nov',
        dec: 'dec'
    },
    advert: {
        title: 'Advertising',
        preloader: 'Loading ads...',
        adblock: 'Please disable AdBlock'
    }
};

export { dict }
export default dict
