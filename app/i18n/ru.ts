let dict = {
    id           : 'ID',
    date         : 'Дата',
    abbr         : 'Тег клана',
    find         : 'Найти',
    level        : 'Уровень',
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
    players: {
        docTitle: 'Игроки',
        title: 'Игроки',
        list: 'Список игроков',
        search: {
            docTitle: 'Поиск игрока',
            title: 'Поиск игрока'
        }
    },
    teamgroup: `Команда {{tag}}`,
    matches: {
        list: 'Матчи',
        cw: {
            title: 'Клановые бои',
            clan1: { title: 'Клан 1', score: 'Счет 1' },
            clan2: { title: 'Клан 2', score: 'Счет 2' },
            winner: 'Победитель'
        },
        search: {
            title: 'Поиск',
            docTitle: 'Поиск матча'
        },
        match: {
            docTitle: 'Матч | {{id}}'
        }
    },
    clans: {
        title: 'Кланы',
        docTitle: 'Кланы',
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
            docTitle: 'Поиск клана'
        }
    },
    loading: 'Загрузка...',
    modes: {
        'Командный бой': 'TDM',
        'Последний герой': 'DM',
        'Исследование': 'Захват',
        'Защитное устройство': 'Ящики'
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
        counter: 'Показано с {{from}} по {{to}} из {{total}} записей'
    },
    streams: {
        title: 'Стримы',
        docTitle: 'Стримы | {{service}}',
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
            telegram: 'Также Вы можете получать уведомления об ответах разработчиков на свое мобильное устройство через '
        }
    }
};

export { dict }
export default dict
