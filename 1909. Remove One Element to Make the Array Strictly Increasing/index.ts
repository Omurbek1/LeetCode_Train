function canBeIncreasing(nums: number[]): boolean {
    let count = 0;
    for (let i = 0; i < nums.length && count <= 1; i++) {
        if (nums[i] <= nums[i - 1]) {
            count++;
            if (i > 1 && nums[i] <= nums[i - 2]) {
                nums[i] = nums[i - 1];
            }
        }
    }
    return count <= 1;
};