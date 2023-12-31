function maxLengthBetweenEqualCharacters(s: string): number {

    const charMap = new Map();
    for (let i = 0; i < s.length; i++) {
        charMap.set(s[i], i);
    }
    let max = -1;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (charMap.get(s[i]) === charMap.get(s[j])) continue;
            max = Math.max(max, j - i - 1);
        }
    }
    return max;
};