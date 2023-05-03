function arraySign(nums: number[]): number {
    if (nums.length < 1) return;
    let negCount = 0;
    for (let num of nums) {
        if (num === 0) return 0;
        else if (num < 0) return negCount++
    } return negCount % 2 ? -1 : 1
};