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
    profile      : 'Профиль',
    ammunition   : 'Аммуниция',
    active       : 'Активный',
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
    total        : 'Всего',
    lastUpdate   : 'Обновлено',
    noData       : 'Нет данных',
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
            title: 'Уникальных игроков за последние сутки'
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
        'cheater': 'Читер (бан)'
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
    }
};

export { dict }
export default dict
