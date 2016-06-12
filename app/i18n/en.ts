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
    profile     : 'Profile',
    ammunition  : 'Ammunition',
    active      : 'Active',
    total       : 'Total',
    lastUpdate  : 'Updated',
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
            title: 'Unique players of latest 24h'
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
        'cheater': 'Cheater (ban)'
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
    }
};

export { dict }
export default dict
