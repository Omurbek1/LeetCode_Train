function findLHS(nums: number[]): number {
    const map = new Map();
    let maxLen = 0;

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    for (const [num, count] of map) {
        if (map.has(num + 1)) {
            maxLen = Math.max(maxLen, count + map.get(num + 1));
        }
    }

    return maxLen;
};