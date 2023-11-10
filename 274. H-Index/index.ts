function hIndex(citations: number[]): number {
    const n = citations.length;
    const counter = new Array(n + 1).fill(0);
    for (const citation of citations) {
        if (citation >= n) {
            counter[n]++;
        } else {
            counter[citation]++;
        }
    }
    let total = 0;
    for (let i = n; i >= 0; i--) {
        total += counter[i];
        if (total >= i) {
            return i;
        }
    }
    return 0;

};