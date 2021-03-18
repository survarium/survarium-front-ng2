let dict = {
    id          : 'ID',
    date        : 'Fecha',
    abbr        : 'Abreviación del clan',
    find        : 'Encontrar',
    replay      : 'Repetición',
    download    : 'Descargar',
    time_start  : 'Hora de inicio',
    any         : 'Cualquiera',
    duration    : 'Duración',
    nickname    : 'Apodo',
    win         : 'Victoria',
    wins        : 'Victorias',
    map         : 'Mapa',
    match       : 'Partida',
    mode        : 'Modo',
    loose       : 'Derrota',
    level       : 'Nivel',
    lvl         : 'Nvl',
    score       : 'Puntuación',
    kills       : 'Bajas',
    dies        : 'Muertes',
    kd          : 'B/M',
    player      : 'Nombre',
    team        : 'Equipo',
    members     : 'Miembros',
    CWmatches   : 'Partidas de clanes',
    clanwar     : 'Guerra de clanes',
    opponent    : 'Oponente',
    role        : 'Rol',
    rating      : 'Partidas igualadas',
    winrate     : 'Ratio de victorias',
    avgScore    : 'Puntuación media',
    victories   : 'Victorias',
    totalMatches: 'Partidas totales',
    matchesCount: 'Partidas',
    details     : 'Detalles',
    actions     : 'Acciones',
    progress    : 'Progreso',
    established : 'Fecha de creación',
    exp         : 'Experiencia',
    looses      : 'Derrotas',
    all         : 'Todas',
    total       : 'Total',
    lastUpdate  : 'Actualizado',
    wide        : 'Wide',
    place       : 'Puesto',
    server      : 'Servidor',
    roles        : {
        commander: 'Comandante',
        warlord  : 'Sargento',
        assistant: 'Asistente',
        soldier  : 'Soldado'
    },
    headshots    : 'Tiros a la cabeza',
    grenadeKills : 'Bajas con granada',
    meleeKills   : 'Bajas cuerpo a cuerpo',
    artefactKills: 'Bajas con artefactos',
    pointCaptures: 'Puntos capturados',
    boxesBringed : 'Baterías recolectadas',
    artefactUses : 'Uso de artefactos',
    elo          : 'ELO',
    random_match_elo_title: 'Clasificación del jugador para partidas aleatorias',
    rating_match_elo_title: 'Clasificación del jugador para partidas igualadas (ligas)',
    wastedTime   : 'Tiempo en combate',
    time         : 'Duración',
    noData       : 'Sin datos',
    banned       : 'Baneos',
    players: {
        docTitle: 'Jugadores',
        docDescription: 'Lista de jugadores de Survarium. Filtros, progreso, detalles, partidas, resultados, información sobre clanes.',
        docDescriptionOne: 'Estadísticas de los jugadores de Survarium {{nickname}}. Progreso, detalles, partidas, resultados, información sobre clanes.',
        title: 'Jugadores',
        list: 'Lista de jugadores',
        search: {
            docTitle: 'Búsqueda de jugador',
            title: 'Búsqueda de jugador',
            docDescription: 'Búsqueda de jugadores de Suvarium. Progreso, detalles, partidas, resultados, información sobre clanes.',
        },
        top: {
            title: 'Mejores jugadores',
            hour: 'de la última hora',
            day: 'del último día'
        },
        unique: {
            title: 'Jugadores únicos de ',
            titleForDay: 'Jugadores únicos del ',
            hour: 'la última hora',
            week: 'la semana pasada',
            month: 'último mes',
            day: 'último día',
            half: 'los últimos 30 minutos'
        },
        detail: 'Estadísticas del jugador de Survarium',
        history: {
            matches: 'Partidas',
            ranges: 'Intervalo',
            range: {
                day: 'Día',
                week: 'Semana',
                month: 'Meses'
            },
            groups: 'Valores',
            group: {
                avg: 'Promedio',
                sum: 'Total'
            }
        }
    },
    teamgroup: `Equipo {{tag}}`,
    type: 'Tipo',
    matches: {
        list: 'Partidas',
        docDescription: 'Lista de las partidas de Survarium. Mapa, modo, nivel.',
        cw: {
            title: 'Guerras de clanes',
            docDescription: 'Lista de las guerras de clanes de Survarium. Winner highlighting, map, mode, level.',
            clan1: { title: 'Clan 1', score: 'Puntuación 1' },
            clan2: { title: 'Clan 2', score: 'Puntuación 2' },
            winner: 'Ganador'
        },
        search: {
            title: 'Búsqueda',
            docTitle: 'Búsqueda de partidas',
            docDescription: 'Búsqueda de estadísticas de las partidas de Survarium.'
        },
        match: {
            docTitle: 'Partida | {{id}}',
            // tslint:disable-next-line:max-line-length
            docDescription: 'Estadísticas de la partida {{id}} de Survarium. Resultados, mapa, modo, lista de jugadores y sus resultados, descarga de repeticiones.'
        },
        timeline: {
            title: 'Número de partidas de las últimas 24h'
        },
        rating: 'Partidas igualadas',
        random: 'PVP'
    },
    clans: {
        title: 'Clanes',
        docTitle: 'Clanes',
        docDescription: 'Lista de clanes de Survarium. Resultados ordenados por bajas, puntuación y ratio de victorias.',
        docDescriptionOne: 'Detalles del clan {{abbr}} de Survarium. Miembros del clan, estadísticas, guerras de clanes.',
        one: 'Clan',
        list: 'Lista de clanes',
        listCWDescription: 'Mostrando los mejores clanes basándose en <strong>estadísticas de guerras de clanes</strong>',
        listDescription: 'Mostrando los mejores clanes basándose en <strong>todas las partidas</strong>',
        detailDescription: 'Público',
        detailCWDescription: 'GC',
        publicMatches: 'Partidas públicas',
        clanwars: 'Guerras de clanes',
        abbr: 'Abreviación del clan',
        search: {
            title: 'Búsqueda',
            docTitle: 'Búsqueda de clanes',
            docDescription: 'Búsqueda de clanes de Survarium.'
        },
        detail: 'Estadísticas del clan de Survarium'
    },
    loading: 'Cargando...',
    modes: {
        'team deathmatch': 'Lucha a muerte en equipo',
        'research': 'Investigación',
        'battery retrieval': 'Baterías',
        'artifact hunt': 'Artefacto',
        'slaughter': 'Masacre',
        'pve': 'PVE',
        'search and destroy': 'Buscar y Destruir'
    },
    maps: {
        'chemical plant': 'Planta',
        'vector laboratory': 'Vector',
        'rudnya': 'Rudnya',
        'tarakanovsky fort': 'Fuerte',
        'vostok radar station': 'Radar',
        'cologne bridge': 'Colonia',
        'school': 'Escuela',
        'london': 'Londres',
        'mamayev kurgan': 'Kurgan',
        'pve': 'PVE',
        'cnpp cooling tower': 'Torre de refrigeración CNC',
        'duga radar station' : 'Estación de Radar "Duga"',
        'abandoned base': 'Base abandonada'
    },
    weather: {
        evening: 'Atardecer',
        day: 'Día',
        rain: 'Lluvia',
        prerain: 'Nublado',
        night: 'Noche'
    },
    dataGrid: {
        counter: 'Mostrando {{from}} a {{to}} de {{total}} resultados',
        counterFiltered: 'Mostrando {{from}} a {{to}} de {{filtered}} resultados (en total {{total}})',
        filters: {
            title: 'Filtros',
            apply: 'Encontrar'
        },
        filter: {
            title: 'Filtrar',
            add: 'Añadir',
            fromTo: 'Rango',
            equal: 'Igual',
            from: 'De',
            to: 'A'
        },
        limits: {
            title: 'Número de objetos'
        },
        pagination: {
            prev: 'Anterior',
            next: 'Siguiente'
        }
    },
    streams: {
        title: 'Retransmisiones',
        docTitle: 'Retransmisiones | {{service}}',
        docDescription: 'Retransmisiones de Survarium en {{service}}. Retransmisiones en directo y grabaciones.',
        live: 'EN DIRECTO',
        archive: 'Retransmisiones terminadas',
        viewers: 'Espectadores: {{count}}',
        none: 'No hay retransmisiones en directo',
        size: {
            title: 'Tamaño',
            medium: 'Medio',
            large: 'Grande'
        }
    },
    info: {
        title: 'Info',
        messages: {
            title: 'Mensajes de desarrolladores',
            telegram: 'También puedes recibir mensajes de los desarrolladores en tu dispositivo portátil a través de ',
            docDescription: 'Survarium developers messages on official forum: Dima, Yava, Dargalon, Fantom, joewillburn y otros.',
            banlist: 'Lista de baneos',
            lang: 'Foro'
        }
    },
    home: {
        title: 'pro',
        docDescription: 'Mejores jugadores de Survarium del último día, cantidad de jugadores únicos, distribución de niveles de partidas.'
    },
    about: {
        docTitle: 'Sobre',
        docDescription: 'Información sobre el desarrollador de Survarium.pro, survarium community gratitude, sugerencias.',
        title: 'Sobre',
        telegram: 'Canal del proyecto',
        vk: 'Sugerencias',
        developer: 'Desarrollador del fan-site',
        text: 'Fan-site con estadísticas de partidas, jugadores y clanes. Las estadísticas de esta página web empezaron a recolectarse en enero de 2016.',
        thanks: {
            title: 'Agradecimientos'
        }
    },
    badges: {
        'svpro-developer': 'desarrollador de survarium.pro',
        'cheater': 'Tramposo (baneado)',
        premium: 'Premium'
    },
    discord: {
        description: 'El servicio de Discord proporciona las mismas funcionalidades que Skype/Teamspeak/Raidcall. ¡Incluye canales de texto y de voz GRATIS!'
    },
    bans: {
        title: 'Listas de baneos',
        docDescription: 'Lista de tramposos de Survarium, con sus abreviaciones de clan y niveles.'
    },
    'also-known': {
        title: 'También conocido como',
        until: 'hasta'
    },
    till: {
        next: 'Hasta el siguiente nivel',
        last: 'Hasta el nivel 100'
    },
    skills: {
        hide: 'Ocultar habilidades',
        show: 'Mostrar habilidades',
        branches: {
            shooting: 'Armas de fuego',
            physical: 'Preparación física',
            anomaly: 'Conocimiento del Bosque'
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
        title: 'Armería',
        docTitle: 'Armería',
        docDescription: 'Armas, protección y equipamiento del juego de Survarium.',
        outdated: 'La información está obsoleta y solo se puede usar para propósitos históricos',
        versions: {
            label: 'Versión'
        },
        types: {
            label: 'Tipo',
            subtype: 'Rama',
            weapons: 'Armas',
            armor: 'Protección',
            ammo: 'Munición',
            grenade: 'Granadas',
            trap: 'Trampas',
            drugs: 'Medicamentos',
            assault: 'Rifles de asalto',
            sniper: 'Rifles de francotirador',
            shotgun: 'Escopetas',
            smg: 'Subfusiles',
            heavy: 'Ametralladoras',
            pistol: 'Pistolas',
            helmet: 'Cascos',
            mask: 'Máscaras',
            tors: 'Pecho',
            back: 'Mochilas',
            legs: 'Pantalones',
            hand: 'Guantes',
            boot: 'Botas',
            heavy_ammo: 'Pesado',
            dmr: 'Carabinas',
            buck: 'Perdigón',
            ap: 'AP',
            ss: 'SS'
        },
        rarity: {
            label: 'Rareza',
            rare: 'Único'
        },
        item: {
            docTitle: 'Armería | {{item}}',
            title: 'Armería | {{item}}',
            not_in_version: 'Este objeto no estaba en la versión',
            usage: 'Uso (activo en perfiles de los combates)',
            owners: 'Propietarios (lo tienen en el inventario)',
            // tslint:disable-next-line:max-line-length
            'owners-desc': 'El número de propietarios se acumula con la cantidad de partidas importadas. Los datos de uso se calculan cada 30 minutos basándose en los datos de los perfiles de los jugadores.',
            fire_queue_types: {
                '-1': 'Auto',
                '1': 'Único',
                '2': 'Doble',
                '3': 'Ráfaga',
                label: 'Modos de disparo'
            },
            params: {
                weapon: 'Parámetros del arma',
                grenade: 'Parámetros de granadas',
                drugs: 'Parámetros de medicamentos',
                ammo: 'Parámetros de munición',
                armor: 'Parámetros de protección',
                trap: 'Parámetros de trampas'
            },
            is_premium: 'Premium',
            yes: 'Sí',
            no: 'No',
            drop_weight: 'Probabilidad de caer',
            base_rarity_level: 'Rareza base',
            item_level: 'Grado del objeto',
            match_making_level: 'Nivel de la partida',
            faction: 'Facción',
            weight: 'Peso',
            kg: 'kg.',
            bullet_damage: 'Daño',
            bullet_pierce: 'Perforación',
            rounds_per_minute: 'Cadencia de tiro',
            magazine_capacity: 'Capacidad del cargador',
            bleeding_damage: 'Daño de sangrado',
            bleeding_chance: 'Probabilidad de sangrado',
            stamina_damage: 'Daño de aguante',
            stopping_power: 'Poder de detención',
            material_pierce: 'Penetración de material',
            max_distance_power: 'Poder en alcance máximo',
            max_damage_distance: 'Alcance de daño máximo',
            min_damage_distance: 'Alcance de daño mínimo',
            meter: 'm.',
            min_damage_mult: 'Multiplicador de daño mínimo',
            brief_recoil: 'Retroceso',
            aim_zoom_factor: 'Factor de aumento',
            match_participation_cost: 'Coste de participación de partida',
            hip_modifier: 'Modificador desde la cadera',
            base_dispersion: 'Dispersión',
            dispersion_modifier: 'Modificador de dispersión',
            unmasking_radius: 'Radio de desenmascarado',
            reliability: 'Fiabilidad',
            aim_time: 'Tiempo de apuntado',
            sec: 'seg',
            ms: 'ms.',
            aim_time_modifier: 'Modificador de tiempo de apuntado',
            reload_time: 'Tiempo de recarga',
            reload_speed_modifier: 'Modificador de velocidad de recarga',
            show_time: 'Tiempo de mostrado',
            hide_time: 'Tiempo de ocultado',
            degrade_per_death: 'Degradación por partida',
            tactical_reload_time: 'Duración de recarga táctica',
            experience_bonus_modifier: 'Exp. bonus modifier',
            money_bonus_modifier: 'Modificador de bonificación de dinero',
            reputation_bonus_modifier: 'Modificador de bonificación de reputación',
            unknown_mods_count: 'Cantidad de modificadores desconocidos',
            details_to_craft: 'Piezas necesarias para crear',
            recoil: 'Retroceso desde la cadera',
            aim_recoil: 'Retroceso apuntando',
            left: 'Izquierda',
            top: 'Arriba',
            right: 'Derecha',
            shots_to_change_direction: 'Disparos para cambiar de dirección',
            first_shoot_recoil_multiplier: 'Multiplicador de retroceso del primer disparo',
            shake_time_scale: 'Escala de tiempo de la sacudida',
            shake_recoil: 'Sacudida del retroceso',
            recoil_power: 'Fuerza del retroceso',
            compensation_proportional_gain: 'Compensation proportional gain',
            compensation_integral_gain: 'Compensation integral gain',
            compensation_derivational_gain: 'Compensation derivational gain',
            splash_min_damage: 'Daño mínimo',
            splash_max_damage: 'Daño máximo',
            splash_radius: 'Radio de impacto',
            activation_time: 'Tiempo de activación',
            damage_protection: {
                title: 'Protección de daño',
                ranged: 'Rango',
                radiation: 'Radiación',
                blunt: 'Directo',
                explosive: 'Explosivo',
                stamina: 'Aguante',
                slash: 'Impacto',
                speed: 'Velocidad',
                bleeding: 'Sangrado'
            },
            activity_time_sec: 'Tiempo de activación',
            heal_amount: 'Curación',
            damage_protection_health: 'Protección contra daño de salud',
            damage_protection_infection: 'Protección contra daño de infección',
            activity_time_skill_influence: 'Influencia de las habilidades en el tiempo de activación',
            removes_bleeding: 'Quita sangrado',
            influences: {
                title: 'Factores',
                left_hand: 'Mano izquierda',
                right_hand: 'Mano derecha',
                left_leg: 'Pierna izquierda',
                right_leg: 'Pierna derecha',
                hands: 'Manos',
                legs: 'Piernas',
                head: 'Cabeza',
                body: 'Cuerpo',
                health: 'Salud'
            },
            damage: 'Daño',
            arp: 'ARP',
            required_bags: 'Bolsas necesarias',
            clip_size: 'Tamaño del cartucho',
            clip_weight: 'Peso del cartucho',
            pierce_dispersion_angle: 'Ángulo de dispersión de la penetración',
            dispersion: 'Dispersión',
            ricochet_chance: 'Probabilidad de rebotar',
            ricochet_angle: 'Ángulo de rebotación',
            ricochet_dispersion_angle: 'Ángulo de dispersión de la rebotación',
            muzzle_speed: 'Velocidad del proyectil',
            buck_shot: 'Perdigones',
            buck_dispersion: 'Dispersión de los perdigones',
            air_resistance: 'Resistencia al aire',
            mass: 'Masa',
            k_power: 'Poder de multip.',
            k_max_distance_power: 'Multiplicador de poder en alcance máximo',
            distance: 'Alcance',
            k_material_pierce: 'Multiplicador de penetración de material',
            k_min_damage_distance: 'Multiplicador del alcance de daño mínimo',
            k_max_damage_distance: 'Multiplicador del alcance del daño máximo',
            k_min_damage_mult: 'Multiplicador del multiplicador de daño mínimo',
            k_stamina_damage: 'Multiplicador del daño de aguante',
            bleeding_chance_modifier: 'Modificador de probabilidad de sangrado',
            tracer: 'Trazador',
            gramm: 'g.',
            armor: 'Protección',
            bleeding_protection: 'Protección contra sangrado',
            hit_params: {
                brain: 'Cerebro',
                face: 'Cara',
                front: 'Frontal',
                left_forearm: 'Antebrazo izquierdo',
                back: 'Espalda',
                right_forearm: 'Antebrazo derecho',
                left_hip: 'Cadera izquierda',
                right_hip: 'Cadera derecha',
                left_arm: 'Brazo izquierdo',
                right_arm: 'Brazo derecho',
                left_foot: 'Pie izquierdo',
                right_foot: 'Pie derecho',
                title: 'Hit target'

            },
            explosion: 'Explosión',
            ano_armor: 'Protección contra anomalías',
            explosion_armor: 'Protección contra explosiones',
            speed_armor: 'Protección de velocidad',
            repair_cost_ratio: 'Coeficiente del coste de reparación',
            bleeding_resistance: 'Resistencia al sangrado',
            stamina_armor: 'Protección de aguante',
            camo_available: 'Camuflaje disponible',
            decal_available: 'Diseño disponible',
            chamber_a_round_time: 'Tiempo de expulsión del cartucho',
            explode_on_trigger_item: 'Explode on trigger',
            defuse_time: 'Tiempo de desactivación',
            scanner_detectable: 'Detección por escáneres',
            delay_activation_ms: 'Retardo de activación'
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
        show: 'Mostrar inventario',
        hide: 'Ocultar inventario'
    },
    months: {
        jan: 'ene',
        feb: 'feb',
        mar: 'mar',
        apr: 'abr',
        may: 'may',
        jun: 'jun',
        jul: 'jul',
        aug: 'ago',
        sep: 'sep',
        oct: 'oct',
        nov: 'nov',
        dec: 'dic'
    },
    dates: {
        y: 'a.',
        m: 'mes',
        d: 'd.',
        h: 'h.',
        mm: 'm.'
    },
    advert: {
        title: 'Anuncios',
        preloader: 'Cargando anuncios...',
        adblock: 'Por favor, desactiva el AdBlock'
    },
    lang: {
        ru: 'Ruso',
        en: 'Inglés'
    },
    pve: {
        docTitle: 'mapas de alijo del modo PVE',
        docDescription: 'Ubicaciones de los alijos del modo PVE de Survarium',
        title: 'PVE',
        missions:  'Misión',
        stage: 'Etapa',
        map: 'Mapa'
    },
    factions: {
        scavengers: 'Carroñeros',
        blackMarket: 'Mercado Negro',
        renaissance: 'Ejército del Renacimiento',
        edge: 'Asentamiento de la Franja'
    },
    factionChallenge: {
        title: 'Desafío de facciones',
        schedule: 'Calendario de batallas del desafío de facciones',
        all: 'Todas',
        future: 'Próximas'
    }
};

export { dict }
export default dict;
