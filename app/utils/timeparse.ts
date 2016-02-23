import leadZeros from './leadzeros'

export default function timeParse (date, options ?:any) :string {
    if (! (date instanceof Date)) {
        date = new Date(date);
    }
    options = options || {};
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
