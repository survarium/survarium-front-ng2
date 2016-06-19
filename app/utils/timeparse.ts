import leadZeros from './leadzeros'
import { LANGUAGE } from '../services/i18n'

export default function timeParse (date, options ?:any) :string {
    if (! (date instanceof Date)) {
        date = new Date(date);
    }
    options = options || {};

    if (LANGUAGE.lang === 'en') {
        if (options.slim) {
            return leadZeros(date.getMonth() + 1) + '/' +
                leadZeros(date.getDate()) + ' ' +
                leadZeros(date.getHours()) + ':' +
                leadZeros(date.getMinutes());
        }

        return date.getFullYear() + '-' +
            leadZeros(date.getMonth() + 1) + '-' +
            leadZeros(date.getDate()) + ' ' +
            leadZeros(date.getHours()) + ':' +
            leadZeros(date.getMinutes()) + ':' +
            leadZeros(date.getSeconds());
    }

    if (options.slim) {
        return leadZeros(date.getMonth() + 1) + '.' +
            leadZeros(date.getDate()) + ' ' +
            leadZeros(date.getHours()) + ':' +
            leadZeros(date.getMinutes());
    }

    return date.getFullYear() + '.' +
        leadZeros(date.getMonth() + 1) + '.' +
        leadZeros(date.getDate()) + ' ' +
        leadZeros(date.getHours()) + ':' +
        leadZeros(date.getMinutes()) + ':' +
        leadZeros(date.getSeconds());
}
