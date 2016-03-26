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
    details     : 'Details',
    actions     : 'Actions',
    progress    : 'Progress',
    established : 'Established date',
    exp         : 'Experience',
    looses      : 'Looses',
    profile     : 'Profile',
    ammunition  : 'Ammunition',
    active      : 'Active',
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
    elo: 'ELO',
    players: {
        docTitle: 'Players',
        title: 'Players',
        list: 'Players list',
        search: {
            docTitle: 'Player search',
            title: 'Player search'
        },
        top: {
            title: 'Top players of last hour'
        }
    },
    teamgroup: `Team {{tag}}`,
    matches: {
        list: 'Matches',
        cw: {
            title: 'Clanwars',
            clan1: { title: 'Clan 1', score: 'Score 1' },
            clan2: { title: 'Clan 2', score: 'Score 2' },
            winner: 'Winner'
        },
        search: {
            title: 'Search',
            docTitle: 'Match search'
        },
        match: {
            docTitle: 'Match | {{id}}'
        },
        timeline: {
            title: 'Matches count of latest 24h',
            totals: 'Summary'
        }
    },
    clans: {
        title: 'Clans',
        docTitle: 'Clans',
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
            docTitle: 'Clan search'
        }
    },
    loading: 'Loading...',
    modes: {
        'Team Deathmatch': 'TDM',
        'Last Stand': 'DM',
        'Research': 'Research',
        'Battery retrieval': 'Batteries'
    },
    maps: {
        'Chemical Plant': 'Chemical Plant',
        'Vector Laboratory': 'Vector Lab',
        'Rudnya': 'Rudnya',
        'Tarakanovsky Fort': 'Fort',
        'Vostok Radar Station': 'Radar',
        'Cologne Bridge': 'Cologne',
        'School': 'School',
        'London': 'London',
        'Mamayev Kurgan': 'Kurgan'

    },
    dataGrid: {
        counter: 'Showing {{from}} to {{to}} of {{total}} entries'
    },
    streams: {
        title: 'Streams',
        docTitle: 'Streams | {{service}}',
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
            telegram: 'Also you can receive developer messages to your pocket device via '
        }
    },
    home: {
        title: 'pro'
    },
    about: {
        docTitle: 'About',
        title: 'About',
        telegram: 'Project channel',
        vk: 'Feedback',
        developer: 'Fan-site developer',
        text: 'Fan-site with matches, players and clans statistic. Statistic on this site counting from January 2016.'
    }
};

export { dict }
export default dict
