function firstMissingPositive(nums: number[]): number {
    let i = 0;
    while (i < nums.length) {
        let correctIndex = nums[i] - 1;
        if(nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
return nums.length + 1
};