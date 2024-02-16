function findLeastNumOfUniqueInts(arr: number[], k: number): number {

    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    const sorted = Array.from(map.entries()).sort((a, b) => a[1] - b[1]);
    let count = sorted.length;
    for (let i = 0; i < sorted.length; i++) {
        if (k >= sorted[i][1]) {
            k -= sorted[i][1];
            count--;
        } else {
            break;
        }
    }

    return count;
}
