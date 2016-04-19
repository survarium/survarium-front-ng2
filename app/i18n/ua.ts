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
    actions: 'Дії',
    details: 'Деталі',
    progress: 'Прогрес',
    established: 'Дата заснування',
    exp: 'Досвід',
    looses: 'Поразок',
    profile: 'Профіль',
    ammunition: 'Амуніція',
    active: 'Активний',
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
    players: {
        docTitle: 'Гравці',
        title: 'Гравці',
        list: 'Перелік гравців',
        search: {
            docTitle: 'Пошук гравця',
            title: 'Пошук гравця'
        },
        top: {
            title: 'Топ гравців за останню годину'
        },
        unique: {
            title: 'Унікальних гравців за останню добу'
        },
        detail: 'Статистика гравця в survarium'
    },
    teamgroup: `Команда {{tag}}`,
    matches: {
        list: 'Матчі',
        cw: {
            title: 'Кланові бої',
            clan1: {title: 'Клан 1', score: 'Рахунок 1'},
            clan2: {title: 'Клан 2', score: 'Рахунок 2'},
            winner: 'Переможець'
        },
        search: {
            title: 'Пошук',
            docTitle: 'Пошук матчу'
        },
        match: {
            docTitle: 'Матч | {{id}}'
        },
        timeline: {
            title: 'Кількість матчів за останню добу',
            totals: 'Підсумок'
        }
    },
    clans: {
        title: 'Клани',
        docTitle: 'Клани',
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
            docTitle: 'Пошук клану'
        },
        detail: 'Статистика клану survarium'
    },
    loading: 'Завантаження...',
    modes: {
        'Командный бой': 'TDM',
        'Последний герой': 'DM',
        'Исследование': 'Дослід',
        'Защитное устройство': 'Батареї',
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
            telegram: 'Також ви можете отримувати повідомлення про відповіді розробників на свій мобільний пристрій за допомогою:'
        }
    },
    home: {
        title: 'pro'
    },
    about: {
        docTitle: 'Про сайт',
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
        'svpro-developer': 'Розробник survarium.pro'
    }
};

export { dict }
export default dict
