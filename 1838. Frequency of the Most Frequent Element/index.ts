function maxFrequency(nums: number[], k: number): number {

    nums.sort((a, b) => a - b);
    let left = 0;
    let right = 0;
    let max = 0;
    let sum = 0;
    while (right < nums.length) {
        sum += nums[right];
        while (sum + k < nums[right] * (right - left + 1)) {
            sum -= nums[left];
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;

};