function jump(nums: number[]): number {
    let jump = 0;
    let end = 0;
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i]);
        if (i === end) {
            jump++;
            end = max;
        }
    }
    return jump
};