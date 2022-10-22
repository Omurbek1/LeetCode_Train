/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	let i = nums.length - 2;
	while (nums[i] >= nums[i + 1]) {
		i--;
	}
	if (i === -1) {
		nums.sort((a, b) => a - b);
    } else {
        let j=nums.length-1
        while (nums[i] >= nums[j]) {
           j--
        }
        [nums[i], nums[j] = nums[j], nums[i]]
        let left = i + 1, right = nums.length - 1
        while (left<right) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++;
            right--
        }
	}
};
