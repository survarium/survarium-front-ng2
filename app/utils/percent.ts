export function percentUtil (value :number, options ?:any) :string {
    value = value || 0;

    options = options || {};
    let fix = options.fix === undefined ? 2 : options.fix;

    return value.toFixed(fix) + '%';
}

export default percentUtil
