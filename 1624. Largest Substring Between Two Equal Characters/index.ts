function maxLengthBetweenEqualCharacters(s: string): number {

    const map = new Map<string, number>();

    let max = -1;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            const len = i - map.get(s[i]) - 1;
            max = Math.max(max, len);
            continue;
        }

        map.set(s[i], i);
    }
    return max;
};