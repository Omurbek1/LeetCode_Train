function findKthPositive(arr: number[], k: number): number {

    let count = 0;
    let i = 1;
    while (count < k) {
        if (!arr.includes(i)) {
            count++;
        }
        i++;
    }
    return i - 1;

};