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
        }
    },
    ammunition: {
        show: 'Показати інвентар',
        hide: 'Приховати інвентар'
    }
};

export { dict }
export default dict
