export const Colors = <any> ((COLORS) => {
    return Object.keys(COLORS).reduce((result, color) => {
        let _color = COLORS[color].base;
        result[color] = {
            backgroundColor          : `rgba(${_color[0]},${_color[1]},${_color[2]},0.07)`,
            borderColor              : `rgba(${_color[0]},${_color[1]},${_color[2]},1)`,
            pointBackgroundColor     : `rgba(${_color[0]},${_color[1]},${_color[2]},0.7)`,
            pointBorderColor         : 'rgba(255,255,255,0.5)',
            pointHoverBackgroundColor: `rgba(${_color[0]},${_color[1]},${_color[2]},1)`,
            pointHoverBorderColor    : `#fff`,
            color                    : `rgba(${_color[0]},${_color[1]},${_color[2]},1)`,
            highlight                : `rgba(${_color[0]},${_color[1]},${_color[2]},0.8)`
        };
        return result;
    }, {});
})({
    'turquoise'    : { base: ['000', '190', '156'] },
    'green-tea'    : { base: ['001', '161', '133'] },
    'emerald'      : { base: ['030', '206', '108'] },
    'nephritis'    : { base: ['026', '175', '093'] },
    'peter-river'  : { base: ['044', '151', '223'] },
    'belize-hole'  : { base: ['034', '127', '188'] },
    'amethyst'     : { base: ['156', '086', '184'] },
    'wisteria'     : { base: ['143', '063', '174'] },
    'wet-asphalt'  : { base: ['051', '071', '095'] },
    'midnight-blue': { base: ['043', '061', '081'] },
    'sun-flower'   : { base: ['243', '197', '000'] },
    'orange'       : { base: ['245', '156', '000'] },
    'carrot'       : { base: ['232', '126', '004'] },
    'pumpkin'      : { base: ['213', '084', '000'] },
    'alizarin'     : { base: ['234', '075', '053'] },
    'pomegranate'  : { base: ['195', '056', '037'] },
    'clouds'       : { base: ['236', '240', '241'] },
    'silver'       : { base: ['190', '195', '199'] },
    'concrete'     : { base: ['149', '165', '165'] },
    'asbestos'     : { base: ['126', '140', '141'] },
    'white'        : { base: ['255', '255', '255'] },
    'gray-1'       : { base: ['233', '234', '234'] },
    'gray-2'       : { base: ['213', '214', '217'] },
    'gray-3'       : { base: ['177', '183', '188'] },
    'gray-4'       : { base: ['144', '152', '161'] },
    'gray-5'       : { base: ['108', '120', '133'] },
    'gray-6'       : { base: ['078', '093', '109'] },
    'gray-7'       : { base: ['058', '075', '094'] },
    'gray-8'       : { base: ['044', '062', '082'] },
    'black'        : { base: ['000', '000', '000'] },
    'highlight'    : { base: ['255', '206', '031'] },
    'dark-unica-1' : { base: ['043', '144', '143'] }
});
