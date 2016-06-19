import leadZeros from './leadzeros'
import { LANGUAGE, i18n } from '../services/i18n'

const monthsOrder = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

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
        return leadZeros(date.getDate()) + ' ' +
            i18n.get(`months.${monthsOrder[date.getMonth()]}`) + '. ' +
            leadZeros(date.getHours()) + ':' +
            leadZeros(date.getMinutes());
    }

    return leadZeros(date.getDate()) + '.' +
        leadZeros(date.getMonth() + 1) + '.' +
        date.getFullYear() + ' ' +
        leadZeros(date.getHours()) + ':' +
        leadZeros(date.getMinutes()) + ':' +
        leadZeros(date.getSeconds());
}
