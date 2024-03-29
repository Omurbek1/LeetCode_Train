function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};