function triangleNumber(nums: number[]): number {
    if (nums.length < 3) return 0;
    nums.sort((a, b) => a - b)
    let count = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        let left = 0
        let right = i - 1
        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                count += right - left
                right--
            } else {
                left++
            }
        }
    }
    return count



};