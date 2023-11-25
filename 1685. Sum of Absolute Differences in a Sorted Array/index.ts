function getSumAbsoluteDifferences(nums: number[]): number[] {
    const sum=nums.reduce((a,b)=>a+b)
    let l=0
    return nums.map((n, i) => sum + 2 * (i * n + n - (l += n)) - n * nums.length);

};