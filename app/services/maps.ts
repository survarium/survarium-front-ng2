import { Injectable } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

const BASE_LANG = 'english';

const MAPPED = {
    'rudnya': {
        id: 1,
        weather: {
            day: 'day',
            evening: 'evening',
            rain: 'rain'
        }
    },
    'school': {
        id: 2,
        weather: {
            day: 'day',
            evening: 'evening',
            rain: 'rain'
        }
    },
    'vostok radar station': {
        id: 3,
        weather: {
            day: 'day',
            evening: 'evening',
            rain: 'rain'
        }
    },
    'chemical plant': {
        id: 4,
        weather: {
            day: 'day',
            evening: 'evening',
            rain: 'rain'
        }
    },
    'tarakanovsky fort': {
        id: 5,
        weather: {
            day: 'day',
            evening: 'evn',
            rain: 'rain'
        }
    },
    'mamayev kurgan': {
        id: 6,
        weather: {
            day: 'day',
            evening: 'evening',
            rain: 'rain'
        }
    },
    'vector laboratory': {
        id: 7,
        weather: {
            day: 'day',
            evening: 'evn',
            rain: 'rain'
        }
    },
    'cologne bridge': {
        id: 8,
        weather: {
            day: 'day',
            evening: 'evn',
            rain: 'rain',
            prerain: 'prerain'
        }
    },
    'london': {
        id: 9,
        weather: {
            day: 'day',
            evening: 'evn',
            rain: 'rain'
        }
    }
};

const I18N_MAPS = {
    russian: {
        'рудня': 'rudnya',
        'школа': 'school',
        'рлс восток': 'vostok radar station',
        'химзавод': 'chemical plant',
        'таракановский форт': 'tarakanovsky fort',
        'мамаев курган': 'mamayev kurgan',
        'лаборатория вектор': 'vector laboratory',
        'кельн': 'cologne bridge',
        'лондон': 'london'
    }
};

const I18N_WEATHER = {
    russian: {
        'пасмурный': 'prerain',
        'день': 'day',
        'дождь': 'rain',
        'вечер': 'evening'
    }
};

@Injectable()
export class MapsService {
    private translateInfo(data) {
        let lang = 'russian';
        let info = data[lang];

        if (!info) {
            return;
        }

        return {
            name: I18N_MAPS[lang][info.name.toLowerCase()],
            weather: I18N_WEATHER[lang][info.weather]
        };
    }

    public image(map :{ id :number, lang :any }, place :any, weather :any) {
        if (!map && (!place && !weather)) {
            return;
        }

        let info;

        if (map) {
            let data = map.lang;
            info = data[BASE_LANG] || this.translateInfo(data);
        } else {
            info = {
                name: place.title,
                weather: weather.title
            };
        }

        if (!info) {
            return;
        }

        let MAP = MAPPED[info.name.toLowerCase()];

        if (!MAP) {
            return;
        }

        let image = ['level', MAP.id, MAP.weather[info.weather]].filter(Boolean);

        if (image.length < 3) {
            return;
        }

        return this._domSanitize.bypassSecurityTrustStyle(`url(/assets/ui_loading/${image.join('_')}.jpg)`);
    }

    constructor (private _domSanitize :DomSanitizer) {}
}

export default MapsService
