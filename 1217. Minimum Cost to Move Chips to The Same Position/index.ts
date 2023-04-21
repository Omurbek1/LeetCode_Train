function minCostToMoveChips(position: number[]): number {

    let odd = 0, even = 0;
    for (const positions of position) {
        if (positions % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    return Math.min(odd, even);
};