import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({name: 'number'})
export class NumberPipe implements PipeTransform {
    transform(value :number, args:string[]) : any {
        return (value || '0').toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
    }
}

export default NumberPipe
