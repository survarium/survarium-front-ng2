import { Pipe, PipeTransform } from '@angular/core';
import TimeParse from '../utils/timeparse'

@Pipe({name: 'datetime'})
export class DateTimePipe implements PipeTransform {
    transform(value :string|Date, args:string) : any {
        return TimeParse(value, {
            slim: args === 'slim',
            onlyDate: args === 'date',
            onlyTime: args === 'time'
        });
    }
}

export default DateTimePipe
