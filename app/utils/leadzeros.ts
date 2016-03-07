export function leadZeros (num :number, rate ?:number) :string {
    rate = rate || 2;
    var str = String(num);
    var fill = rate - str.length;
    if (fill <= 0) {
        return str;
    }
    return (new Array(fill + 1)).join('0') + str;
}

export default leadZeros
