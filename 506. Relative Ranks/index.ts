function findRelativeRanks(score: number[]): string[] {
    let sorted = [...score].sort((a, b) => b - a);
    let ranks = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    let preRanks = sorted.reduce((a, b, i) => {
        a[b] = ranks[i] || `${i + 1}`;
        return a;
    }, {});
    return score.map(s => preRanks[s]);
};