import { leadZeros } from './leadzeros'

export function duration(sec) {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setSeconds(sec);
    return leadZeros(d.getMinutes(), 2) + ':' + leadZeros(d.getSeconds(), 2);
}

export default duration
