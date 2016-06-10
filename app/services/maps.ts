import { Injectable } from '@angular/core'
import { DomSanitizationService } from '@angular/platform-browser'

const BASE_LANG = 'english';

const MAPPED = {
    'Rudnya': {
        id: 1,
        weather: {
            day: 'day',
            evening: 'evening',
            rain: 'rain'
        }
    },
    'School': {
        id: 2,
        weather: {
            day: 'day',
            evening: 'evening',
            rain: 'rain'
        }
    },
    'Vostok Radar Station': {
        id: 3,
        weather: {
            day: 'day',
            evening: 'evening',
            rain: 'rain'
        }
    },
    'Chemical Plant': {
        id: 4,
        weather: {
            day: 'day',
            evening: 'evening',
            rain: 'rain'
        }
    },
    'Tarakanovsky Fort': {
        id: 5,
        weather: {
            day: 'day',
            evening: 'evn',
            rain: 'rain'
        }
    },
    'Mamayev Kurgan': {
        id: 6,
        weather: {
            day: 'day',
            evening: 'evening',
            rain: 'rain'
        }
    },
    'Vector Laboratory': {
        id: 7,
        weather: {
            day: 'day',
            evening: 'evn',
            rain: 'rain'
        }
    },
    'Cologne Bridge': {
        id: 8,
        weather: {
            day: 'day',
            evening: 'evn',
            rain: 'rain',
            prerain: 'prerain'
        }
    },
    'London': {
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
        'Рудня': 'Rudnya',
        'Школа': 'School',
        'РЛС Восток': 'Vostok Radar Station',
        'Химзавод': 'Chemical Plant',
        'Таракановский форт': 'Tarakanovsky Fort',
        'Мамаев курган': 'Mamayev Kurgan',
        'Лаборатория Вектор': 'Vector Laboratory',
        'Кельн': 'Cologne Bridge',
        'Лондон': 'London'
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
            name: I18N_MAPS[lang][info.name],
            weather: I18N_WEATHER[lang][info.weather]
        };
    }

    public image(map ?:{ id :number, lang :any }) {
        if (!map) {
            return;
        }

        let data = map.lang;
        let info = data[BASE_LANG] || this.translateInfo(data);

        if (!info) {
            return;
        }

        let MAP = MAPPED[info.name];

        let image = ['level', MAP.id, MAP.weather[info.weather]].filter(Boolean);

        if (image.length < 3) {
            return;
        }

        return this._domSanitize.bypassSecurityTrustStyle(`url(/assets/ui_loading/${image.join('_')}.jpg)`);
    }

    constructor (private _domSanitize :DomSanitizationService) {}
}

export default MapsService
