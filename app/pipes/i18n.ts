import { Pipe, PipeTransform } from 'angular2/core';
import { i18n } from '../services/i18n'

@Pipe({ name: 'i18n' })
export class I18NPipe implements PipeTransform {
    transform(key :string|number, args:any) : any {
        return i18n.get(key, args) || `\`i18n:${key}\``;
    }
}

export default I18NPipe
