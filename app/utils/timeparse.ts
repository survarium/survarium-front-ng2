import leadZeros from './leadzeros'
import { LANGUAGE, i18n } from '../services/i18n'

const monthsOrder = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

export default function timeParse (date, options ?:any) :string {
    if (! (date instanceof Date)) {
        date = new Date(date);
    }
    options = options || {};

    if (options.onlyTime) {
        return leadZeros(date.getHours()) + ':' +
            leadZeros(date.getMinutes());
    }

    if (LANGUAGE.lang === 'en') {
        if (options.slim) {
            return leadZeros(date.getMonth() + 1) + '/' +
                leadZeros(date.getDate()) + ' ' +
                leadZeros(date.getHours()) + ':' +
                leadZeros(date.getMinutes());
        }

        if (options.onlyDate) {
            return date.getFullYear() + '-' +
                leadZeros(date.getMonth() + 1) + '-' +
                leadZeros(date.getDate());
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

    if (options.onlyDate) {
        return leadZeros(date.getDate()) + '.' +
            leadZeros(date.getMonth() + 1) + '.' +
            date.getFullYear();
    }

    return leadZeros(date.getDate()) + '.' +
        leadZeros(date.getMonth() + 1) + '.' +
        date.getFullYear() + ' ' +
        leadZeros(date.getHours()) + ':' +
        leadZeros(date.getMinutes()) + ':' +
        leadZeros(date.getSeconds());
}
