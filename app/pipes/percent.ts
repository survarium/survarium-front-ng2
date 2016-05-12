import { Pipe, PipeTransform } from '@angular/core';
import PercentUtil from '../utils/percent'

@Pipe({name: 'percent'})
export class PercentPipe implements PipeTransform {
    transform(value :number, args:string[]) : any {
        return PercentUtil(value);
    }
}

export default PercentPipe
