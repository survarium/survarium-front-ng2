let dict = {
    id           : 'ID',
    date         : 'Дата',
    abbr         : 'Тег клана',
    find         : 'Найти',
    level        : 'Уровень',
    lvl          : 'Ур.',
    replay       : 'Реплей',
    download     : 'Скачать',
    duration     : 'Продолжительность',
    nickname     : 'Никнейм',
    time_start   : 'Время начала',
    any          : 'Любой',
    win          : 'Победа',
    wins         : 'Побед',
    map          : 'Карта',
    match        : 'Матч',
    mode         : 'Режим',
    loose        : 'Проигрыш',
    score        : 'Счет',
    kills        : 'Убийств',
    dies         : 'Смертей',
    kd           : 'У/С',
    player       : 'Имя',
    team         : 'Команда',
    members      : 'Участники',
    CWmatches    : 'Клановые матчи',
    clanwar      : 'Clanwar',
    opponent     : 'Противник',
    role         : 'Роль',
    rating       : 'Рейтинг',
    random_match_elo: 'ELO (рандом)',
    rating_match_elo: 'ELO (рейтинг)',
    random_match_elo_title: 'Рейтинг игрока при участии в рандомных боях',
    rating_match_elo_title: 'Рейтинг игрока при участии в рейтинговых боях (лигах)',
    winrate      : 'Винрейт',
    avgScore     : 'Ср.счет',
    victories    : 'Побед',
    totalMatches : 'Всего матчей',
    matchesCount : 'Матчей',
    actions      : 'Действия',
    details      : 'Детали',
    progress     : 'Прогресс',
    established  : 'Дата основания',
    exp          : 'Опыт',
    looses       : 'Поражений',
    all          : 'Все',
    wide         : 'Расширенный',
    roles        : {
        commander: 'Командир',
        warlord  : 'Сержант',
        assistant: 'Зам. командира',
        soldier  : 'Солдат'
    },
    headshots    : 'Хедшоты',
    grenadeKills : 'Убийств гранатами',
    meleeKills   : 'Убийств прикладом',
    artefactKills: 'Убийств артефактами',
    pointCaptures: 'Точек захвачено',
    boxesBringed : 'Принесено ящиков',
    artefactUses : 'Использовано артефактов',
    elo          : 'ELO',
    wastedTime   : 'Времени в матчах',
    time         : 'Время',
    total        : 'Всего',
    lastUpdate   : 'Обновлено',
    noData       : 'Нет данных',
    banned       : 'Банов',
    players: {
        docTitle: 'Игроки',
        docDescription: 'Список игроков survarium. Фильтры, прогресс, детали, матчи, результаты, информация о клане.',
        docDescriptionOne: 'Статистика игрока {{nickname}} в игре survarium. Прогресс, детали, матчи, результаты, информация о клане.',
        title: 'Игроки',
        list: 'Список игроков',
        search: {
            docTitle: 'Поиск игрока',
            docDescription: 'Поиск игрока survarium. Прогресс, детали, матчи, результаты, информация о клане.',
            title: 'Поиск игрока'
        },
        top: {
            title: 'Топ игроков за',
            hour: 'последний час',
            day: 'последние сутки'
        },
        unique: {
            title: 'Уникальных игроков за',
            hour: 'последний час',
            day: 'последние сутки',
            half: 'полчаса'
        },
        detail: 'Статистика игрока в survarium',
        history: {
            matches: 'Матчи',
            ranges: 'Диапазон',
            range: {
                day: 'День',
                week: 'Неделя',
                month: 'Месяцы'
            },
            groups: 'Значения',
            group: {
                avg: 'Средние',
                sum: 'Суммы'
            }
        }
    },
    teamgroup: `Команда {{tag}}`,
    matches: {
        list: 'Матчи',
        docDescription: 'Список матчей игры survarium. Карта, режим, уровень.',
        cw: {
            title: 'Клановые бои',
            docDescription: 'Список клановых боев игры survarium. Подсветка клана–победителя, карта, режим, результаты.',
            clan1: { title: 'Клан 1', score: 'Счет 1' },
            clan2: { title: 'Клан 2', score: 'Счет 2' },
            winner: 'Победитель'
        },
        search: {
            title: 'Поиск',
            docTitle: 'Поиск матча',
            docDescription: 'Поиск статистики матча в игре survarium.'
        },
        match: {
            docTitle: 'Матч | {{id}}',
            docDescription: 'Статистика матча {{id}} игры survarium. Результаты, карта, режим, список игроков и их показатели, скачать реплей.'
        },
        timeline: {
            title: 'Количество матчей за последние сутки'
        }
    },
    clans: {
        title: 'Кланы',
        docTitle: 'Кланы',
        docDescription: 'Список кланов игры survarium. Результаты по фрагам, очкам, винрейту.',
        docDescriptionOne: 'Статистика клана {{abbr}} в игре survarium. Состав клана, статистика, матчи, кланвары.',
        one: 'Клан',
        list: 'Список кланов',
        listCWDescription: 'Показан топ кланов, <strong>участвующих в CW</strong>',
        listDescription: 'Показан <strong>паблик</strong> топ кланов',
        detailDescription: 'Паблик',
        detailCWDescription: 'CW',
        publicMatches: 'Матчи в паблике',
        clanwars: 'Clanwars',
        abbr: 'Аббревиатура клана',
        search: {
            title: 'Поиск',
            docTitle: 'Поиск клана',
            docDescription: 'Поиск клана в игре survarium.'
        },
        detail: 'Статистика клана survarium'
    },
    loading: 'Загрузка...',
    modes: {
        'Командный бой': 'TDM',
        'Последний герой': 'DM',
        'Исследование': 'Захват',
        'Защитное устройство': 'Ящики',
        'Охота за артефактом': 'Артефакт'
    },
    maps: {
        'Химзавод': 'Химзавод',
        'Лаборатория Вектор': 'Вектор',
        'Рудня': 'Рудня',
        'Таракановский форт': 'Форт',
        'РЛС Восток': 'РЛС',
        'Кельн': 'Кельн',
        'Школа': 'Школа',
        'Лондон': 'Лондон',
        'Мамаев курган': 'Курган'
    },
    dataGrid: {
        counter: 'Показано с {{from}} по {{to}} из {{total}} записей',
        counterFiltered: 'Показано с {{from}} по {{to}} из {{filtered}} записей (всего {{total}})',
        filters: {
            title: 'Фильтры',
            apply: 'Найти'
        },
        filter: {
            title: 'Фильтр',
            add: 'Добавить',
            fromTo: 'Диапазон',
            equal: 'Равно',
            from: 'От',
            to: 'До'
        },
        limits: {
            title: 'Показывать по'
        }
    },
    streams: {
        title: 'Стримы',
        docTitle: 'Стримы | {{service}}',
        docDescription: 'Стримы по игре survarium на сервисе {{service}}. Live стримы и записи.',
        live: 'LIVE',
        archive: 'Недавние стримы',
        viewers: 'Смотрят: {{count}}',
        none: 'Нет активных трансляций',
        size: {
            title: 'Размер',
            medium: 'Средний',
            large: 'Большой'
        }
    },
    info: {
        title: 'Инфо',
        messages: {
            title: 'Сообщения разработчиков',
            telegram: 'Также Вы можете получать уведомления об ответах разработчиков на свое мобильное устройство через ',
            docDescription: 'Сообщения разработчиков с форума игры survarium: Dima, Yava, Dargalon, Phantom, joewillburn и других.',
            banlist: 'Список банов'
        }
    },
    home: {
        title: 'pro',
        docDescription: 'Топ игроков survarium за последние сутки, количество уникальных игроков, распределение уровней матчей.'
    },
    about: {
        docTitle: 'О сайте',
        docDescription: 'Информация о разработчике сайта survarium, благодарности сообществу survarium, обратная связь.',
        title: 'О сайте',
        telegram: 'Канал проекта',
        vk: 'Обратная связь',
        developer: 'Разработчик фан-сайта',
        text: 'Фан-сайт со статистикой матчей, кланов и игроков. Статистика на этом сайте считается с января 2016 года. ',
        thanks: {
            title: 'Благодарность'
        }
    },
    badges: {
        'svpro-developer': 'Разработчик survarium.pro',
        'cheater': 'Читер (бан)',
        premium: 'Премиум'
    },
    discord: {
        description: 'Сервис Discord представляет функционал, аналогичный skype, teamspeak, raidcall, slack. В нем есть тектовые и голосовые каналы, причем – бесплатно!'
    },
    bans: {
        title: 'Баны читеров',
        docDescription: 'Список читеров survarium, с указанием уровня и клана.'
    },
    'also-known': {
        title: 'Также известен как',
        until: 'до'
    },
    till: {
        next: 'До следующего уровня',
        last: 'До 100 уровня'
    },
    skills: {
        hide: 'Скрыть умения',
        show: 'Показать умения',
        branches: {
            shooting: 'Стрелковые',
            physical: 'Физические',
            anomaly: 'Знание мира'
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
            label: 'Редкость',
            rare: 'Редкие'
        },
        item: {
            docTitle: 'Оружейная | {{item}}',
            title: 'Оружейная | {{item}}',
            usage: 'Используют (сейчас в боевых профилях)',
            owners: 'Владеют (имеется в инвентаре)',
            'owners-desc': 'Данные о количестве владельцев предмета накапливаются при загрузке матчей, а данные об использовании предмета обновляются каждые полчаса из профилей игроков.',
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
                ammo: 'Характеристики патрона',
                armor: 'Характеристики брони'
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
                radiation: 'Радиация',
                blunt: 'Удар',
                explosive: 'Взрыв',
                stamina: 'Выносливость',
                slash: 'Порез',
                speed: 'Скорость',
                bleeding: 'Кровотечение'
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
                hands: 'Руки',
                legs: 'Ноги',
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
            k_stamina_damage: 'Множ. урона выносливости',
            armor: 'Защита',
            bleeding_protection: 'Защита от кровотечения',
            hit_params: {
                brain: 'Мозг',
                face: 'Лицо',
                front: 'Грудь',
                left_forearm: 'Левое предплечье',
                back: 'Спина',
                right_forearm: 'Правое предплечье',
                left_hip: 'Левое бедро',
                right_hip: 'Правое бедро',
                left_arm: 'Левая рука',
                right_arm: 'Правая рука',
                left_foot: 'Левая нога',
                right_foot: 'Правая нога',
                title: 'Зоны поражения'

            },
            ano_armor: 'Защита от аномалий',
            explosion_armor: 'Защита от взрыва',
            speed_armor: 'speed_armor',
            repair_cost_ratio: 'Коэффициент стоимости ремонта',
            bleeding_resistance: 'Сопротивление кровотечению',
            stamina_armor: 'stamina_armor',
            camo_available: 'Доступны камуфляжи',
            decal_available: 'Доступны декали'
        }
    },
    ammunition: {
        show: 'Показать инвентарь',
        hide: 'Скрыть инвентарь'
    },
    months: {
        jan: 'янв',
        feb: 'фев',
        mar: 'мар',
        apr: 'апр',
        may: 'май',
        jun: 'июн',
        jul: 'июл',
        aug: 'авг',
        sep: 'сен',
        oct: 'окт',
        nov: 'ноя',
        dec: 'дек'
    },
    dates: {
        y: 'г.',
        m: 'мес.',
        d: 'д.',
        h: 'ч.',
        mm: 'м.'
    },
    advert: {
        title: 'Реклама',
        preloader: 'Загрузка рекламы...',
        adblock: 'Выключите, пожалуйста, AdBlock'
    }
};

export { dict }
export default dict
