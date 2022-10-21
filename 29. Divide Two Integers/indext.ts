var divide = function(dividend, divisor) {
    if (dividend == 0) {
        return 0
    } else if (divisor === 1) {
        return dividend
    } else if (divisor == -1) {
        if (dividend == -2147483648) {
            return 2147483648
        }
        return -dividend;
    }
    var minus = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? true : false
    
    let dd = Math.abs(dividend)
    let dv = Math.abs(divisor)
    let res =0,i=1 , tmp=dv
};