function countBinarySubstrings(s: string): number {
    let count = 0;
    let prevLength = 0;
    let curLength = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            curLength++;
        } else {
            prevLength = curLength;
            curLength = 1;
        }

        if (prevLength >= curLength) {
            count++;
        }
    }

    return count;
};