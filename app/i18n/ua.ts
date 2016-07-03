let dict = {
    id: 'ID',
    date: 'Дата',
    abbr: 'Тег клану',
    find: 'Знайти',
    level: 'Рівень',
    lvl: 'Рів.',
    replay: 'Реплей',
    download: 'Завантажити',
    duration: 'Тривалість',
    nickname: 'Нікнейм',
    time_start: 'Час початку',
    any: 'Будь-який',
    win: 'Перемога',
    wins: 'Перемог',
    map: 'Мапа',
    match: 'Матч',
    mode: 'Режим',
    loose: 'Поразка',
    score: 'Рахунок',
    kills: 'Вбивств',
    dies: 'Смертей',
    kd: 'В/С',
    player: 'Ім’я',
    team: 'Команда',
    members: 'Учасники',
    CWmatches: 'Кланові матчі',
    clanwar: 'Кланові війни',
    opponent: 'Супротивник',
    role: 'Роль',
    rating: 'Рейтинг',
    winrate: 'Вінрейт',
    avgScore: 'Сер. рахунок',
    victories: 'Перемог',
    totalMatches: 'Усього матчів',
    matchesCount : 'Матчів',
    actions: 'Дії',
    details: 'Деталі',
    progress: 'Прогрес',
    established: 'Дата заснування',
    exp: 'Досвід',
    looses: 'Поразок',
    all          : 'Все',
    lastUpdate: 'Оновлено',
    wide: 'Глибокий',
    roles: {
        commander: 'Командир',
        warlord: 'Сержант',
        assistant: 'Заст. командира',
        soldier: 'Солдат'
    },
    headshots: 'Хедшоти',
    grenadeKills: 'Вбивств гранатами',
    meleeKills: 'Вбивств прикладом',
    artefactKills: 'Вбивств артефактами',
    pointCaptures: 'Точок захоплено',
    boxesBringed: 'Принесено батарей',
    artefactUses: 'Використано артефактів',
    elo: 'ELO',
    total: 'Усього',
    noData: 'Немає даних',
    players: {
        docTitle: 'Гравці',
        docDescription: 'Список гравців survarium. Фільтри, прогрес, деталі, матчі, результати, інформація про клан.',
        docDescriptionOne: 'Статистика гравця {{nickname}} гри survarium. Прогрес, деталі, матчі, результати, інформація про клан.',
        title: 'Гравці',
        list: 'Перелік гравців',
        search: {
            docTitle: 'Пошук гравця',
            title: 'Пошук гравця',
            docDescription: 'Пошук гравця survarium. Прогрес, деталі, матчі, результати, інформація про клан.',
        },
        top: {
            title: 'Топ гравців за',
            hour: 'останню годину',
            day: 'останню добу'
        },
        unique: {
            title: 'Унікальних гравців за останню добу'
        },
        detail: 'Статистика гравця в survarium',
        history: {
            matches: 'Матчі',
            ranges: 'Діапазон',
            range: {
                day: 'День',
                week: 'Тиждень',
                month: 'Місяці'
            },
            groups: 'Значення',
            group: {
                avg: 'Середні',
                sum: 'Суми'
            }
        }
    },
    teamgroup: `Команда {{tag}}`,
    matches: {
        list: 'Матчі',
        docDescription: 'Список матчів гри survarium. Карта, режим, рівень.',
        cw: {
            title: 'Кланові бої',
            docDescription: 'Список кланових боїв гри survarium. Підсвічування клану–переможця, карта, режим, результати.',
            clan1: {title: 'Клан 1', score: 'Рахунок 1'},
            clan2: {title: 'Клан 2', score: 'Рахунок 2'},
            winner: 'Переможець'
        },
        search: {
            title: 'Пошук',
            docTitle: 'Пошук матчу',
            docDescription: 'Пошук статистики матчу в грі survarium.'
        },
        match: {
            docTitle: 'Матч | {{id}}',
            docDescription: 'Статистика матчу {{id}} гри survarium. Результати, карта, режим, список гравців і їх показники, скачати реплей.'
        },
        timeline: {
            title: 'Кількість матчів за останню добу'
        }
    },
    clans: {
        title: 'Клани',
        docTitle: 'Клани',
        docDescription: 'Список кланів гри survarium. Результати за фрагам, очками, винрейту.',
        docDescriptionOne: 'Статистика клану {{abbr}} гри survarium. Склад клану, матчі, кланвары.',
        one: 'Клан',
        list: 'Перелік кланів',
        listCWDescription: 'Показано топ кланів, <strong>які приймають участь у кланових війнах</strong>',
        listDescription: 'Показано топ кланів на основі <strong>публічних</strong> боїв',
        detailDescription: 'Паблік',
        detailCWDescription: 'CW',
        publicMatches: 'Публічні матчі',
        clanwars: 'Кланові війни',
        abbr: 'Абревіатура клану',
        search: {
            title: 'Пошук',
            docTitle: 'Пошук клану',
            docDescription: 'Пошук клану в грі survarium.'
        },
        detail: 'Статистика клану survarium'
    },
    loading: 'Завантаження...',
    modes: {
        'Командный бой': 'TDM',
        'Последний герой': 'DM',
        'Исследование': 'Дослід',
        'Защитное устройство': 'Батареї',
        'Охота за артефактом': 'Артефакт',
        full: {
            'Командный бой': 'Командний бій',
            'Последний герой': 'Останній герой',
            'Исследование': 'Дослідження',
            'Защитное устройство': 'Збір батарей'
        }
    },
    maps: {
        'Химзавод': 'Хімзавод',
        'Лаборатория Вектор': 'Вектор',
        'Рудня': 'Рудня',
        'Таракановский форт': 'Форт',
        'РЛС Восток': 'РЛС',
        'Кельн': 'Кельн',
        'Школа': 'Школа',
        'Лондон': 'Лондон',
        'Мамаев курган': 'Курган',
        full: {
            'Химзавод': 'Хімзавод',
            'Лаборатория Вектор': 'Лабораторія Вектор',
            'Рудня': 'Рудня',
            'Таракановский форт': 'Тараканівський форт',
            'РЛС Восток': 'РЛС',
            'Кельн': 'Кельн',
            'Школа': 'Школа',
            'Лондон': 'Лондон',
            'Мамаев курган': 'Мамаїв курган'
        }
    },
    dataGrid: {
        counter: 'Показано з {{from}} до {{to}} із {{total}} записів',
        counterFiltered: 'Показано з {{from}} до {{to}} із {{filtered}} записів (усього {{total}})',
        filters: {
            title: 'Фільтри',
            apply: 'Знайти'
        },
        filter: {
            title: 'Фільтр',
            add: 'Додати',
            fromTo: 'Діапазон',
            equal: 'Одно',
            from: 'Від',
            to: 'До'
        },
        limits: {
            title: 'Показувати по'
        }
    },
    streams: {
        title: 'Стріми',
        docTitle: 'Стріми | {{service}}',
        docDescription: 'Стріми з гри survarium на сервісі {{service}}. Live стріми і запису.',
        live: 'LIVE',
        archive: 'Нещодавні стріми',
        viewers: 'Дивляться: {{count}}',
        none: 'Немає активних трансляцій',
        size: {
            title: 'Розмір',
            medium: 'Середній',
            large: 'Великий'
        }
    },
    info: {
        title: 'Інфо',
        messages: {
            title: 'Повідомлення розробників',
            telegram: 'Також ви можете отримувати повідомлення про відповіді розробників на свій мобільний пристрій за допомогою:',
            docDescription: 'Повідомлення розробників з форуму гри survarium: Dima, Yava, Dargalon, Phantom, joewillburn та інших.',
            banlist: 'Список банов'
        }
    },
    home: {
        title: 'pro',
        docDescription: 'Топ гравців survarium за останні добу, кількість унікальних гравців, розподіл рівнів матчів.'
    },
    about: {
        docTitle: 'Про сайт',
        docDescription: 'Інформація про розробника сайту survarium, подяки спільноти survarium, зворотній зв\'язок.',
        title: 'Про сайт',
        telegram: 'Канал проекту',
        vk: 'Зворотній зв’язок',
        developer: 'Розробник фан-сайту',
        text: 'Фан-сайт зі статистикою матчів, кланів та гравців. Статистика на цьому сайті збирається з січня 2016 року. ',
        thanks: {
            title: 'Подяка за переклад сайту'
        }
    },
    badges: {
        'svpro-developer': 'Розробник survarium.pro',
        'cheater': 'Читер (бан)',
        premium: 'Premium'
    },
    discord: {
        description: 'Сервіс Discord представляє функціонал, аналогічний skype, teamspeak, raidcall, slack. У ньому є тектовые і голосові канали, причому – безкоштовно!'
    },
    bans: {
        title: 'Баны читеров',
        docDescription: 'Список читеров survarium, с указанием уровня и клана.'
    },
    'also-known': {
        title: 'Також відомий як',
        until: 'до'
    },
    till: {
        next: 'До наступного рівня',
        last: 'До 100 рівня'
    },
    skills: {
        hide: 'Приховати вміння',
        show: 'Показати вміння',
        branches: {
            shooting: 'Стрілецькі',
            physical: 'Фізичні',
            anomaly: 'Знання світу'
        },
        type: {
            percent: '%',
            kg: 'кг',
            seconds: 'сек.'
        }
    },
    armory: {
        title: 'Оружейная',
        docTitle: 'Оружейная',
        docDescription: 'Оружие, броня и экипировка игры survarium.',
        versions: {
            label: 'Версия'
        },
        types: {
            label: 'Тип',
            subtype: 'Раздел',
            weapons: 'Оружие',
            armor: 'Броня',
            ammo: 'Боеприпасы',
            grenade: 'Гранаты',
            trap: 'Ловушки',
            drugs: 'Медикаменты',
            assault: 'Автоматы',
            sniper: 'Винтовки',
            shotgun: 'Дробовики',
            smg: 'SMG',
            heavy: 'Пулеметы',
            pistol: 'Пистолеты',
            helmet: 'Шлемы',
            mask: 'Маски',
            tors: 'Жилеты',
            back: 'Рюкзаки',
            legs: 'Штаны',
            hand: 'Перчатки',
            boot: 'Ботинки',
            heavy_ammo: 'Тяж.',
            dmr: 'Винт.',
            buck: 'Дробь',
            ap: 'ББ',
            ss: 'Спец.'
        },
        rarity: {
            label: 'Рідкісність',
            rare: 'Рідкісні'
        },
        item: {
            docTitle: 'Оружейная | {{item}}',
            title: 'Оружейная | {{item}}',
            usage: 'Используют',
            fire_queue_types: {
                '-1': 'Авто',
                '1': 'Одиноч.',
                '2': 'Дубль',
                '3': 'Очередь',
                label: 'Режимы огня'
            },
            params: {
                weapon: 'Характеристики оружия',
                grenade: 'Характеристики гранаты',
                drugs: 'Характеристики медикамента',
                ammo: 'Характеристики патрона'
            },
            is_premium: 'Премиум',
            yes: 'Да',
            no: 'Нет',
            drop_weight: 'Шанс дропа',
            base_rarity_level: 'Редкость',
            item_level: 'Уровень предмета',
            match_making_level: 'Уровень матча',
            faction: 'Группировка',
            weight: 'Вес',
            kg: 'кг.',
            bullet_damage: 'Урон',
            bullet_pierce: 'ББ',
            rounds_per_minute: 'Выстрелов в мин.',
            magazine_capacity: 'Ёмкость магазина',
            bleeding_damage: 'Урон кровотечением',
            bleeding_chance: 'Шанс кровотечения',
            stamina_damage: 'Урон выносливости',
            stopping_power: 'Останавливающая сила',
            material_pierce: 'Пробитие',
            max_distance_power: 'Мощность на макс. дистанции',
            max_damage_distance: 'Дист. макс. урона',
            min_damage_distance: 'Дист. мин. урона',
            meter: 'м.',
            min_damage_mult: 'Множитель мин. урона',
            brief_recoil: 'Отдача',
            aim_zoom_factor: 'Приближение',
            match_participation_cost: 'Стоимость участия в матче',
            hip_modifier: 'hip_modifier',
            base_dispersion: 'Разброс',
            dispersion_modifier: 'Мод. разброса',
            unmasking_radius: 'Радиус обнаружения',
            reliability: 'Удобство',
            aim_time: 'Время прицеливания',
            sec:  'сек.',
            aim_time_modifier: 'Мод. прицеливания',
            reload_time: 'Время перезарядки',
            reload_speed_modifier: 'Мод. перезарядки',
            show_time: 'Время готовности',
            hide_time: 'Время скрытия',
            degrade_per_death: 'degrade_per_death',
            tactical_reload_time: 'Тактич. перезарядка',
            experience_bonus_modifier: 'Бонус к опыту',
            money_bonus_modifier: 'Бонус к деньгам',
            reputation_bonus_modifier: 'Бонус к репутации',
            unknown_mods_count: 'Случайных модификаторов',
            details_to_craft: 'Деталей для улучшения',
            recoil: 'Отдача',
            aim_recoil: 'В прицеливании',
            left: 'Влево',
            top: 'Вверх',
            right: 'Вправо',
            shots_to_change_direction: 'Выстрелов для смены направления',
            first_shoot_recoil_multiplier: 'Множ. первого выстрела',
            shake_time_scale: 'shake_time_scale',
            shake_recoil: 'shake_recoil',
            recoil_power: 'Сила отдачи',
            compensation_proportional_gain: 'compensation_proportional_gain',
            compensation_integral_gain: 'compensation_integral_gain',
            compensation_derivational_gain: 'compensation_derivational_gain',
            splash_min_damage: 'Мин урон',
            splash_max_damage: 'Макс урон',
            splash_radius: 'Радиус урона',
            activation_time: 'Задержка применения',
            damage_protection: {
                title: 'Защита',
                ranged: 'Пули',
                radiation: 'Радиация'
            },
            activity_time_sec: 'Время лечения',
            heal_amount: 'Лечение',
            damage_protection_health: 'Защита от урона здоровью',
            damage_protection_infection: 'Защита от инфекции',
            activity_time_skill_influence: 'Activity time skill influence',
            removes_bleeding: 'Заживляет кровотечение',
            influences: {
                title: 'Влияние',
                left_hand: 'Левая рука',
                right_hand: 'Правая рука',
                left_leg: 'Левая нога',
                right_leg: 'Правая нога',
                head: 'Голова',
                body: 'Туловище',
                health: 'Здоровье'
            },
            damage: 'Урон',
            arp: 'ББ',
            required_bags: 'Требуется карманов',
            clip_size: 'Размер магазина',
            clip_weight: 'Вес магазина',
            pierce_dispersion_angle: 'Угол разброса пробития',
            dispersion: 'Разброс',
            ricochet_chance: 'Вероятность рикошета',
            ricochet_angle: 'Угол рикошета',
            ricochet_dispersion_angle: 'Угол рикошета пробития',
            muzzle_speed: 'Muzzle speed',
            buck_shot: 'Картечь',
            buck_dispersion: 'Разброс картечи',
            air_resistance: 'Сопротивление воздуха',
            mass: 'Масса',
            distance: 'Дистанция',
            bleeding_chance_modifier: 'Мод. шанса кровотечения',
            tracer: 'Трассирующая',
            gramm: 'г.',
            k_power: 'Множ. мощности',
            k_max_distance_power: 'Множ. урона на макс. дистанции',
            k_material_pierce: 'Множ. пробития',
            k_min_damage_distance: 'Множ. дистанции мин. урона',
            k_max_damage_distance: 'Множ. дистанции макс. урона',
            k_min_damage_mult: 'Множ. мин. урона',
            k_stamina_damage: 'Множ. урона выносливости'
        }
    },
    ammunition: {
        show: 'Показати інвентар',
        hide: 'Приховати інвентар'
    },
    months: {
        jan: 'сiч',
        feb: 'лют',
        mar: 'бер',
        apr: 'квiт',
        may: 'трав',
        jun: 'черв',
        jul: 'лип',
        aug: 'серп',
        sep: 'вер',
        oct: 'жовт',
        nov: 'лист',
        dec: 'груд'
    }
};

export { dict }
export default dict
