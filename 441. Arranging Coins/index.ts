function arrangeCoins(n: number): number {
    let level=0;
    let coins=1;

    while(n>=coins){
        n=n-coins;
        coins++;
        level++
    }
    return level

};