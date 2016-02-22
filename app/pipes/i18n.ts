import { Pipe, PipeTransform, Injectable } from 'angular2/core';
import { i18n } from '../services/i18n'

@Pipe({name: 'i18n'})
export class I18NPipe implements PipeTransform {
    transform(key :string|number, args:string[]) : any {
        let options;
        let allowOriginal;
        if (args[0]) {
            options = args[0].split(';');
            allowOriginal = !!~options.indexOf('allowOriginal');
        }
        return i18n.get(key) || (allowOriginal ? key : `I18N: missing \`${key}\``);
    }
}

export default I18NPipe
