function numberOfArrays(s: string, k: number): number {
    const mod = 1e9 + 7;
    const n = s.length;
    const memo: number[] = new Array(n);

    const dp = (start: number): number => {
        if (start === n) {
            return 1;
        }
        if (s[start] === '0') {
            return 0;
        }
        if (memo[start] !== undefined) {
            return memo[start];
        }
        let count=0;
        let num=0;
        for (let i = start; i < n; i++) {
            num=num*10+parseInt(s[i]);
            if(num>k){
                break;
            }
            count=(count+dp(i+1))%mod;
        }
        memo[start]=count;
        return count;
    }
    return dp(0);
}
