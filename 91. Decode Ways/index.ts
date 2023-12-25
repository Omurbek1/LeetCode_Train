function numDecodings(s: string): number {
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;
    for (let i = 2; i <= s.length; i++) {
        const first = parseInt(s.slice(i - 1, i));
        const second = parseInt(s.slice(i - 2, i));
        if (first >= 1 && first <= 9) {
            dp[i] += dp[i - 1];
        }
        if (second >= 10 && second <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[s.length];
};