let dict = {
    id          : 'ID',
    date        : 'Data',
    abbr        : 'Tag Klanowy',
    find        : 'Znajdź',
    replay      : 'Powtórka',
    download    : 'Pobierz',
    time_start  : 'Czas rozpoczęcia',
    any         : 'Każdy',
    duration    : 'Czas trwania',
    nickname    : 'Nick',
    win         : 'Zwycięstwo',
    wins        : 'Zwycięstwa',
    map         : 'Mapa',
    match       : 'Mecz',
    mode        : 'Tryb',
    loose       : 'Przegrana',
    level       : 'Poziom',
    lvl         : 'Poz.',
    score       : 'Punkty',
    kills       : 'Zabójstwa',
    dies        : 'Zgony',
    kd          : 'K/D',
    player      : 'Gracz',
    team        : 'Drużyna',
    members     : 'Członkowie',
    CWmatches   : 'Mecze klanowe',
    clanwar     : 'Wojny klanowe',
    opponent    : 'Przeciwnicy',
    role        : 'Rola',
    rating      : 'Ranking',
    winrate     : 'Stosunek wygranych',
    avgScore    : 'Średnia liczba punktów',
    victories   : 'Zwycięstwa',
    totalMatches: 'Wszystkie mecze',
    matchesCount: 'Mecze',
    details     : 'Szczegóły',
    actions     : 'Działania',
    progress    : 'Postęp',
    established : 'Data założenia',
    exp         : 'Doświadczenie',
    looses      : 'Przegrane',
    all         : 'Wszystkie',
    total       : 'Łącznie',
    lastUpdate  : 'Aktualizacja',
    wide        : 'Szerokość',
    place       : 'Pozycja',
    server      : 'Serwer',
    roles        : {
        commander: 'Dowódca',
        warlord  : 'Sierżant',
        assistant: 'Zastępca dowódcy',
        soldier  : 'Żołnierz'
    },
    headshots    : 'Strzały w głowę',
    grenadeKills : 'Zabójstwa granatem',
    meleeKills   : 'Zabójstwa walką wręcz',
    artefactKills: 'Zabójstwa artefaktem',
    pointCaptures: 'Przejęte punkty',
    boxesBringed : 'Doniesione baterie',
    artefactUses : 'Wykorzystane artefakty',
    elo          : 'ELO',
    random_match_elo_title: 'Ocena graczy w losowych meczach',
    rating_match_elo_title: 'Ocena graczy w meczach rankingowych (ligi)',
    wastedTime   : 'Czas gry',
    time         : 'Czas',
    noData       : 'Brak danych',
    banned       : 'Bany',
    players: {
        docTitle: 'Gracze',
        docDescription: 'Lista graczy Survarium. Filters, progress, details, matches, results, clan information.',
        docDescriptionOne: 'Statystyki gracza {{nickname}} w Survarium. Progress, details, matches, results, clan information.',
        title: 'Gracze',
        list: 'Lista graczy',
        search: {
            docTitle: 'Znajdź gracza',
            title: 'Znajdź gracza',
            docDescription: 'Survarium players search. Progress, details, matches, results, clan information.',
        },
        top: {
            title: 'Najlepszy gracz z',
            hour: 'ostatniej godziny',
            day: 'ostatniego dnia'
        },
        unique: {
            title: 'Unikalni użytkownicy z ',
            hour: 'ostatniej godziny',
            day: 'ostatniego dnia',
            week: 'ostatnim tygodniu',
            month: 'ostatnim miesiącu',
            half: 'ostatnich 30 minut'
        },
        detail: 'Statystyki gracza',
        history: {
            matches: 'Mecze',
            ranges: 'Zakres',
            range: {
                day: 'Dzień',
                week: 'Tydzień',
                month: 'Miesiące'
            },
            groups: 'Wartość',
            group: {
                avg: 'Średnia',
                sum: 'Całkowita'
            }
        }
    },
    teamgroup: `Drużyna {{tag}}`,
    type: 'Typ',
    matches: {
        list: 'Mecze',
        docDescription: 'Survarium matches list. Map, mode, level.',
        cw: {
            title: 'Wojny klanowe',
            docDescription: 'Survarium clanwars list. Winner highlighting, map, mode, level.',
            clan1: { title: 'Klan 1', score: 'Wynik 1' },
            clan2: { title: 'Klan 2', score: 'Wynik 2' },
            winner: 'Zwycięzca'
        },
        search: {
            title: 'Szukaj',
            docTitle: 'Match search',
            docDescription: 'Survarium match statistics search.'
        },
        match: {
            docTitle: 'Match | {{id}}',
            docDescription: 'Survarium match {{id}} statistics. Results, map, mode, player list and them results, download replay.'
        },
        timeline: {
            title: 'Mecze z ostatnich 24 godzin'
        },
        rating: 'Ranking',
        random: 'PVP'
    },
    clans: {
        title: 'Klany',
        docTitle: 'Clans',
        docDescription: 'Survarium clans list. Results by frags, score and winrate.',
        docDescriptionOne: 'Survarium clan {{abbr}} details. Clan members, statistics, clanwars.',
        one: 'Klan',
        list: 'Lista klanów',
        listCWDescription: 'Najlepsze klany na podstawie <strong>statystyk wojen klanowych</strong>',
        listDescription: 'Najlepsze klany na podstawie <strong>wszystkich meczy</strong>',
        detailDescription: 'Wszystkie mecze',
        detailCWDescription: 'Wojny klanowe',
        publicMatches: 'Wszystkie mecze',
        clanwars: 'Wojny klanowe',
        abbr: 'Tag klanu',
        search: {
            title: 'Szukaj',
            docTitle: 'Clan search',
            docDescription: 'Survarium clan search.'
        },
        detail: 'Statystyka klanu'
    },
    loading: 'Ładowanie...',
    modes: {
        'team deathmatch': 'TDM',
        'research': 'Badania',
        'battery retrieval': 'Baterie',
        'artifact hunt': 'Artefakty',
        'slaughter': 'Rzeź',
        'paintball': 'Paintball',
        'pve': 'PVE',
        'search and destroy': 'Bomb'
    },
    maps: {
        'chemical plant': 'Zakłady',
        'vector laboratory': 'Vector',
        'rudnya': 'Rudnya',
        'tarakanovsky fort': 'Fort',
        'vostok radar station': 'Radar',
        'cologne bridge': 'Kolonia',
        'school': 'Szkoła',
        'london': 'Londyn',
        'mamayev kurgan': 'Kurhan',
        'pve': 'PVE',
        'cnpp cooling tower': 'Wieża chłodnicza CzAES',
        'duga radar station': 'Stacja Radarowa "Duga"',
        'abandoned base': 'Porzucona baza'
    },
    weather: {
        evening: 'Wieczór',
        day: 'Dzień',
        rain: 'Deszcz',
        prerain: 'Pochmurny',
        night: 'Noc'
    },
    dataGrid: {
        counter: 'Pokaż {{from}} do {{to}} z {{total}} meczy',
        counterFiltered: 'Pokaż {{from}} do {{to}} z {{filtered}} meczy (total {{total}})',
        filters: {
            title: 'Filtr',
            apply: 'Znajdź'
        },
        filter: {
            title: 'Filtr',
            add: 'Dodaj',
            fromTo: 'Zakres',
            equal: 'Poziom',
            from: 'Od',
            to: 'Do'
        },
        limits: {
            title: 'Wyświetlane wiersze'
        },
        pagination: {
            prev: 'Pop.',
            next: 'Nast.'
        }
    },
    streams: {
        title: 'Streamy',
        docTitle: 'Streams | {{service}}',
        docDescription: 'Survarium streams on {{service}}. Live streams and records.',
        live: 'NA ŻYWO',
        archive: 'Zakończone streamy',
        viewers: 'Oglądający: {{count}}',
        none: 'Aktualnie nie ma streamów',
        size: {
            title: 'Wielkość',
            medium: 'Średnia',
            large: 'Duża'
        }
    },
    info: {
        title: 'Informacje',
        messages: {
            title: 'Wiadomości developerów',
            telegram: 'Możesz również odczytywać wiadomości developerów na urządzeniach mobilnych poprzez ',
            docDescription: 'Survarium developers messages on official forum: Dima, Yava, Dargalon, Phantom, joewillburn and others.',
            banlist: 'Bany',
            lang: 'Forum'
        }
    },
    home: {
        title: 'pro',
        docDescription: 'Survarium top players for past day, unique players amount, match levels distribution.'
    },
    about: {
        docTitle: 'About',
        docDescription: 'Survarium.pro developer information, survarium community gratitude, feedback.',
        title: 'O mnie',
        telegram: 'Kanał projektu',
        vk: 'Media społecznościowe',
        developer: 'Twórca strony',
        text: 'Fanowska strona z statystykami klanów, meczy i graczy. Statystyki na tej stronie sa liczone od stycznia 2016.',
        thanks: {
            title: 'Podziękowania'
        },
        current: 'Obecny deweloper:',
        previous: 'Wszystkie zasługi należą się poprzedniemu deweloperowi:'
    },
    badges: {
        'svpro-developer': 'Twórca strony survarium.pro',
        'cheater': 'Cheater (ban)',
        premium: 'Premium'
    },
    discord: {
        description: 'Discord service provides skype/teamspeak/raidcall/slack functionality. It includes text and voice channels for FREE!'
    },
    bans: {
        title: 'Lista banów',
        docDescription: 'Survarium cheaters list with clan tags and levels.'
    },
    'also-known': {
        title: 'Równiez znany jako',
        until: 'do'
    },
    till: {
        next: 'Do następnego poziomu',
        last: 'Do poziomu 100'
    },
    skills: {
        hide: 'Ukryj umiejętności',
        show: 'Pokaż umiejętności',
        branches: {
            shooting: 'Strzelanie',
            physical: 'Trening fizyczny',
            anomaly: 'Wiedza o Lesie'
        },
        type: {
            percent: '%',
            kg: 'kg',
            seconds: 's.'
        }
    },
    'armory-ttk': {
        title: 'TTK'
    },
    armory: {
        title: 'Zbrojownia',
        docTitle: 'Armory',
        docDescription: 'Weapons, armor and equipment of Survarium game.',
        outdated: 'Informacje są nieaktualne i może być używana tylko w celach historycznych',
        versions: {
            label: 'Wersja'
        },
        types: {
            label: 'Typ',
            subtype: 'Kategoria',
            weapons: 'Broń',
            armor: 'Pancerz',
            ammo: 'Amunicja',
            grenade: 'Granaty',
            trap: 'Pułapki',
            drugs: 'Apteczki',
            assault: 'Karabin szturmowy',
            sniper: 'Snajperka',
            shotgun: 'Strzelba',
            smg: 'PM',
            heavy: 'Karabin maszynowy',
            pistol: 'Pistolet',
            helmet: 'Hełm',
            mask: 'Maska',
            tors: 'Pancerz',
            back: 'Plecak',
            legs: 'Spodnie',
            hand: 'Rękawiczki',
            boot: 'Buty',
            heavy_ammo: 'Pośrednia',
            dmr: 'Karabinowa',
            buck: 'Śrut.',
            ap: 'Pistoletowa',
            ss: 'Specjalna'
        },
        rarity: {
            label: 'Występowanie',
            rare: 'Rzadkie'
        },
        item: {
            docTitle: 'Armory | {{item}}',
            title: 'Zbrojownia | {{item}}',
            not_in_version: 'Nie jest dostępny w tej wersji',
            usage: 'Używany (aktywny w profilu)',
            owners: 'Posiadacze (posiadają w ekwipunku)',
            'owners-desc': 'Liczba właścicieli gromadzi się ze statystyk meczu. Baza danych aktualizuje się co 30 minut na podstawie profili graczy',
            fire_queue_types: {
                '-1': 'Auto',
                '1': 'Pojedynczy',
                '2': 'Podwójny',
                '3': 'Seria',
                label: 'Tryby strzału'
            },
            params: {
                weapon: 'Parametry',
                grenade: 'Parametry',
                drugs: 'Parametry',
                ammo: 'Parametry',
                armor: 'Parametry',
                trap: 'Parametry'
            },
            is_premium: 'Premium',
            yes: 'Tak',
            no: 'Nie',
            drop_weight: 'Szansa zdobycia',
            base_rarity_level: 'Rzadkość',
            item_level: 'Poziom przedmiotu',
            match_making_level: 'Poziom matchmakingu',
            faction: 'Frakcja',
            weight: 'Waga',
            kg: 'kg.',
            bullet_damage: 'Obrażenia',
            bullet_pierce: 'Penetracja',
            rounds_per_minute: 'Strzały na minutę',
            magazine_capacity: 'Pojemność magazynka',
            bleeding_damage: 'Obrażenia od krwawienia',
            bleeding_chance: 'Szansa krwawienia',
            stamina_damage: 'Obrażenia wytrzymałości',
            stopping_power: 'Moc obalająca',
            material_pierce: 'Przebicie powierzchni',
            max_distance_power: 'Moc maxymalnego zasięgu',
            max_damage_distance: 'Dystans maksymalnych obrażeń',
            min_damage_distance: 'Dystans minimalnych obrażeń',
            meter: 'm.',
            min_damage_mult: 'Modyfikator obrażeń',
            brief_recoil: 'Odrzut',
            aim_zoom_factor: 'Przybliżenie fabryczne',
            match_participation_cost: 'Koszt eksploatacji',
            hip_modifier: 'Mod. strzału z biodra',
            base_dispersion: 'Rozrzut',
            dispersion_modifier: 'Mod. rozrzutu',
            unmasking_radius: 'Promień zdemaskowania',
            reliability: 'Niezawodność',
            aim_time: 'Czas celowania',
            sec: 'sek',
            ms: 'ms.',
            aim_time_modifier: 'Mod. czasu celowania',
            reload_time: 'Przeładowanie',
            reload_speed_modifier: 'Mod. przełoadowania',
            show_time: 'Wyciąganie',
            hide_time: 'Chowanie',
            degrade_per_death: 'Wsp. śmierci',
            tactical_reload_time: 'Przeładowanie taktyczne',
            experience_bonus_modifier: 'Mod. doświadczenia',
            money_bonus_modifier: 'Mod. srebra',
            reputation_bonus_modifier: 'Mod. reputacji',
            unknown_mods_count: 'Nieznana modyfikacja',
            details_to_craft: 'Elementy do ulepszenia',
            recoil: 'Odrzut',
            aim_recoil: 'Odrzut z biodra',
            left: 'Lewo',
            top: 'Góra',
            right: 'Prawo',
            shots_to_change_direction: 'Strzały do zmiany kierunku',
            first_shoot_recoil_multiplier: 'Mod. pierwszego strzału',
            shake_time_scale: 'Skala czasu wstrząsu',
            shake_recoil: 'Odrzut wstrząsu',
            recoil_power: 'Siła odrzutu',
            compensation_proportional_gain: 'Compensation proportional gain',
            compensation_integral_gain: 'Compensation integral gain',
            compensation_derivational_gain: 'Compensation derivational gain',
            splash_min_damage: 'Min obrażenia',
            splash_max_damage: 'Max obrażenia',
            splash_radius: 'Promień rozrzutu',
            activation_time: 'Czas aktywacji',
            damage_protection: {
                title: 'Ochrona od obrażeń',
                ranged: 'Kule',
                radiation: 'Radiacja',
                blunt: 'Upadek',
                explosive: 'Eksplozje',
                stamina: 'Wytrzymałość',
                slash: 'Rozrzut',
                speed: 'Szybkość',
                bleeding: 'Krwawienie'
            },
            activity_time_sec: 'Czas aktywacji',
            heal_amount: 'Leczenie',
            damage_protection_health: 'Redukcja obrażeń',
            damage_protection_infection: 'Ochrona przed infekcją',
            activity_time_skill_influence: 'Wpływ umj. na czas działania',
            removes_bleeding: 'Tamowanie krwawienia',
            influences: {
                title: 'Wpływy',
                left_hand: 'Lewa ręka',
                right_hand: 'Prawa ręka',
                left_leg: 'Lewa noga',
                right_leg: 'Prawa noga',
                hands: 'Ręce',
                legs: 'Nogi',
                head: 'Głowa',
                body: 'Ciało',
                health: 'Zdrowie'
            },
            damage: 'Obrażenia',
            arp: 'Penetracja',
            required_bags: 'Wymagane torby',
            clip_size: 'Poj. torby',
            clip_weight: 'Waga torby',
            pierce_dispersion_angle: 'Promień rozrzutu',
            dispersion: 'Rozrzut',
            ricochet_chance: 'Szansa rykoszetu',
            ricochet_angle: 'Kąt rykoszetu',
            ricochet_dispersion_angle: 'Kąt rozrzutu rykoszetu',
            muzzle_speed: 'Prędkość wylotowa',
            buck_shot: 'Śrut',
            buck_dispersion: 'Rozrzut śrutu',
            air_resistance: 'Opór powietrza',
            mass: 'Waga',
            k_power: 'Mod. obrażeń',
            k_max_distance_power: 'Mod. obrażeń max. zasięgu',
            distance: 'Zasięg',
            k_material_pierce: 'Mod. przebicia powierzchni',
            k_min_damage_distance: 'Mod. obrażeń min. zasięgu',
            k_max_damage_distance: 'Mod. obrażeń max. zasięgu',
            k_min_damage_mult: 'Mod. min. obrażeń',
            k_stamina_damage: 'Mod. obrażeń wytrzymałości',
            bleeding_chance_modifier: 'Mod. krwawienia',
            tracer: 'Smuga',
            gramm: 'g.',
            armor: 'Pancerz',
            bleeding_protection: 'Ochrona przed krwawieniem',
            hit_params: {
                brain: 'Mózg',
                face: 'Twarz',
                front: 'Przód',
                left_forearm: 'Lewe przedramie',
                back: 'Tył',
                right_forearm: 'Prawe przedramie',
                left_hip: 'Lewe biodro',
                right_hip: 'Prawe biodro',
                left_arm: 'Lewa ręka',
                right_arm: 'Prawa ręka',
                left_foot: 'Lewa stopa',
                right_foot: 'Prawa stopa',
                title: 'Trafienie celu'

            },
            explosion: 'Eksplozja',
            ano_armor: 'Ochrona przed anomaliami',
            explosion_armor: 'Ochrona przed eksplozją',
            speed_armor: 'Mod. szybkości pancerza',
            repair_cost_ratio: 'Koszt naprawy',
            bleeding_resistance: 'Ochrona przed krwawieniem',
            stamina_armor: 'Mod. wytrzymałości pancerza',
            camo_available: 'Kamuflarz dostępny',
            decal_available: 'Naszywka dostępna',
            chamber_a_round_time: 'Czas wprowadzania naboju do komory',
            explode_on_trigger_item: 'Zdalna eksplozja',
            defuse_time: 'Czas rozbrajania',
            scanner_detectable: 'Wykrywanie skanerem',
            delay_activation_ms: 'Opóźnienie aktywacji'
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
        show: 'Pokaż ekwipunek',
        hide: 'Schowaj ekwipunek'
    },
    months: {
        jan: 'sty',
        feb: 'lut',
        mar: 'mar',
        apr: 'kwi',
        may: 'maj',
        jun: 'cze',
        jul: 'lip',
        aug: 'sie',
        sep: 'wrz',
        oct: 'paź',
        nov: 'lis',
        dec: 'gru'
    },
    dates: {
        y: 'r.',
        m: 'mie.',
        d: 'd.',
        h: 'g.',
        mm: 'm.'
    },
    advert: {
        title: 'Reklamy',
        preloader: 'Ładowanie reklamy...',
        adblock: 'Proszę wyłączyć AdBlocka'
    },
    lang: {
        ru: 'Russian',
        en: 'English'
    },
    pve: {
        docTitle: 'Karty schowek PVE',
        docDescription: 'lokalizacja skrzynek na mapie Survarium PVE',
        title: 'PVE',
        missions:  'Misji',
        stage: 'Etap',
        map: 'Mapa',
        owenGuide: 'Przewodnik PVE autorstwa gracza Owens'
    },
    factions: {
        scavengers: 'Scavengers',
        blackMarket: 'Black Market',
        renaissance: 'The Renaissance Army',
        edge: 'The Fringe Settlers'
    },
    factionChallenge: {
        title: 'Faction Challenge',
        schedule: 'Faction Challenge Battles Schedule',
        all: 'All',
        future: 'Oncoming'
    },
    twitter: {
        title: 'Oficjalny Twitter ',
    },
    video: {
        title: 'Wybrane filmy z Survarium',
        question: 'Videos change randomly on refresh',
        message: 'Chcesz dodać tutaj film? Skontaktuj się z t0FF na discord.gg/survarium',
    }
};

export { dict }
export default dict
