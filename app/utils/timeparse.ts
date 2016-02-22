import leadZeros from './leadzeros'

export default function timeParse (date) :string {
    if (! (date instanceof Date)) {
        date = new Date(date);
    }
    return date.getFullYear() + '-' +
        leadZeros(date.getMonth() + 1) + '-' +
        leadZeros(date.getDate()) + ' ' +
        leadZeros(date.getHours()) + ':' +
        leadZeros(date.getMinutes()) + ':' +
        leadZeros(date.getSeconds());
}
