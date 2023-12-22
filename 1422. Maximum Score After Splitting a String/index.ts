function maxScore(s: string): number {
    let Max = 0;
    for (let i = 1; i < s.length; ++i) {
        const maxx = s.substring(0, i).split('0').length - 1 + s.substring(i).split('1').length - 1;
        Max = Math.max(Max, maxx);
    }
    return Max;
};