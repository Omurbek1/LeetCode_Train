function maxCoins(piles: number[]): number {

    const sortedPiles = [...piles].sort((a, b) => b - a);
    let res = 0;
    for (let i = 0; i < sortedPiles.length / 3; i++) {
        res += sortedPiles[i * 2 + 1];
    }
    return res;

};