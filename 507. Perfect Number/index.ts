function checkPerfectNumber(num: number): boolean {
    if (num === 1) {
        return false;
    }
    let sum = 1;
    for (let i = 2; i < Math.floor( Math.sqrt(num)); i++) {
        if (num % i === 0) {
            sum +=  (num/i) + i;
        }
    }
    if (sum === num) {
        return true
    } else {
        return false
    }
    
}
