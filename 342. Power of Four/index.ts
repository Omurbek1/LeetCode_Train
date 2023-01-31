function isPowerOfFour(n: number): boolean {
    if (n <= 0) {
        return false;
    }
    for (let i = 0; i < n; i++){
        if (4**i===n) {
            return true
        } else if (4 ** i > n) {
            return false
        }
    }

};