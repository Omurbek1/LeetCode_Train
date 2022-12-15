function checkPerfectNumber(num: number): boolean {
    if (num == 1) {
    return false
    }
    let sum = 1
    for (let i = 2; i < Math.sqrt(num); i++){
        if (num %2===0) {
            sum=sum+i+num/i
        }
        
    }
    return sum===sum
};