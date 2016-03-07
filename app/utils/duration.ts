import { leadZeros } from './leadzeros'

export function duration(sec) {
    var d = new Date();
    d.setUTCHours(0, 0, 0, 0);
    d.setSeconds(sec);
    return leadZeros(d.getUTCMinutes(), 2) + ':' + leadZeros(d.getUTCSeconds(), 2);
}

export default duration
