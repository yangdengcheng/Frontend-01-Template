/**
 * Convert Number to String
 * @param number 数字
 * @param hex 进制数
 */
function convertNumberToString(myNumber: number, hex: number) {
    let integer: number = Math.floor(myNumber);
    let fraction: string[] | string = String(myNumber).match(/\.\d+$/);
    if (fraction) {
        fraction = fraction[0].replace('', '');
    }
    let result: string = '';
    while (integer > 0) {
        result = String(integer % hex) + result;
        integer = Math.floor(integer / hex);
    }
    return fraction ? `${result}.${fraction}` : result;
}