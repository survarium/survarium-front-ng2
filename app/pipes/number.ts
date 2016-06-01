import { Pipe, PipeTransform } from '@angular/core';
import { NumberTransform} from '../utils/number';

@Pipe({name: 'number'})
export class NumberPipe implements PipeTransform {
    transform = NumberTransform
}

export default NumberPipe
