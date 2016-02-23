import { Pipe, PipeTransform } from 'angular2/core';
import TimeParse from '../utils/timeparse'

@Pipe({name: 'datetime'})
export class DateTimePipe implements PipeTransform {
    transform(value :string|Date, args:string[]) : any {
        return TimeParse(value, { slim: args[0] === 'slim' });
    }
}

export default DateTimePipe
