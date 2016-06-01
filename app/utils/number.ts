export function NumberTransform (value :number, args ?:string[]) :string {
    return (value || '0').toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
}

export default NumberTransform
