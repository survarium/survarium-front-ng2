import { Pipe, PipeTransform } from '@angular/core';
import { i18n } from '../services/i18n'

@Pipe({ name: 'i18n' })
export class I18NPipe implements PipeTransform {
    transform(key :string|number, args:any) : any {
        return i18n.get(key, args) || `\`i18n:${key}\``;
    }
}

@Pipe({ name: 'i18nL' })
export class I18NLocalPipe implements PipeTransform {
    transform(key :any, args:any) : any {
        let result = i18n.chooseFrom(key, args);

        if (!result && (!args || !args.allowEmpty)) {
            result = `\`i18n:empty_dict\``;
        }

        return result;
    }
}

export default I18NPipe
