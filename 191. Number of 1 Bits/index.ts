function hammingWeight(n: number | string): number {
    if (n) {
        return n.toString(2).match(/1/g)?.length;

    }
    return 0;
};