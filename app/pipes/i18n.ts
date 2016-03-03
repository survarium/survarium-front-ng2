import { Pipe, PipeTransform } from 'angular2/core';
import { i18n } from '../services/i18n'

@Pipe({ name: 'i18n' })
export class I18NPipe implements PipeTransform {
    transform(key :string|number, args:string[]) : any {
        let allowOriginal;

        if (args.length) {
            let allowOriginalPos = args.indexOf('allowOriginal');
            allowOriginal = allowOriginalPos !== -1;
            if (allowOriginal) {
                args.splice(allowOriginalPos, 1);
            }
        }

        let opts = {};
        if (args.length) {
            args.reduce((opts, arg) => {
                let [ key, val ] = arg.split('=');
                opts[key] = val;
                return opts;
            }, opts);
        }

        return i18n.get(key, opts) || (allowOriginal ? key : `I18N: missing \`${key}\``);
    }
}

export default I18NPipe
