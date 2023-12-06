function totalMoney(n: number): number {
    let weeks = Math.floor(n / 7);
    let days=n%7
    let total=((weeks*(weeks-1))/2)*7
    total+=weeks*28
    total+=((days*(days+1))/2)+(weeks*days)
    return total
};