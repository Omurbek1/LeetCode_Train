function countPalindromicSubsequence(s: string): number {
    let res: number = 0;
    for (let i = 0; i < 26; i++) {
        let left: number = s.indexOf(String.fromCharCode(97 + i));
        let right: number = s.lastIndexOf(String.fromCharCode(97 + i));
        if (left !== -1 && right !== -1 && left !== right) {
            let set: Set<string> = new Set();
            for (let j = left + 1; j < right; j++) {
                set.add(s[j]);
            }
            res += set.size;
        }
    }
    return res;

};