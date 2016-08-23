import { Pipe, PipeTransform } from '@angular/core';
import { i18n } from '../services/i18n'

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const YEAR = 365 * DAY;

@Pipe({name: 'elapsed'})
export class ElapsedPipe implements PipeTransform {
    transform(value ?:number, args ?:string) : any {
        if (!value) {
            return;
        }

        let years;
        value -= (YEAR * (years = Math.floor(value / YEAR)));

        let days;
        value -= (DAY * (days = Math.floor(value / DAY)));

        let hours;
        value -= (HOUR * (hours = Math.floor(value / HOUR)));

        let minutes = Math.floor(value / MINUTE);

        return [
            years && years + i18n.get('dates.y'),
            (days || years) && days + i18n.get('dates.d'),
            hours + i18n.get('dates.h'),
            minutes + i18n.get('dates.mm')
        ].filter(Boolean).join(' ');
    }
}

export default ElapsedPipe
